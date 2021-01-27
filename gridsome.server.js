// Server API makes it possible to hook into various parts of Gridsome
// on server-side and add custom data to the GraphQL data layer.
// Learn more: https://gridsome.org/docs/server-api/

// Changes here require a server restart.
// To restart press CTRL + C in terminal and run `gridsome develop`
const constantRouterMap = require('./src/router/index')

module.exports = function (api) {
  api.loadSource(({ addCollection }) => {
    // Use the Data Store API here: https://gridsome.org/docs/data-store-api/
  })

  api.createManagedPages(({ createPage }) => {
    // Use the Pages API here: https://gridsome.org/docs/pages-api/
    createPage({
      path: '/',
      component: './src/views/blog/Main.vue'
    })
    constantRouterMap.forEach(({path, component, children})=>{
      component && createPage({path,component})
      if(children) {
        children.forEach(sub=>{
          sub.component && createPage({path: `${path}/${sub.path}`, component: sub.component })
        })
      }
    })
    
  })
}
