/* Welcome-page "Jibos for sale" embed (https://buy.jibo.guide/embed/).

   A single <iframe> is repositioned by viewport width so it loads only once:

     • Wide desktop (≥1500px): it lives in the right-gutter side panel beside
       the article and fills that otherwise-empty space. The embed reflows its
       card grid to whatever width the gutter gives it; if the listings run
       taller than the viewport, the panel scrolls within its own max-height.

     • Smaller screens: it lives inline, just above "Choose Your Route", as a
       single horizontally-scrollable row. The frame is made exactly wide enough
       for the current number of listings (one row, no empty trailing columns)
       using the listing count from the public API.

   The embed posts its rendered content height to us (`jibo-embed-height`); we
   use that to size the frame precisely in both placements. */
(function () {
  'use strict';

  var EMBED_SRC     = 'https://buy.jibo.guide/embed/';
  var API_URL       = 'https://buy.jibo.guide/api/listings?source=all&status=active';
  var SIDE_MQ       = '(min-width: 1500px)'; // matches the CSS gutter breakpoint
  var CARD_PITCH    = 184;  // embed card min-width (170px) + grid gap (12px)
  var FALLBACK_COLS = 10;   // assumed listing count until the API responds

  var sideHost   = document.getElementById('buy-embed-host-side');
  var inlineHost = document.getElementById('buy-embed-host-inline');
  if (!sideHost || !inlineHost) return;

  var frame = document.createElement('iframe');
  frame.src = EMBED_SRC;
  frame.title = 'Jibos currently for sale';
  frame.loading = 'lazy';
  frame.className = 'buy-embed-frame';
  // Start short so the reported height can only grow into the true content
  // height (see place()/onmessage for why this matters).
  frame.style.height = '60px';

  var mq = window.matchMedia(SIDE_MQ);
  var count = null;

  function inlineWidth() {
    var cols = count && count > 0 ? count : FALLBACK_COLS;
    return cols * CARD_PITCH + 'px';
  }

  // Move the frame into the slot for the current breakpoint and width it.
  function place() {
    // Reset to a short height first. The embed reports its height as
    // document.scrollHeight, which is max(content, viewport) — so a frame that
    // was previously tall (the full grid in the side panel, or a stale value)
    // would never shrink back to a single row. Starting short forces the next
    // reported height to be the true content height for the new placement.
    frame.style.height = '60px';
    if (mq.matches) {
      frame.style.width = '100%';
      if (frame.parentNode !== sideHost) sideHost.appendChild(frame);
    } else {
      frame.style.width = inlineWidth();
      if (frame.parentNode !== inlineHost) inlineHost.appendChild(frame);
    }
  }

  // Size the frame to the embed's reported content height. In the inline strip
  // that's exactly one row (the frame is wide enough to hold every card on one
  // line); in the side panel it's the full grid, clipped by the panel's
  // max-height with an internal scroll.
  window.addEventListener('message', function (e) {
    var d = e.data;
    if (d && d.type === 'jibo-embed-height' && d.height) {
      frame.style.height = d.height + 'px';
    }
  });

  // Get the active-listing count so the inline strip is exactly as wide as it
  // needs to be. Falls back to FALLBACK_COLS if the request fails.
  fetch(API_URL)
    .then(function (r) { return r.ok ? r.json() : null; })
    .then(function (d) { if (d && Number.isFinite(d.count)) count = d.count; })
    .catch(function () { /* keep the fallback width */ })
    .finally(function () { if (!mq.matches) frame.style.width = inlineWidth(); });

  if (mq.addEventListener) mq.addEventListener('change', place);
  else if (mq.addListener) mq.addListener(place); // older Safari

  place();
})();
