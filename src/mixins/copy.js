import Clipboard from 'clipboard';
export default {
    data() {
        return {
            mx_copyBtn1: null, //存储初始化复制按钮事件
            mx_copyBtn2: null, //存储初始化复制按钮事件
        };
    },
    mounted() {
        let copyEle1=this.$refs.copy1;
        let copyEle2=this.$refs.copy2;
        if (copyEle1) {
            this.mx_copyBtn1 = new Clipboard(copyEle1);
        }

        if (copyEle2) {
            this.mx_copyBtn2 = new Clipboard(copyEle2);
        }
    },
    methods: {
        /**
         * @description:  点击复制
         */
        mx_copyLink1() {
            let vm = this;
            let clipboard = vm.mx_copyBtn1;
            clipboard.on('success', function() {
                vm.$toast(vm.$t('common.successfulCopy'));
            });
            clipboard.on('error', function() {
                vm.$toast(vm.$t('common.replicationFailed'));
            });
        },
        mx_copyLink2() {
            let vm = this;
            let clipboard = vm.mx_copyBtn2;
            clipboard.on('success', function() {
                vm.$toast(vm.$t('common.successfulCopy'));
            });
            clipboard.on('error', function() {
                vm.$toast(vm.$t('common.replicationFailed'));
            });
        },
    },
};
