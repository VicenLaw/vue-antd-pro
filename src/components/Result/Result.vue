<template>
  <div class="result">
    <div class="icon">
      <slot name="icon">
        <a-icon :type="iconMap[type]" :class="type"/>
      </slot>
    </div>
    <div class="title">
      <slot name="title">{{title}}</slot>
    </div>
    <div class="description">
      <slot name="description">{{description}}</slot>
    </div>
    <div class="extra">
      <slot name="extra">{{extra}}</slot>
    </div>
    <div class="actions">
      <slot name="actions">{{actions}}</slot>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Result',
  props: {
    type: String,
    title: {
      type: String,
      default: '标题',
    },
    description: {
      type: String,
      default: '结果描述',
    },
    extra: {
      type: String,
      default: '其他补充信息，自带灰底效果',
    },
    actions: {
      type: String,
      default: '操作建议，一般放置按钮组',
    },
  },
  data() {
    return {
      iconMap: {
        success: 'check-circle',
        error: 'close-circle',
      },
    };
  },
};
</script>

<style lang="less" scoped>
@import "~ant-design-vue/lib/style/themes/default.less";

.result {
  text-align: center;
  width: 72%;
  margin: 0 auto;
  @media screen and (max-width: @screen-xs) {
    width: 100%;
  }

  .icon {
    font-size: 72px;
    line-height: 72px;
    margin-bottom: 24px;

    & > .success {
      color: @success-color;
    }

    & > .error {
      color: @error-color;
    }
  }

  .title {
    font-size: 24px;
    color: @heading-color;
    font-weight: 500;
    line-height: 32px;
    margin-bottom: 16px;
  }

  .description {
    font-size: 14px;
    line-height: 22px;
    color: @text-color-secondary;
    margin-bottom: 24px;
  }

  .extra {
    background: #fafafa;
    padding: 24px 40px;
    border-radius: @border-radius-sm;
    text-align: left;

    @media screen and (max-width: @screen-xs) {
      padding: 18px 20px;
    }
  }

  .actions {
    margin-top: 32px;

    button:not(:last-child) {
      margin-right: 8px;
    }
  }
}
</style>
