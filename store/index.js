import Vuex from 'vuex'

export const state = () => ({
  currentTag: 'engineer'
})

export const mutations = {
  setCurrentTag (state, payload) {
    state.currentTag = payload
  }
}

export const action = {

}
