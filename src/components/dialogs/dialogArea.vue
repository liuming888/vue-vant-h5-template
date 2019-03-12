<style lang="scss">
.dialogArea-container {
  .van-picker__cancel,
  .van-picker__confirm,
  .van-picker-column__item--selected {
    color: #d30c05;
  }
}
</style>

<template>
  <div class="dialogArea-container">
    <van-popup v-model="dialogVisible.show"
      position="bottom"
      :overlay="false">
      <van-area :area-list="areaListDat"
        :value="curCode"
        @confirm="confirm"
        @cancel="cancel" />
    </van-popup>
  </div>
</template>

<script>
import { Area } from "vant";
export default {
  name: "dialogArea",
  components: {
    [Area.name]: Area
  },
  props: {
    dialogVisible: {
      type: Object,
      default() {
        return {
          show: false
        };
      }
    }
  },
  data() {
    return {
      curCode: "120000", // 当前默认选中
      areaListDat: {
        province_list: {
          110000: "北京市",
          120000: "天津市"
        },
        city_list: {
          110100: "北京市",
          110200: "县",
          120100: "天津市",
          120200: "县"
        },
        county_list: {
          110101: "东城区",
          110102: "西城区",
          110105: "朝阳区",
          110106: "丰台区",
          120101: "和平区",
          120102: "河东区",
          120103: "河西区",
          120104: "南开区",
          120105: "河北区"
        }
      }
    };
  },
  methods: {
    confirm(datArr,idxs) {
      console.log("1111111111111",datArr,idxs);
      //   this.cancel();
    },
    cancel() {
      this.$emit("update:dialogVisible", { show: false });
    }
  }
};
</script>

