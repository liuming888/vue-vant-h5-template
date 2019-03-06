# ht-zdd-h5

## Project setup
```
npm install
```

### Compiles and hot-reloads for development
```
npm run serve
```

### Compiles and minifies for production
```
npm run build
```

dialogVisible // 控制弹窗显示隐藏

### v0.1版组件划分

用户领取消息播放  userPickingUpMessage    首页        
轮播用Vant的组件
一件正在进行砍价商品    aCommodityThatIsBeingBargained        首页,正在砍价页
商品列表展示的商品X      commodityItem      首页，砍价页，好友帮砍页，           支付成功页
分享赚弹起浮窗       dialogSharingMakes    商品列表展示的商品X组件需要
收益浮窗               incomeWindow   公共所有页面
砍价进度条           bargainingProgressBar   砍价页,好友帮砍页面
分享好友      sharingFriends   砍价页
砍价帮        bargainingHelpInformation    砍价页
登录选择弹窗 dialogLoginSelect  帮砍页
新用户帮砍成功弹窗 dialogNewUsersHelpCutSuccessfully 帮砍页
老用户帮砍成功弹窗 dialogOldUsersHelpCutSuccessfully 帮砍页

添加新收货地址         dialogPostAddAddress     （已有）收货地址页


