import Vue from 'vue'
import Router from 'vue-router'

const _7e9b102b = () => import('../pages/recipes/index.vue' /* webpackChunkName: "pages/recipes/index" */).then(m => m.default || m)
const _4d4bf85a = () => import('../pages/about/index.vue' /* webpackChunkName: "pages/about/index" */).then(m => m.default || m)
const _f44d5b9e = () => import('../pages/BioscopeContentList/index.vue' /* webpackChunkName: "pages/BioscopeContentList/index" */).then(m => m.default || m)
const _45533519 = () => import('../pages/BioscopeContentList/_bongoId/index.vue' /* webpackChunkName: "pages/BioscopeContentList/_bongoId/index" */).then(m => m.default || m)
const _13ca1d96 = () => import('../pages/recipes/_id/index.vue' /* webpackChunkName: "pages/recipes/_id/index" */).then(m => m.default || m)
const _f17cd7d6 = () => import('../pages/index.vue' /* webpackChunkName: "pages/index" */).then(m => m.default || m)

Vue.use(Router)


if (process.client) {
  window.history.scrollRestoration = 'manual'
}
const scrollBehavior = function (to, from, savedPosition) {
  // if the returned position is falsy or an empty object,
  // will retain current scroll position.
  let position = false

  // if no children detected
  if (to.matched.length < 2) {
    // scroll to the top of the page
    position = { x: 0, y: 0 }
  } else if (to.matched.some((r) => r.components.default.options.scrollToTop)) {
    // if one of the children has scrollToTop option set to true
    position = { x: 0, y: 0 }
  }

  // savedPosition is only available for popstate navigations (back button)
  if (savedPosition) {
    position = savedPosition
  }

  return new Promise((resolve) => {
    // wait for the out transition to complete (if necessary)
    window.$nuxt.$once('triggerScroll', () => {
      // coords will be used if no selector is provided,
      // or if the selector didn't match any element.
      if (to.hash) {
        let hash = to.hash
        // CSS.escape() is not supported with IE and Edge.
        if (typeof window.CSS !== 'undefined' && typeof window.CSS.escape !== 'undefined') {
          hash = '#' + window.CSS.escape(hash.substr(1))
        }
        try {
          if (document.querySelector(hash)) {
            // scroll to anchor by returning the selector
            position = { selector: hash }
          }
        } catch (e) {
          console.warn('Failed to save scroll position. Please add CSS.escape() polyfill (https://github.com/mathiasbynens/CSS.escape).')
        }
      }
      resolve(position)
    })
  })
}


export function createRouter () {
  return new Router({
    mode: 'history',
    base: '/',
    linkActiveClass: 'nuxt-link-active',
    linkExactActiveClass: 'nuxt-link-exact-active',
    scrollBehavior,
    routes: [
		{
			path: "/recipes",
			component: _7e9b102b,
			name: "recipes"
		},
		{
			path: "/about",
			component: _4d4bf85a,
			name: "about"
		},
		{
			path: "/BioscopeContentList",
			component: _f44d5b9e,
			name: "BioscopeContentList"
		},
		{
			path: "/BioscopeContentList/:bongoId",
			component: _45533519,
			name: "BioscopeContentList-bongoId"
		},
		{
			path: "/recipes/:id",
			component: _13ca1d96,
			name: "recipes-id"
		},
		{
			path: "/",
			component: _f17cd7d6,
			name: "index"
		}
    ],
    
    
    fallback: false
  })
}
