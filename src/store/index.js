import { createStore } from 'vuex'

export default createStore({
  state: {
    cartList: {}
  },
  mutations: {
    changeCartItemInfo(state, payload) {
      const { shopId, productId, productInfo } = payload
      const shopInfo = state.cartList[shopId] || {
        shopName: '', productList: {}
      }
      let product = shopInfo.productList[productId]
      if (!product) {
        productInfo.count = 0;
        product = productInfo;
      }
      // console.log(product.count, payload.num)
      product.count += payload.num
      if (payload.num > 0) { product.check = true }
      if (product.count < 0) { product.count = 0 }
      shopInfo.productList[productId] = product
      state.cartList[shopId] = shopInfo
      console.log(state.cartList)
    },
    changeCartItemCheck(state, payload) {
      const { shopId, productId } = payload
      const product = state.cartList[shopId].productList[productId]
      if (product) {
        product.check = !product.check
      }
      // state.cartList[shopId].productList[productId] = product
    },
    changeCartItemCheckAll(state, payload) {
      const { shopId } = payload;
      console.log(state.cartList)
      const productList = state.cartList[shopId]?.productList;
      if (productList) {
        for (const i in productList) {
          const product = productList[i]
          product.check = true;
        }
      }
    },
    clearCartData(state, payload) {
      const { shopId } = payload
      state.cartList[shopId].productList = {}
    },
  },
  actions: {
  },
  modules: {
  }
})
