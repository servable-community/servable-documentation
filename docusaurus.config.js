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
  url: 'https://servablecommunity.com',
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
    //     id: "apiDocs",
    //     docsPluginId: "classic",
    //     config: {
    //       petstore: { // Note: petstore key is treated as the <id> and can be used to specify an API doc instance when using CLI commands
    //         specPath: "examples/petstore.yaml", // Path to designated spec file
    //         outputDir: "api/petstore", // Output directory for generated .mdx docs
    //         sidebarOptions: {
    //           groupPathsBy: "tag",
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
        matomoUrl: process.env.MATOMO_URL,
        siteId: process.env.MATOMO_SITE_ID,
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
            docId: 'gettingstarted/overview',
            position: 'right',
            label: 'Documentation',
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
          {
            position: 'right',
            label: 'Protocols Registry',
            href: 'https://registry.servablecommunity.com',
          },
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
          //       to: '/docs/gettingstarted/overview',
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
