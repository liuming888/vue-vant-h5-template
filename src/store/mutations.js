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
    }
};
