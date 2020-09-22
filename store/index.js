// const sleep = m => new Promise(r => setTimeout(r, m))
// const items = [
//   {
//     cSlug: `Cooper`,
//     name: `Cooper`,
//     price: `1156 $`,
//     description: `safasfasasf`,
//   },
//   {
//     cSlug: `Shmooper`,
//     name: `Shmooper`,
//     price: `156 $`,
//     description: `safasfasasf`,
//   },
//   {
//     cSlug: `Puper`,
//     name: `Puper`,
//     price: `16 $`,
//     description: `safasfasasf`,
//   },
//   {
//     cSlug: `Tropper`,
//     name: `Tropper`,
//     price: `1560 $`,
//     description: `safasfasasf`,
//   },
//   {
//     cSlug: `mopper`,
//     name: `mopper`,
//     price: `166 $`,
//     description: `safasfasasf`,
//   },
// ],

// export const state = () => ({
//   itemsList: []
// })
// export const mutations = {
//   SET_Items_LIST (state, items) {
//     state.itemsList = items
//   }
// }
// export const actions = {
//   async getItemsList ({ commit }) {
//     try {
//       await sleep(1000)
//       await commit('SET_ITEMS_LIST', items)
//     } catch (err) {
//       console.log(err)
//       throw new Error('Внутреняя ошибка сервера, сообщите администратору')
//     }
//   }
// }
