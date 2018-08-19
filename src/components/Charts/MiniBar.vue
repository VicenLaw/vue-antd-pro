<template>
  <div>
    <div class="miniChart" style="height: 46px;">
      <div class="chartContent">
        <div>
          <v-chart :forceFit="true" :height="height" :data="data" :scale="scale" :padding="padding">
            <v-tooltip :showTitle="false" :crosshairs="false" />
            <v-bar position="x*y" :tooltip="tooltip" :color="color" />
          </v-chart>
        </div>
      </div>
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

const padding = [36, 5, 30, 5];

const tooltip = [
  'x*y',
  (x, y) => ({
    name: x,
    value: y,
  }),
];

export default {
  name: 'MiniBar',
  props: ['height', 'data', 'color'],
  data() {
    return {
      scale,
      padding,
      tooltip,
    };
  },
};
</script>

<style lang="less" scoped>
@import './index.less';
</style>
