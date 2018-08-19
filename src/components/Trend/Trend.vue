<template>
  <div class="trendItem">
    <slot></slot>
    <span :class="flag">
      <a-icon :type="'caret-'+flag" />
    </span>
  </div>
</template>

<script>
export default {
  name: 'Trend',
  props: ['flag'],
};
</script>

<style lang="less" scoped>
@import "~ant-design-vue/lib/style/themes/default.less";

.trendItem {
  display: inline-block;
  font-size: @font-size-base;
  line-height: 22px;

  .up,
  .down {
    margin-left: 4px;
    position: relative;
    top: 1px;
    i {
      font-size: 12px;
      transform: scale(0.83);
    }
  }
  .up {
    color: @red-6;
  }
  .down {
    color: @green-6;
    top: -1px;
  }

  &.trendItemGrey .up,
  &.trendItemGrey .down {
    color: @text-color;
  }

  &.reverseColor .up {
    color: @green-6;
  }
  &.reverseColor .down {
    color: @red-6;
  }
}
</style>
