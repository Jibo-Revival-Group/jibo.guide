/* Main JS — copy buttons, misc behaviors */

document.addEventListener('DOMContentLoaded', () => {
  addCopyButtons();
});

function getCleanText(pre) {
  const code = pre.querySelector('code');
  const el = code || pre;

  // Clone so we can mutate without touching the DOM
  const clone = el.cloneNode(true);

  // Remove prompt spans (the styled "$ " / "root@jibo:~# " prefixes)
  clone.querySelectorAll('.prompt').forEach(s => s.remove());

  let text = clone.innerText;

  // For shell blocks also strip any un-spanned inline prompt prefixes on each line
  if (pre.classList.contains('shell-block')) {
    text = text
      .split('\n')
      .map(line => line
        .replace(/^root@\S+[#$]\s*/, '')  // root@jibo:~#
        .replace(/^\$\s+/, '')             // bare $ prompt
      )
      .join('\n')
      .replace(/^\n+|\n+$/g, '');          // trim surrounding blank lines
  }

  return text;
}

function addCopyButtons() {
  document.querySelectorAll('pre').forEach(pre => {
    const btn = document.createElement('button');
    btn.className = 'copy-btn';
    btn.textContent = 'Copy';
    btn.addEventListener('click', () => {
      const text = getCleanText(pre);
      const confirm = () => {
        btn.textContent = 'Copied!';
        btn.classList.add('copied');
        setTimeout(() => {
          btn.textContent = 'Copy';
          btn.classList.remove('copied');
        }, 2000);
      };
      navigator.clipboard.writeText(text).then(confirm).catch(() => {
        /* fallback for non-HTTPS */
        const ta = document.createElement('textarea');
        ta.value = text;
        ta.style.position = 'absolute';
        ta.style.left = '-9999px';
        document.body.appendChild(ta);
        ta.select();
        document.execCommand('copy');
        document.body.removeChild(ta);
        confirm();
      });
    });
    pre.appendChild(btn);
  });
}
