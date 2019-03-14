<style lang="scss">
.dialogArea-container {
  .van-picker__cancel,
  .van-picker__confirm,
  .van-picker-column__item--selected {
    font-size: 30px;
    color: #d30c05;
  }

  .van-picker-column__item {
    font-size: 30px;
  }

  .van-hairline--top-bottom.van-picker__toolbar {
    height: 80px;
    line-height: 80px;

    > div {
      padding: 0 30px;
    }
  }
}
</style>

<template>
  <div class="dialogArea-container">
    <van-popup v-model="dialogVisible.show"
      position="bottom"
      :overlay="false">
      <van-picker show-toolbar
        confirm-button-text="ok"
        cancel-button-text="cancel"
        @cancel="onCancel"
        @confirm="onConfirm"
        :columns="columns"
        @change="onChange" />
    </van-popup>
  </div>
</template>

<script>
// 遍历处理印尼数据的逻辑
// for (let k in IndonesiaCities) {
//   for (let l in IndonesiaCities[k]) {
//     let curArr = [];

//     for (let m in IndonesiaCities[k][l]) {
//       curArr.push(IndonesiaCities[k][l][m]);
//     }

//     regions[l] = curArr;
//   }
// }

// const regions = {
//   浙江: ["杭州", "宁波"],
//   福建: ["福州", "厦门", "莆田", "三明", "泉州", "福州"]
// };
// const citys = {
//   杭州: ["1", "2", "3"],
//   宁波: ["3", "4", "5"]
// };

import IndonesiaCities from "@/config/IndonesiaCities.js";
import { Picker } from "vant";

const regions = IndonesiaCities;
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
    },
    curDat: {
      type: Object
    }
  },
  data() {
    return {
      columns: [
        {
          values: Object.keys(regions),
          className: "column1",
          defaultIndex: 0
        },
        {
          values: regions["Bali"],
          className: "column2",
          defaultIndex: 0
        } /* ,
        {
          values: citys["杭州"],
          className: "column3",
          defaultIndex: 0
        } */
      ]
    };
  },
  methods: {
    onConfirm(value, index) {
      console.log(`当前值：${value}, 当前索引：${index}`);
      this.$emit("update:curDat", {
        ...this.curDat,
        region: value[0],
        city: value[1]
      });
      this.onCancel();
    },
    onCancel() {
      this.$emit("update:dialogVisible", { show: false });
    },
    onChange(picker, values) {
      console.log(values);
      picker.setColumnValues(1, regions[values[0]]);
      // picker.setColumnValues(2, citys[values[1]]);
    }
  },
  watch: {
    "dialogVisible.show"(val) {
      if (val) {
        const { region, city } = this.curDat;
        if (region) {
          let refionIdx = Object.keys(regions).indexOf(region);
          if (refionIdx > -1) {
            this.columns[0].defaultIndex = refionIdx;

            if (city) {
              this.columns[1].values = regions[region];
              let cityIdx = regions[region].indexOf(city);
              if (cityIdx > -1) {
                this.columns[1].defaultIndex = cityIdx;
              }
            }
          }
        }
      }
    }
  }
};
</script>

