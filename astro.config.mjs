// @ts-check
import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';

// https://astro.build/config
export default defineConfig({
	integrations: [
		starlight({
			title: 'Jibo Modding Guide',
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
						{ label: 'Post-Mod Setup', slug: 'mod/pmscript' },
					],
				},{
					label: 'Other',
					items: [
						{ label: 'How to use BEam-a-Maker', slug: 'guides/bamtut' },
						{ label: 'How to Pair Home Assistant', slug: 'haint' },
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
