import Vue from 'vue'
import Router from 'vue-router'
import { interopDefault } from './utils'
import scrollBehavior from './router.scrollBehavior.js'

const _4ed8c58f = () => interopDefault(import('..\\pages\\layout' /* webpackChunkName: "" */))
const _06781484 = () => interopDefault(import('..\\pages\\home' /* webpackChunkName: "" */))
const _6e7a7738 = () => interopDefault(import('..\\pages\\login' /* webpackChunkName: "" */))
const _7c4a0be4 = () => interopDefault(import('..\\pages\\profile' /* webpackChunkName: "" */))
const _c390fd70 = () => interopDefault(import('..\\pages\\settings' /* webpackChunkName: "" */))
const _4309ebd2 = () => interopDefault(import('..\\pages\\editor' /* webpackChunkName: "" */))
const _63144f31 = () => interopDefault(import('..\\pages\\article' /* webpackChunkName: "" */))

// TODO: remove in Nuxt 3
const emptyFn = () => {}
const originalPush = Router.prototype.push
Router.prototype.push = function push (location, onComplete = emptyFn, onAbort) {
  return originalPush.call(this, location, onComplete, onAbort)
}

Vue.use(Router)

export const routerOptions = {
  mode: 'history',
  base: decodeURI('/'),
  linkActiveClass: 'active',
  linkExactActiveClass: 'nuxt-link-exact-active',
  scrollBehavior,

  routes: [{
    path: "/",
    component: _4ed8c58f,
    children: [{
      path: "",
      component: _06781484,
      name: "home"
    }, {
      path: "/login",
      component: _6e7a7738,
      name: "login"
    }, {
      path: "/register",
      component: _6e7a7738,
      name: "register"
    }, {
      path: "/profile/:username",
      component: _7c4a0be4,
      name: "profile"
    }, {
      path: "/settings",
      component: _c390fd70,
      name: "settings"
    }, {
      path: "/editor",
      component: _4309ebd2,
      name: "editor"
    }, {
      path: "/article/:slug",
      component: _63144f31,
      name: "article"
    }]
  }],

  fallback: false
}

export function createRouter () {
  return new Router(routerOptions)
}
