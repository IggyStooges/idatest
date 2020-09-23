import vehicles from './vehicles.json'

const sleep = (m) => new Promise((resolve) => setTimeout(resolve, m))

console.log(vehicles)
const items = vehicles.slice()

export const state = () => ({
  itemsList: [],
})
export const mutations = {
  SET_ITEMS_LIST(state, items) {
    state.itemsList = items
  },
  SET_CURRENT_ITEM(state, item) {
    state.currentItem = item
  },
}
export const actions = {
  async getItemsList({ commit }) {
    try {
      await sleep(1000)
      await commit('SET_ITEMS_LIST', items)
    } catch (err) {
      throw new Error('Не найдено')
    }
  },
  async getCurrentItem({ commit }, { route }) {
    await sleep(1000)
    const item = items.find((item) => item.name === route.params.item)
    console.log(route.params)
    await commit('SET_CURRENT_ITEM', item)
  },
}
