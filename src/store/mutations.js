export default {
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
    setGoodsList(state,payload){
        state.goodsList = payload;
    }
};
