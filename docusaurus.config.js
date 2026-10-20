const {themes: prismThemes} = require('prism-react-renderer');

// With JSDoc @type annotations, IDEs can provide config autocompletion
/** @type {import('@docusaurus/types').Config} */
(module.exports = {
  title: 'Meng',
  tagline: "个人站",
  url: 'https://blog.mengfei.tech',
  baseUrl: '/',
  onBrokenLinks: 'throw',
  markdown: {
    mermaid: true,
    hooks: {
      onBrokenMarkdownLinks: 'warn',
    },
  },
  favicon: 'img/favicon.ico',
  organizationName: 'mengfei0053', // Usually your GitHub org/user name.
  projectName: 'Blog', // Usually your repo name.
  plugins:[
    function baiduAnalyze(context, options) {
      // ...
      return {
        name: 'baidu-hm',
        async loadContent() {
          // ...
        },
        async contentLoaded({ actions }){

         

        },
        injectHtmlTags(){
          return {
            // Gtag includes GA by default, so we also preconnect to google-analytics.
            headTags: [
                {
                    tagName: 'link',
                    attributes: {
                        rel: 'preconnect',
                        href: 'https://hm.baidu.com',
                    },
                },
                {
                    tagName: 'script',
                    innerHTML: `
                    var _hmt = _hmt || [];
                    (function() {
                      var hm = document.createElement("script");
                      hm.src = "https://hm.baidu.com/hm.js?51c5281e73e26b61eee7a274241d5123";
                      var s = document.getElementsByTagName("script")[0]; 
                      s.parentNode.insertBefore(hm, s);
                    })();
                    `,
                },
            ],
          };
        },
        /* other lifecycle API */
      };
    },
  ],

  themes: [
    '@docusaurus/theme-mermaid',
    [
      require.resolve('@easyops-cn/docusaurus-search-local'),
      /** @type {import('@easyops-cn/docusaurus-search-local').PluginOptions} */
      ({
        hashed: true,
        language: ['en', 'zh'],
        indexDocs: true,
        indexBlog: true,
        indexPages: true,
        docsRouteBasePath: '/docs',
        blogRouteBasePath: '/blog',
      }),
    ],
  ],

  presets: [
    [
      '@docusaurus/preset-classic',
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        gtag: {
          trackingID: 'G-YF800JYRCN',
        },
        docs: {
          sidebarPath: require.resolve('./sidebars.js'),
          // Please change this to your repo.
          editUrl: 'https://github.com/facebook/docusaurus/edit/main/website/',
        },
        blog: {
          showReadingTime: true,
          blogSidebarTitle: 'All posts',
          blogSidebarCount: 'ALL',
          // Please change this to your repo.
          editUrl:
            'https://github.com/facebook/docusaurus/edit/main/website/blog/',
        },
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
      }),
    ],
  ],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      navbar: {
        title: 'M',
        logo: {
          alt: 'My Site Logo',
          src: 'img/img_133326.png',
        },
        items: [
          { to: '/blog/tags/ai', label: 'AI', position: 'left' },
          { to: '/docs/guides', label: '技术文档', position: 'left' },
          { to:'/markdown-page', label:'常用设置', position: 'left' },
          { to:'/front-end-recommendation-libraries', label:'前端社区精选', position: 'left' },
          { to: '/blog', label: '文章', position: 'left'},
          {
            type: 'dropdown',
            label: '分类',
            position: 'left',
            items: [
              {label: 'AI', to: '/blog/tags/ai'},
              {label: 'Docker', to: '/blog/tags/docker'},
              {label: 'Linux', to: '/blog/tags/linux'},
              {label: 'Node.js', to: '/blog/tags/nodejs'},
              {label: 'React', to: '/blog/tags/react'},
              {label: 'TypeScript', to: '/blog/tags/typescript'},
              {label: 'Windows', to: '/blog/tags/windows'},
              {label: 'GitHub', to: '/blog/tags/github'},
              {label: '测试', to: '/blog/tags/testing'},
            ],
          },
          {
            href: 'https://github.com/facebook/docusaurus',
            label: 'GitHub',
            position: 'right',
          },
        ],
      },
      footer: {
        style: 'dark',
        links: [
          {
            title: 'Docs',
            items: [
              {
                label: '技术文档',
                to: '/docs/guides',
              },
            ],
          },
          {
            title: 'Community',
            items: [
              {
                label: 'Stack Overflow',
                href: 'https://stackoverflow.com/questions/tagged/docusaurus',
              },
              {
                label: 'Discord',
                href: 'https://discordapp.com/invite/docusaurus',
              },
              {
                label: 'Twitter',
                href: 'https://twitter.com/docusaurus',
              },
            ],
          },
          {
            title: 'More',
            items: [
              {
                label: 'Blog',
                to: '/blog',
              },
              {
                label: 'GitHub',
                href: 'https://github.com/mengfei0053/Blog',
              },
            ],
          },
        ],
        copyright: `Copyright © ${new Date().getFullYear()} My Project, Inc. Built with Docusaurus.`,
      },
      prism: {
        theme: prismThemes.github,
        darkTheme: prismThemes.dracula,
      },
    }),
});
