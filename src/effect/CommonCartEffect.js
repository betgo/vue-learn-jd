import { useStore } from 'vuex'
export const useCommonCartEffect = () => {
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
    return { cartList, changeCartItem, getProductCartCount };
};
