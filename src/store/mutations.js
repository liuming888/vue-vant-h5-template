export default {
    setLoaddingNum(state,num){
        state.loaddingNum += num;
        // console.log('loadingNum', state.loaddingNum);
    },
    setUserInfo(state, userInfo) {
        state.userInfo = userInfo;
    },
    setIsreFreshToken(state, payload) {
        state.isreFreshToken = payload;
    },
    setLoginSelectShow(state, payload) {
        state.dialogs.loginSelect.show = payload;
    },
    setLoginJumpUrl(state, payload) {
        state.dialogs.loginSelect.jumpUrl = payload;
    },
    setGoodsList(state, payload) {
        state.goodsList = payload;
    },
    setNewGiftBagShow(state, payload) {
        state.dialogs.newGiftBag.show = payload;
    },
};
