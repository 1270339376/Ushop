<template>
  <div>
    <div class="header">
      <h2>后台首页</h2>
    </div>

    <!-- <img src="./header.png" alt=""> -->
    <div class="box">
      <div class="boxL">
        <h4>销售占比</h4>
        <!-- <hr> -->
        <v-chart :options="t1data" />
      </div>
      <div class="boxR">
        <h4>一周收入</h4>

        <v-chart :options="t2data" />
      </div>
    </div>
  </div>
</template>

<script>
import ECharts from "vue-echarts";
import "echarts/lib/chart/pie";
import "echarts/lib/chart/bar";
import "echarts/lib/component/polar";

let t1data = {
  backgroundColor: "#2c343c",
 
  visualMap: {
    show: false,
    min: 80,
    max: 600,
    inRange: {
      colorLightness: [0, 1],
    },
  },
  series: [
    {
      name: "访问来源",
      type: "pie",
      radius: "80%",
      center: ["50%", "50%"],
      label: {
        formatter: "{b}:{c}({d}%)",
      },
      data: [
        { value: 335, name: "家用电器", itemStyle: { color: "lightblue" } },
        { value: 310, name: "个护清洁", itemStyle: { color: "lightpink" } },
        { value: 274, name: "食品", itemStyle: { color: "lightgreen" } },
        { value: 235, name: "电脑", itemStyle: { color: "grey" } },
        { value: 400, name: "衣服", itemStyle: { color: "red" } },
      ].sort(function (a, b) {
        return a.value - b.value;
      }),
      roseType: "radius",
      label: {
        color: "rgba(255, 255, 255, 0.3)",
      },
      labelLine: {
        lineStyle: {
          color: "rgba(255, 255, 255, 0.3)",
        },
        smooth: 0.2,
        length: 10,
        length2: 20,
      },

      itemStyle: {
        color: "#c23531",
        shadowBlur: 200,
        shadowColor: "rgba(0, 0, 0, 0.5)",
        normal: {
          label: {
            show: true,
            formatter: "{b} : {c} ({d}%)",
          },
          labelLine: { show: true },
        },
      },

      animationType: "scale",
      animationEasing: "elasticOut",
      animationDelay: function (idx) {
        return Math.random() * 200;
      },
    },
  ],
};

let t2data = {
  xAxis: {
    type: "category",
    data: ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"],
  },
  yAxis: {
    type: "value",
  },
  series: [
    {
      data: [120, 200, 150, 80, 70, 110, 130],

      type: "bar",
    },
  ],
};

export default {
  components: {
    "v-chart": ECharts,
  },
  props: {},
  data() {
    return {
      t1data: t1data,
      t2data: t2data,
    };
  },
  methods: {},
};
</script>

<style  scoped>
.box {
  width: 1200px;
  height: atuo;
  border: 1px solid blue;
  display: flex;
  margin-left: 50px;
  margin-top: 50px;
}
.boxL {
  width: 50%;
  height: auto;
  border: 1px solid blue;
  background-color: rgba(0, 0, 0, 0.5);
}
h4 {
  text-align: center;
  background-color: rgba(0, 0, 0, 0.5);
  color: lightcyan;
}
.header {
  width: 100%;
  height: 70px;
  display: inline-block;
  background: url(../assets/img/header.png);
  margin-bottom: 20px;
}
h2 {
  margin-left: 250px;
  font-size: 30px;
  line-height: 70px;
  color: lightcyan;
}
</style>
