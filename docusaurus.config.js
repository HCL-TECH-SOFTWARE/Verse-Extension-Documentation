module.exports = {
  plugins: [],
  themes: [],
  customFields: {},
  themeConfig: {
    colorMode: {
      disableSwitch: true
    },
    navbar: {
      title: 'HCL Verse',
      logo: {
        alt: 'HCL Verse',
        src: 'img/mail-192.png'
      },
      items: [
        {
          to: 'docs/introduction',
          label: 'Documentation',
          position: 'right'
        },
        {
          to: 'docs/getting-started',
          label: 'Tutorials and Examples',
          position: 'right'
        },
        {
          to: 'docs/faq',
          label: 'FAQ',
          position: 'right'
        },
        {
          to: 'docs/resources',
          label: 'Resources',
          position: 'right'
        },
      ]
    },
  },
  title: 'Verse Developer',
  tagline: 'Customize and Extend HCL Verse',
  url: 'https://opensource.hcltechsw.com/',
  baseUrl: '/verse-developer/',
  favicon: 'img/mail-192.png',
  organizationName: 'HCL',
  projectName: 'verse-developer',
  presets: [
    [
      '@docusaurus/preset-classic',
      {
        docs: {
          path: 'docs',
          sidebarPath: require.resolve('./sidebars.js'),
        },
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        }
      }
    ]
  ]
};