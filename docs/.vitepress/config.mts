import {defineConfig} from 'vitepress'

// https://vitepress.dev/reference/site-config
export default defineConfig({
    lang: 'zh-CN',
    title: "Hungry Shoggoths",
    description: "js逆向学习笔记",
    base: '/hungryshoggoths/',
    themeConfig: {
        logo: '/logo.jpg',
        // siteTitle: false, //标题隐藏
        siteTitle: 'Hungry Shoggoths的技术博客',
        // https://vitepress.dev/reference/default-theme-config
        nav: [
            {text: 'Home', link: '/'},
            // {text: 'Examples', link: '/markdown-examples'},
            // {text: '首页', link: '/'},
            // {
            //     text: '指南',
            //     items: [
            //         {text: '前言', link: '/preface'},
            //         {text: '快速上手', link: '/getting-started'},
            //         {text: '配置', link: '/configuration'}
            //     ]
            // },
            // {text: '快速上手', link: '/getting-started'},
            // {text: 'VitePress', link: 'https://vitepress.dev/'},
            // {text: 'VitePress', link: 'https://vitepress.dev/', noIcon: true},
        ],

        sidebar: {
            // 目录1
            '/js_reverse_knowledge/': [
                {text: '索引页', link: '/js_reverse_knowledge/index'},
                {
                    text: 'articles',
                    items: [
                    ],
                },
            ],
            // 目录2
            '/js_reverse_examples/': [
                {text: '索引页', link: '/js_reverse_examples/index'},
                {

                    text: 'articles',
                    items: [
                    ],
                },
            ],
            // 目录3
            '/build_blog_notes/': [
                {text: '索引页', link: '/build_blog_notes/index'},
                {
                    text: 'articles',
                    items: [
                        {text: '博客建站资源', link: '/build_blog_notes/博客建站资源'},
                    ],
                },
            ],
            //
            // // 目录2
            // '/test2/': [
            //     {
            //         text: 'Config',
            //         items: [
            //             {text: 'Index', link: '/config/'},
            //             {text: 'Three', link: '/config/three'},
            //             {text: 'Four', link: '/config/four'}
            //         ],
            //     },
            // ],
        },
        //侧边栏
        // sidebar: [
        //     {
        //         //分组标题
        //         text: '指南',
        //         items: [
        //             {text: '前言', link: '/preface'},
        //             {text: '快速上手', link: '/getting-started'},
        //             {text: '配置', link: '/configuration'},
        //             {text: '页面', link: '/page'},
        //             {text: 'Frontmatter', link: '/frontmatter'},
        //             {text: 'Markdown', link: '/markdown'},
        //             {text: '静态部署', link: '/assets'},
        //         ],
        //     },
        // ],

        socialLinks: [
            {icon: 'github', link: 'https://github.com/hungryshoggoths'}
        ]
    },
    head: [
        ['link', {rel: 'icon', href: '/logo.jpg'}],
    ],
    //页脚
    footer: {
        message: 'Released under the MIT License.',
        copyright: 'Copyright © 2019-2023 present Evan You',
        // 自动更新时间
        //copyright: `Copyright © 2019-${new Date().getFullYear()} present Evan You`,
    },
    // carbonAds: {
    //   code: 'your-carbon-code',
    //   placement: 'your-carbon-placement',
    // },

    outline: {
        level: [2, 4], // 显示2-4级标题
        // level: 'deep', // 显示2-6级标题
        label: '当前页大纲' // 文字显示
    },
    //appearance:true, //默认浅色且开启切换
    //启用深色模式
    appearance: 'dark',
    // appearance:false, // 关闭
    // appearance: "force-dark", // 强制深色主题
    darkModeSwitchLabel: '深浅模式',
    sitemap: {
        hostname: 'https://hungryshoggoths.github.io',
    },
    search: {
        provider: 'local'
    },
})
