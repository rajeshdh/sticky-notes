import createPersistedState from 'vuex-persistedstate'

export const state = () => ({
    notes: []
})

export const mutations = {
 addNote (state, note) {
        state.notes.push(note)
 },
}

export const plugins = [
  createPersistedState()
]