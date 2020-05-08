import { createStore } from 'vuex'

export interface State {
  count: number 
}

const state: State = {
  count: 0
}

const mutations = {
  inc(state: State) {
    state.count++
  }
}

export const store = createStore({ state, mutations })
