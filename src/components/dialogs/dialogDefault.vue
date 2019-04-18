<style lang="scss" scoped>
  .dialog-default {
    position: fixed;
    display: flex;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    align-items: center;
    z-index: 99999;
    > .bg {
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      background-color: rgba(0,0,0,.4);
    }
    > .dialog-container {
      position: relative;
      width: 100%;
      margin: 0 80px;
      background:rgba(255,255,255,1);
      border-radius:20px;
      text-align: center;
      // justify-content: center;
      > .content {
        padding: 40px;
        // min-height: 200px;
        // display: flex;
        // align-items: center;
        // justify-content: center;
        color: #323232;
        font-size: 32px;
        > span {
          font-weight: bold;
        }
      }
      > .footer {
        height: 100px;
        width: 100%;
        display: flex;
        align-items: center;
        justify-content: center;
        font-size: 32px;
        > div {
          flex: 1;
        }
        > .cancel {
          color: #888;
        }
        > .ok {
          color: #D30C05;
        }
      }
    }
  }
</style>

<template>
  <div class="dialog-default" v-show="dialogVisible">
    <div class="bg" @click.stop="closeDialog()"></div>
    <div class="dialog-container">
      <div class="content">
        <span>{{info.content}}</span>
        <slot name="content"></slot>
      </div>
      <div class="footer">
        <div class="cancel" @click="closeDialog" v-if="!noCancle">{{info.cancelText || 'cancel'}}</div>
        <div class="ok" @click="okHandle">{{info.okText || 'ok'}}</div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'dialog-default',
  props: {
    dialogVisible: {
      type: Boolean,
      default: false
    },
    noCancle: {
      type: Boolean,
      default: false
    },
    info: {
      type: Object,
      default: {
        content: '',
        cancleText: 'cancel',
        okText: 'ok',
        delId:0
      }
    }
  },
  methods: {
    closeDialog(){
       this.$emit("update:dialogVisible", false);
    },
    okHandle() {
      this.$emit("ok",this.info.delId);
      this.closeDialog();
    }
  }
}
</script>