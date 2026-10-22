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
						{ label: 'Using the DFU Toolkit', slug: 'mod/dfu-toolkit' },
						{ label: 'Connect to 5x1', slug: 'mod/pmscript' },
						{ label: 'Connect to Phoenix', slug: 'mod/phoenix' },
						{ label: 'JiboAutoMod (Legacy)', slug: 'mod/automod' },
					],
				},{
					label: 'Other',
					items: [
						{ label: 'How to use BEam-a-Maker', slug: 'guides/bamtut' },
						{ label: 'How to Pair Home Assistant', slug: 'haint' },
					],
				},
				{
					label: 'Original Server Home',
					items: [{ autogenerate: { directory: '[original] Server Home' } }],
				},
                                {
					label: 'Platform Software',
					items: [{ autogenerate: { directory: 'Platform Software' } }],
				},

				{
					label: 'Reference',
					items: [
						{ label: 'Jetstream Server Override', slug: 'reference/jetstream' },
						{ label: 'Jibo SSM', slug: 'reference/ssm' },
						{ label: 'Useful Ports', slug: 'reference/useful-ports' },
					],
				},
			],
		}),
	],
	site: 'https://jibo.guide'
});
