import { useStore } from 'vuex';
import { computed } from 'vue';
export const useCommonCartEffect = (shopId) => {
    const store = useStore();

    const cartList = store.state.cartList;
    const getProductCartCount = (shopId, productId) => {
        return cartList?.[shopId]?.productList?.[productId]?.count || 0;
    };
    const changeCartItem = (shopId, productId, item, num) => {
        store.commit("changeCartItemInfo", {
            shopId,
            productId,
            productInfo: item,
            num,
        });
    };
    const calculations = computed(() => {
        const productList = cartList[shopId]?.productList;
        let price = 0;
        let count = 0;
        let allChecked = true
        if (productList) {
            for (const i in productList) {
                const p = productList[i];
                if (p.check) {
                    price += p.count * p.price;
                    count += p.count;
                } else {
                    allChecked = false
                }
            }
        }
        const calculations = { price: price.toFixed(2), count, allChecked }
        return calculations;
    })
    const productList = computed(() => {
        const productList = cartList[shopId]?.productList || {}
        const notEmptyProductList = {}
        for (const i in productList) {
            const product = productList[i]
            if (product.count > 0) {
                notEmptyProductList[i] = product
            }
        }
        return notEmptyProductList
    })

    return { cartList, changeCartItem, getProductCartCount, productList, calculations };
};
