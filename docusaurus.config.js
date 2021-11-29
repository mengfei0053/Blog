const lightCodeTheme = require('prism-react-renderer/themes/github');
const darkCodeTheme = require('prism-react-renderer/themes/dracula');

// With JSDoc @type annotations, IDEs can provide config autocompletion
/** @type {import('@docusaurus/types').DocusaurusConfig} */
(module.exports = {
  title: 'Meng',
  tagline: "个人站",
  url: 'https://mengfei0053.github.io/',
  baseUrl: '/',
  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',
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

  presets: [
    [
      '@docusaurus/preset-classic',
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
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
      gtag: {
        trackingID: 'G-YF800JYRCN',
      },
      navbar: {
        title: 'M',
        logo: {
          alt: 'My Site Logo',
          src: 'img/img_133326.png',
        },
        items: [
         
          { to:'/markdown-page', label:'常用设置', position: 'left' },
          {to: '/blog', label: '文章', position: 'left'},
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
                label: 'Tutorial',
                to: '/docs/intro',
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
        theme: lightCodeTheme,
        darkTheme: darkCodeTheme,
      },
    }),
});
