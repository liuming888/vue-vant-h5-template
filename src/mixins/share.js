/*
 * @Description: 分享组件相关的公共方法
 * @LastEditors: liuming
 * @Date: 2019-03-10 10:35:30
 * @LastEditTime: 2019-04-15 16:18:50
 */
import { FBConfig } from '@/config/index.js';
import Clipboard from 'clipboard';
export default {
    data() {
        return {
            mx_copyBtn: null, //存储初始化复制按钮事件
        };
    },
    computed: {
        mx_copyTxt() {
            var t = this.shareInfo.share_title;
            const link = '\n\n' + this.shareInfo.share_url; // 分享的链接
            return t + '          ' + link;
        },
    },
    mounted() {
        this.mx_copyBtn = new Clipboard(this.$refs.copy);
    },
    methods: {
        /**
         * @description:  点击复制按钮后
         */
        mx_copyLink() {
            // 统计
            this.$gaSend({
                eventCategory: '复制按钮',
                eventAction: '点击',
                eventLabel: this.itemData && this.itemData.title && this.itemData.title.substr(0, 10),
            });
            console.log('6666666666666');
            let vm = this;
            let clipboard = vm.mx_copyBtn;
            clipboard.on('success', function() {
                vm.$toast('Successful copy');
            });
            clipboard.on('error', function() {
                vm.$toast('Replication failed');
            });
        },
        /**
         * @description: 分享到Messenger
         */
        mx_shareMessenger() {
            // 统计
            this.$gaSend({
                eventCategory: '分享到Messenger',
                eventAction: '点击',
                eventLabel: this.itemData && this.itemData.title && this.itemData.title.substr(0, 10),
            });
            const appId = FBConfig.appId; // FB的appid
            console.log('appId: ', appId);
            var t = this.shareInfo.share_title;
            const link = '\n\n' + this.shareInfo.share_url; // 分享的链接（必须和FB应用设置的一致）
            window.location.href = `fb-messenger://share/?link=${encodeURIComponent(t) + '          ' + link}/&app_id=${appId}`;
        },
        /**
         * @description: 分享到whatsapp
         */
        mx_shareWhatsapp() {
            // 统计
            this.$gaSend({
                eventCategory: '分享到whatsapp',
                eventAction: '点击',
                eventLabel: this.itemData && this.itemData.title && this.itemData.title.substr(0, 10),
            });

            var t = this.shareInfo.share_title;
            const link = '\n\n' + this.shareInfo.share_url; // 分享的链接
            console.log('this.shareInfo.share_url: ', this.shareInfo.share_url);
            window.location.href = 'whatsapp://send?text=' + encodeURIComponent(t) + '          ' + link + '&via=lopscoop';
        },
        /**
         * @description: 分享到LINE
         */
        mx_shareLine() {
            // 统计
            this.$gaSend({
                eventCategory: '分享到line',
                eventAction: '点击',
                eventLabel: this.itemData && this.itemData.title && this.itemData.title.substr(0, 10),
            });

            //  分享第一种没限制服务器ip地区的（分享文字为主，好像也可以显示图片了）
            var t = this.shareInfo.share_title;
            const link = '\n\n' + this.shareInfo.share_url; // 分享的链接
            window.location.href = `line://msg/text/${encodeURIComponent(t) + '          ' + link}`;

            // 分享第二种（得翻墙到日本等）
            //  window.location.href = `https://social-plugins.line.me/lineit/share?url=${link}`;
        },
        /**
         * @description: 分享到FB
         */
        async mx_shareFacebook() {
            const link = this.shareInfo.share_url; // 分享的链接
            var t = this.shareInfo.share_title;
            let result = await window.$faceBookApi.shareFB(link, t /* , quote */ /* ,hashtag */);
            if (result) {
                // 分享成功
            } else {
                // 分享失败
            }
        },
    },
};
