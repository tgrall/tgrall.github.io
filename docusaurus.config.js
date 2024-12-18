const lightCodeTheme = require('prism-react-renderer/themes/github');
const darkCodeTheme = require('prism-react-renderer/themes/dracula');

/** @type {import('@docusaurus/types').DocusaurusConfig} */
module.exports = {
  title: "Tug's Site",
  tagline: 'Code, DevOps, Windsurfing and more...',
  url: 'https://tgrall.github.io',
  baseUrl: '/',
  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',
  favicon: 'img/favicon.ico',
  organizationName: 'tgrall', // Usually your GitHub org/user name.
  projectName: 'tgrall.github.io', // Usually your repo name.
  trailingSlash: false,
  themeConfig: {
    metadata: [{name: 'keywords', content: 'github, development, blog, devops, devsecops, cloud, java, javascript, copilot'}],
    navbar: {
      title: "Tug's Site",
      logo: {
        alt: 'My Site Logo',
        src: 'img/logo.png',
      },
      items: [
        {to: '/blog', label: 'Blog', position: 'left'},
        {to: '/talks', label: 'Talks', position: 'left'},
        {to: '/copilot', label: 'Copilot', position: 'left'},
        {
          href: 'https://windr.org',
          label: 'Windsurfing App',
          position: 'right',
        },
        {
          href: 'https://github.com/tgrall/tgrall.github.io',
          label: 'GitHub',
          position: 'right',
        },
      ],
    },
    footer: {
      style: 'dark',
      links: [
        {
          title: 'Community',
          items: [
            {
              label: 'Twitter',
              href: 'https://twitter.com/tgrall',
            },
            {
              label: 'YouTube',
              href: 'https://www.youtube.com/channel/UCA1kgHJTFZW-MRcr8KX_QYQ',
            },            
            {
              label: 'LinkedIn',
              href: 'https://www.linkedin.com/in/tugdualgrall/',
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
              href: 'https://github.com/tgrall',
            },
          ],
        },
      ],
      copyright: `Copyright © 2003 -- ${new Date().getFullYear()} Tugdual Grall built with Docusaurus.`,
    },
    prism: {
      theme: lightCodeTheme,
      darkTheme: darkCodeTheme,
      additionalLanguages: ['java'],
    },
},
  presets: [
    [
      '@docusaurus/preset-classic',
      {
        docs: {
          sidebarPath: require.resolve('./sidebars.js'),
          // Please change this to your repo.
          editUrl:
            'https://github.dev/tgrall/tgrall.github.io/blob/main/',
        },
        blog: {
          showReadingTime: true,
          // Please change this to your repo.
          editUrl:
            'https://github.dev/tgrall/tgrall.github.io/blob/main/',
        },
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
        googleAnalytics: {
          trackingID: 'UA-1520374-2'
        }    
      },
    ],
  ],
  themes: ['@docusaurus/theme-live-codeblock'],
  plugins: [[
    '@docusaurus/plugin-client-redirects',
    {
      redirects: [
        // /docs/oldDoc -> /docs/newDoc
        {
          to: '/blog/2023/12/24/quarkus-uploading-image-to-the-cloud',
          from: '/blog/2024/12/24/quarkus-uploading-image-to-the-cloud',
        }
      ],      
    }
  ]
    
  ]
};
