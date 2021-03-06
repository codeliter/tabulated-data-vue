module.exports = {
  plugins: [
    require('./plugin.js')
  ],
  locales: {
    '/': {
      lang: 'en-US',
      title: 'TabulatedData',
      description: 'Datatable for Vue.js'
    }
  },
  themeConfig: {
    repo: '/tabulated-data',
    docsDir: 'docs',
    locales: {
      '/': {
        label: 'English',
        selectText: 'Languages',
        editLinkText: 'Edit this page on GitHub',
        nav: [{
          text: 'Release Notes',
          link: 'https://github.com//tabulated-data/releases'
        }],
        sidebar: [
          '/',
          '/installation.md',
          '/started.md',
          '/passing-props.md',
          '/passing-function.md',
          '/contributors.md'
        ]
      }
    }
  }
}
