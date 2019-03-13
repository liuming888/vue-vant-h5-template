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
      <!-- <van-area :area-list="areaListDat"
        :value="curCode"
        @confirm="confirm"
        @cancel="cancel" /> -->
      <van-picker :columns="columns"
        @change="onChange" />
    </van-popup>
  </div>
</template>

<script>

const citys = {
  浙江: ["杭州", "宁波", "温州", "嘉兴", "湖州"],
  福建: ["福州", "厦门", "莆田", "三明", "泉州"]
};
const qu = {
  杭州: ['1','2','3'],
  宁波: ['3','4','5']
}
// const a = {
//   a: ['b', '3']
// }
// const c = {
//   b: ['b', '3']
// }
// const qu = {
//   a: ['12','123']
// }

import { Picker } from "vant";
export default {
  name: "dialogArea",
  components: {
    [Picker.name]: Picker
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
      columns: [
        {
          values: Object.keys(citys),
          className: "column1"
        },
        {
          values: citys['浙江'],
          className: "column2",
          defaultIndex: 0
        },
        {
          values: qu['杭州'],
          className: "column3",
          defaultIndex: 0
        }
      ]
    };
  },
  methods: {
    onChange(picker, values) {
      console.log(values)
      picker.setColumnValues(1, citys[values[0]]);
      picker.setColumnValues(2, qu[values[1]]);
    }
  }
};
</script>

