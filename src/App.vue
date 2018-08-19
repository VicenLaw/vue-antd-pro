<template>
  <a-locale-provider :locale="zhCN">
    <router-view/>
  </a-locale-provider>
</template>
<script>
import zhCN from 'ant-design-vue/lib/locale-provider/zh_CN';
import 'moment/locale/zh-cn';
export default {
  data() {
    return {
      zhCN,
    };
  },
};
</script>
<style lang="less">
@import "./styles/index.less";
</style>
