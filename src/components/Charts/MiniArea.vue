<template>
  <div>
    <div class="miniChart" style="height: 46px;">
      <div class="chartContent">
        <div>
          <v-chart :forceFit="true" :height="chartHeight" :data="data" :scale="scaleProps" :padding="padding">
            <v-tooltip :showTitle="false" :crosshairs="false" />
            <v-axis :dataKey="'x'" xAxis name="x" :label="false" :line="false" :tickLine="false" :grid="false" />
            <v-axis :dataKey="'y'" yAxis name="y" :label="false" :line="false" :tickLine="false" :grid="false" />
            <v-line position="x*y" shape="smooth" :tooltip="false" :color="borderColor" :size="2" v-if="line" />
            <v-area position="x*y" shape="smooth" :tooltip="tooltip" :color="color" :vStyle="{fillOpacity: 1}" />
          </v-chart>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
const scale = {};
const padding = [36, 5, 30, 5];

const scaleProps = {
  x: {
    type: "cat",
    range: [0, 1],
    ...scale.x,
  },
  y: {
    min: 0,
    ...scale.y,
  },
};

const tooltip = [
  "x*y",
  (x, y) => ({
    name: x,
    value: y,
  }),
];
export default {
  name: "MiniArea",
  props: {
    height: {},
    data: {},
    color: {
      default: "rgba(24, 144, 255, 0.2)",
    },
    borderColor: {
      default: "#1089ff",
    },
    line: {
      default: false,
    },
  },
  data() {
    return {
      scaleProps,
      padding,
      tooltip,
      chartHeight: this.height + 54,
    };
  },
};
</script>

<style lang="less" scoped>
@import "./index.less";
</style>
