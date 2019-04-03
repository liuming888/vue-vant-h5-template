/*
 * @Description: 分享组件相关的公共方法
 * @LastEditors: liuming
 * @Date: 2019-03-10 10:35:30
 * @LastEditTime: 2019-04-03 11:56:12
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
            const link = "\n\n" + this.shareInfo.share_url; // 分享的链接
            return t + "          " + link;
        }
    },
    mounted() {
        this.mx_copyBtn = new Clipboard(this.$refs.copy);
    },
    methods: {
        /**
         * @description:  点击复制按钮后
         */
        mx_copyLink() {
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
            const appId = FBConfig.appId; // FB的appid
            console.log('appId: ', appId);
            const link = this.shareInfo.share_url; // 分享的链接（必须和FB应用设置的一致）
            var t = this.shareInfo.share_title;
            // const link = 'https://liuming.mynatapp.cc/forBargain'; // 测试
            window.location.href = `fb-messenger://share/?link=${encodeURIComponent(t)+'          ' + link}/&app_id=${appId}`;
        },
        /**
         * @description: 分享到whatsapp
         */
        mx_shareWhatsapp() {
            var t = this.shareInfo.share_title;
            const link = encodeURIComponent('\n\n' + this.shareInfo.share_url); // 分享的链接
            console.log('this.shareInfo.share_url: ', this.shareInfo.share_url);
            window.location.href = 'whatsapp://send?text=' + encodeURIComponent(t)+'          ' + link + '&via=lopscoop';
        },
        /**
         * @description: 分享到LINE
         */
        mx_shareLine() {
            //  分享第一种没限制服务器ip地区的（分享文字为主，好像也可以显示图片了）
            const link = encodeURIComponent(this.shareInfo.share_url); // 分享的链接
            var t = this.shareInfo.share_title;
            // const link = encodeURIComponent('https://liuming.mynatapp.cc/forBargain'); // 测试
            window.location.href = `line://msg/text/${encodeURIComponent(t)+'          ' + link}`;

            // 分享第二种（得翻墙到日本等）
            //  window.location.href = `https://social-plugins.line.me/lineit/share?url=${link}`;
        },
        /**
         * @description: 分享到FB
         */
        async mx_shareFacebook() {
            const link = this.shareInfo.share_url; // 分享的链接
            var t = this.shareInfo.share_title;
            // const link = 'https://liuming.mynatapp.cc/forBargain?a=1'; // 测试
            // const quote = this.shareInfo.quote;
            // const hashtag=this.shareInfo.hashtag;
            let result = await window.$faceBookApi.shareFB(link,t /* , quote */ /* ,hashtag */);
            if (result) {
                // 分享成功
            } else {
                // 分享失败
            }
        },
    },
};
