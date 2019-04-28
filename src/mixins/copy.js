import Clipboard from 'clipboard';
export default {
    data() {
        return {
            mx_copyBtn: null, //存储初始化复制按钮事件
        };
    },
    mounted() {
        if (this.$refs.copy) {
            this.mx_copyBtn = new Clipboard(this.$refs.copy);
        }
    },
    methods: {
        /**
         * @description:  点击复制
         */
        mx_copyLink() {
            let vm = this;
            let clipboard = vm.mx_copyBtn;
            clipboard.on('success', function() {
                vm.$toast(vm.$t('common.successfulCopy'));
            });
            clipboard.on('error', function() {
                vm.$toast(vm.$t('common.replicationFailed'));
            });
        },
    },
};
