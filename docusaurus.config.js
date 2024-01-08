// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion

const lightCodeTheme = require('prism-react-renderer/themes/github')
const darkCodeTheme = require('prism-react-renderer/themes/dracula')

// const lightCodeTheme = require('prism-react-renderer').themes.github
// const darkCodeTheme = require('prism-react-renderer').themes.dracula

const organizationName = "servablecommunity"
const projectName = "servable"
require('dotenv').config()

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'Servable',
  tagline: 'A protocol oriented Node JS framework',
  url: 'https://docs.servable.app',
  baseUrl: '/',
  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',
  favicon: 'img/favicon.ico', //https://icons8.com/icon/set/animals/plasticine
  plugins: [
    require.resolve('docusaurus-plugin-image-zoom'),
    // [
    //   'docusaurus2-dotenv',
    //   {
    //     path: "./.env", // The path to your environment variables.
    //     safe: false, // If false ignore safe-mode, if true load './.env.example', if a string load that file as the sample
    //     systemvars: true, // Set to true if you would rather load all system variables as well (useful for CI purposes)
    //     silent: false, //  If true, all warnings will be suppressed
    //     expand: false, // Allows your variables to be "expanded" for reusability within your .env file
    //     defaults: false, //  Adds support for dotenv-defaults. If set to true, uses ./.env.defaults
    //   }
    // ],
    'docusaurus-plugin-matomo',
    async function myPlugin(context, options) {
      return {
        name: "docusaurus-tailwindcss",
        configurePostCss(postcssOptions) {
          // Appends TailwindCSS and AutoPrefixer.
          postcssOptions.plugins.push(require("tailwindcss"));
          postcssOptions.plugins.push(require("autoprefixer"));
          return postcssOptions;
        },
      };
    },
    // [
    //   'docusaurus-plugin-openapi-docs',
    //   {
    //     id: "api", // plugin id
    //     docsPluginId: "classic", // id of plugin-content-docs or preset for rendering docs
    //     config: {
    //       petstore: { // the <id> referenced when running CLI commands
    //         specPath: "apis/petstore.yaml", // path to OpenAPI spec, URLs supported
    //         outputDir: "api/petstore", // output directory for generated files
    //         sidebarOptions: { // optional, instructs plugin to generate sidebar.js
    //           groupPathsBy: "tag", // group sidebar items by operation "tag"
    //         },
    //       },
    //       burgers: {
    //         specPath: "examples/food/burgers/openapi.yaml",
    //         outputDir: "api/food/burgers",
    //       }
    //     }
    //   },
    // ]   
  ],
  markdown: {
    mermaid: true,
  },
  themes: [
    '@docusaurus/theme-mermaid',
    "docusaurus-theme-openapi-docs"
  ],
  // GitHub pages deployment config.
  // If you aren't using GitHub pages, you don't need these.
  organizationName, // Usually your GitHub org/user name.
  projectName, // Usually your repo name.

  // Even if you don't use internalization, you can use this field to set useful
  // metadata like html lang. For example, if your site is Chinese, you may want
  // to replace "en" with "zh-Hans".
  i18n: {
    defaultLocale: 'en',
    locales: ['en'],
  },

  presets: [
    [
      'classic',
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          // lastVersion: 'current',
          sidebarPath: require.resolve('./sidebars.js'),
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          editUrl:
            'https://github.com/servable-community/generator-servable/tree/main/packages/create-docusaurus/templates/shared/',
          // docLayoutComponent: "@theme/DocPage",
          // docItemComponent: "@theme/ApiItem" // derived from docusaurus-theme-openapi-docs
        },
        blog: {
          showReadingTime: true,
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          editUrl:
            'https://github.com/servable-community/generator-servable/tree/main/packages/create-docusaurus/templates/shared/',
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
      matomo: {
        // matomoUrl: (process.env.MATOMO_URL && process.env.MATOMO_URL.length) ? process.env.MATOMO_URL : 'https://your.matomo.instance/',
        // siteId: (process.env.MATOMO_SITE_ID && process.env.MATOMO_SITE_ID.length) ? process.env.MATOMO_SITE_ID : 'ID',
        matomoUrl: "https://matomo.servable.app/",
        siteId: 1,
        phpLoader: 'matomo.php',
        jsLoader: 'matomo.js',
      },
      zoom: {
        selector: '.markdown :not(em) > img',
        background: {
          light: 'rgb(255, 255, 255)',
          dark: 'rgb(50, 50, 50)'
        },
        config: {
          // options you can specify via https://github.com/francoischalifour/medium-zoom#usage
        }
      },
      navbar: {
        title: 'Servable',
        logo: {
          alt: 'Logo',
          src: 'img/polar-bear.png',
        },
        items: [
          {
            type: 'docsVersionDropdown',
            position: 'left',
          },
          {
            type: 'doc',
            docId: 'guides/gettingstarted/overview',
            position: 'right',
            label: 'Guides',
          },
          {
            type: 'doc',
            docId: 'guides/gettingstarted/overview',
            position: 'right',
            label: 'Reference',
          },
          // {
          //   type: 'doc',
          //   docId: 'commands/install',
          //   position: 'right',
          //   label: 'CLI Commands',
          // },
          // {
          //   type: 'doc',
          //   docId: 'reference/overview',
          //   position: 'right',
          //   label: 'Reference',
          // },
          // {
          //   type: 'doc',
          //   docId: 'example/overview',
          //   position: 'right',
          //   label: 'Example',
          // },
          // {
          //   position: 'right',
          //   label: 'Registry',
          //   href: 'https://servable.app',
          // },
          // {
          //   type: 'doc',
          //   docId: 'protocolsLibrary/overview',
          //   position: 'right',
          //   label: 'Protocols Library',
          // },
          // {
          //   type: 'doc',
          //   docId: 'protocolsLibrary/overview',
          //   position: 'left',
          //   label: 'Protocols library',
          // },
          // {
          //   type: 'doc',
          //   docId: 'reference/overview',
          //   position: 'left',
          //   label: 'Reference',
          // },
          // {
          //   type: 'doc',
          //   docId: 'intro',
          //   position: 'left',
          //   label: 'Protocols',
          // },
          // {
          //   to: '/blog', label: 'Blog', position: 'left'
          // },
          {
            href: 'https://github.com/servable-community',
            position: 'right',
            className: 'header-github-link',
            'aria-label': 'GitHub repository',
          },
        ],
      },
      footer: {
        style: 'light',
        links: [
          // {
          //   title: 'Docs',
          //   items: [
          //     {
          //       label: 'Guides',
          //       to: '/docs/guides/gettingstarted/overview',
          //     },
          //   ],
          // },
          // {
          //   title: 'Community',
          //   items: [
          //     {
          //       label: 'Stack Overflow',
          //       href: 'https://stackoverflow.com/questions/tagged/docusaurus',
          //     },
          //     {
          //       label: 'Discord',
          //       href: 'https://discordapp.com/invite/docusaurus',
          //     },
          //     {
          //       label: 'Twitter',
          //       href: 'https://twitter.com/docusaurus',
          //     },
          //   ],
          // },
          // {
          //   title: 'Enterprise',
          //   items: [
          //     {
          //       label: 'Professional support',
          //       href: '#',
          //     },
          //     {
          //       label: 'Use cases',
          //       href: '#',
          //     },
          //     {
          //       label: 'Pricing',
          //       href: '#',
          //     },
          //   ],
          // },
          // {
          //   title: 'More',
          //   items: [
          //     {
          //       label: 'Blog',
          //       to: '/blog',
          //     },
          //     // {
          //     //   label: 'GitHub',
          //     //   href: 'https://github.com/servable-community/servable-parse',
          //     // },
          //   ],
          // },
        ],
        copyright: `Copyright © ${new Date().getFullYear()} Servable Community. Built with Docusaurus.`,
      },
      prism: {
        theme: lightCodeTheme,
        darkTheme: darkCodeTheme,
      },
      metadata: [{ name: 'servable-parse', content: 'servable, parse-server, nodejs' }],
    }),
};

module.exports = config;
