// @ts-check
import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';

// https://astro.build/config
export default defineConfig({
	integrations: [
		starlight({
			title: 'Jibo Moding Guide',
			social: [{ icon: 'github', label: 'GitHub', href: 'https://github.com/Jibo-Revival-Group' }],
			sidebar: [
                                {
                                        label: 'Start Here',
                                        items:[{ autogenerate: {directory: 'Start here'}}]
                                },
				{
					label: 'Guides',
					items: [
						// Each item here is one entry in the navigation menu.
						{ label: 'Documentation', slug: 'guides/example' },
					],
				},
				{
					label: 'Reference',
					items: [{ autogenerate: { directory: 'reference' } }],
				},
			],
		}),
	],
});
