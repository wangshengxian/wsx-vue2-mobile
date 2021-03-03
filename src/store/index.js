import Vue from 'vue'
import Vuex from 'vuex'

const modulesFiles = require.context('./modules', false, /\.js$/)

// console.log(modulesFiles)

const modules = modulesFiles.keys().reduce((modules, modulesPath) => {
  console.log(modules, modulesPath)
  // set ./user.js => user
  const moduleName = modulesPath.replace(/^\.\/(.*)\.\w+$/, '$1')
  const value = modulesFiles(modulesPath)
  modules[moduleName] = value.default
  return modules
}, {})

Vue.use(Vuex)

export default new Vuex.Store({
  modules
})
