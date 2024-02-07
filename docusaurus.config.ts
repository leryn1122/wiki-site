import {themes as prismThemes} from 'prism-react-renderer';
import type {Config} from '@docusaurus/types';
import type * as Preset from '@docusaurus/preset-classic';

const config: Config = {
  title: 'Leryn\'s Wiki Site',
  tagline: 'Leryn writes her own Wiki',
  favicon: 'img/favicon.ico',

  // Set the production url of your site here
  url: 'https://wiki.leryn.top',
  // Set the /<baseUrl>/ pathname under which your site is served
  // For GitHub pages deployment, it is often '/<projectName>/'
  baseUrl: '/',

  onBrokenLinks: 'warn',
  onBrokenMarkdownLinks: 'warn',

  // Even if you don't use internationalization, you can use this field to set
  // useful metadata like html lang. For example, if your site is Chinese, you
  // may want to replace "en" with "zh-Hans".
  i18n: {
    defaultLocale: 'en',
    locales: ['en'],
  },

  presets: [
    [
      'classic',
      {
        docs: {
          sidebarPath: './sidebars.ts',
          editUrl: 'https://github.com/leryn1122/wiki/tree/nightly/',
        },
        theme: {
          customCss: './src/css/custom.css',
        },
      } satisfies Preset.Options,
    ],
  ],

  themeConfig: {
    // Replace with your project's social card
    image: 'img/docusaurus-social-card.jpg',
    navbar: {
      title: 'Leryn\'s Wiki',
      logo: {
        alt: 'My Site Logo', 
        src: 'img/logo.svg',
      },
      items: [
        {
          type: 'docSidebar',
          sidebarId: 'tutorialSidebar',
          position: 'left',
          label: 'Tutorial',
        },
        {
          href: 'https://github.com/leryn1122/wiki',
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
              label: 'Yuque',
              href: 'https://yuque.com/leryn/wiki',
            },
            {
              label: 'GitHub',
              href: 'https://github.com/leryn1122/wiki',
            },
          ],
        },
      ],
      copyright: `Copyright © ${new Date().getFullYear()} Leryn. All Rights Reserved. Built with Docusaurus.
      <br/>
      <a href="https://beian.miit.gov.cn" target="_blank" style="text-decoration: none;">沪ICP备2021005089号</a>`,
    },
    prism: {
      theme: prismThemes.github,
      darkTheme: prismThemes.dracula,
      additionalLanguages: [
          'bash',
          'docker',
      ]
    },
  } satisfies Preset.ThemeConfig,
};

export default config;
