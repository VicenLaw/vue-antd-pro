<template>
  <a-card>
    <Result type="error" title="提交失败" description="请核对并修改以下信息后，再重新提交。">
      <div slot="extra">
        <div style="font-size: 16; color: rgba(0, 0, 0, 0.85); font-weight: 500; margin-bottom: 16px; ">
          您提交的内容有如下错误：
        </div>
        <div style="margin-bottom: 16px; ">
          <a-icon style="color: #f5222d; margin-right: 8px; " type="close-circle" />您的账户已被冻结
          <a style="margin-left: 16px; ">立即解冻 <a-icon type="right" /></a>
        </div>
        <div>
          <a-icon style="color: #f5222d; margin-right: 8px; " type="close-circle" />您的账户还不具备申请资格
          <a style="margin-left: 16px; ">立即升级 <a-icon type="right" /></a>
        </div>
      </div>
      <div slot="actions">
        <a-button type="primary">返回修改</a-button>
      </div>
    </Result>
  </a-card>
</template>

<script>
import { Result } from '../../components/Result';
export default {
  components: {
    Result,
  },
};
</script>

<style lang="less" scoped>
</style>
