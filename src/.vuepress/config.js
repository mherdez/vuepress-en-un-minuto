module.exports = {
  title: 'Vuepress en un minuto',
  description: "Resumen del curso de vuepress",

  themeConfig: {

    nav: [
      // {
      //   text: 'Guide',
      //   link: '/guide/',
      // },
    ],
    sidebar: [
      '/',
      '/tema01/',
    ]
  },

  plugins: [
    '@vuepress/plugin-back-to-top',
    '@vuepress/plugin-medium-zoom',
  ]
}
