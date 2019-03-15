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
};
