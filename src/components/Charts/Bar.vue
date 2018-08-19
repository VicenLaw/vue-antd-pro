<template>
  <div>
    <div :style="{height: `${height}px`}">
      <h4 :style="{marginBottom: `20px`}">{{title}}</h4>
      <v-chart :forceFit="true" :height="title ? height - 41 : height" :data="data" :scale="scale" :padding="padding">
        <v-tooltip :showTitle="false" :crosshairs="false" />
        <v-axis name="x" :label="false" :line="false" :tickLine="false" :title="false" />
        <v-axis name="y" :min="0" />
        <v-bar position="x*y" :tooltip="tooltip" :color="color" />
      </v-chart>
    </div>
  </div>
</template>

<script>
const scale = {
  x: {
    type: 'cat',
  },
  y: {
    min: 0,
  },
};

const tooltip = [
  'x*y',
  (x, y) => ({
    name: x,
    value: y,
  }),
];

export default {
  name: 'Bar',
  props: ['height', 'data', 'title'],
  data() {
    return {
      scale,
      tooltip,
      color: 'rgba(24, 144, 255, 0.85)',
      padding: 'auto',
    };
  },
};
</script>

<style lang="less" scoped>
@import './index.less';
</style>
