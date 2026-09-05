// @ts-check
import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';

// https://astro.build/config
export default defineConfig({
	integrations: [
		starlight({
			title: 'Jibo Moding Guide',
			favicon: 'public/jibo.svg',
			social: [{ icon: 'github', label: 'GitHub', href: 'https://github.com/Jibo-Revival-Group' }, { icon: 'discord', label: 'Discord', href: 'https://discord.gg/CBVJzkRGwN' }],
			sidebar: [
                                {
                                        label: 'Start Here',
                                        items:[{ autogenerate: {directory: 'Start here'}}]
                                },
				
				{
					label: 'Mod a Jibo',
					items: [
						{ label: 'Using JiboAutoMod', slug: 'mod/automod' },
					],
				},{
					label: 'Guides',
					items: [
						// Each item here is one entry in the navigation menu.
						{ label: 'Post-Mod Setup', slug: 'guides/pmscript' },
						{ label: 'How to use BEam-a-Maker', slug: 'guides/bamtut' },
					],
				},
				{
					label: 'Reference',
					items: [
						{ label: 'Jetstream Server Override', slug: 'reference/jetstream' },
					],
				},
			],
		}),
	],
});
