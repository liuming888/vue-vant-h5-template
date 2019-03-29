export default{
    methods: {
        mx_showLoad(){
            this.$loaddingNum++;
            this.$toast.loading({
                mask: true, // 是否显示背景蒙层
                duration: 0, // 展示时长(ms)，值为 0 时，toast 不会消失
                forbidClick: true, // 是否禁止背景点击
            });
        },
        mx_closeLoad(){
            this.$loaddingNum--;
            if (this.$loaddingNum <= 0) {
                this.$toast.clear();
            }
        }
    }
}