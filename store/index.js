const sleep = (m) => new Promise((resolve) => setTimeout(resolve, m))
const items = [
  {
    cSlug: `WOOPER`,
    name: `Wooper`,
    price: `164 $/h`,
    description: `Brief description of the project, in a few lines.`,
  },
  {
    cSlug: `Shmooper`,
    name: `Shmooper`,
    price: `164 $/h`,
    description: `Brief description of the project, in a few lines.`,
  },
  {
    cSlug: `Puper`,
    name: `Puper`,
    price: `164 $/h`,
    description: `Brief description of the project, in a few lines.`,
  },
  {
    cSlug: `Tropper`,
    name: `Tropper`,
    price: `164 $/h`,
    description: `Brief description of the project, in a few lines.`,
  },
  {
    cSlug: `mopper`,
    name: `mopper`,
    price: `164 $/h`,
    description: `Brief description of the project, in a few lines.`,
  },
]

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
    const item = items.find((item) => item.cSlug === route.params.item)
    console.log(route.params)
    await commit('SET_CURRENT_ITEM', item)
  },
}
