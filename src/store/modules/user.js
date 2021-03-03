/**
 * 用户状态 - store
 */
const state = {
  accessToken: '',
  userId: '',
  userInfo: {}
}

const mutations = {
  setAccessToken(state, accessToken) {
    console.log('-accessToken-', accessToken)
    state.accessToken = accessToken
  },
  setUserId(state, userId) {
    console.log('-userId-', userId)
    state.userId = userId
  },
  setUserInfo(state, userInfo) {
    console.log('-userInfo-', userInfo)
    state.userInfo = userInfo
  }
}

const getters = {}

const actions = {}

export default {
  // 开启命名空间
  namespaced: true,
  state,
  getters,
  mutations,
  actions
}
