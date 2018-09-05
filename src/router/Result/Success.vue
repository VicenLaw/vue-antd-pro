<template>
  <a-card>
    <Result type="success">
      <div slot="title">
        提交成功
      </div>
      <div slot="description">
        提交结果页用于反馈一系列操作任务的处理结果， 如果仅是简单操作，使用 Message 全局提示反馈即可。 本文字区域可以展示简单的补充说明，如果有类似展示 “单据”的需求，下面这个灰色区域可以呈现比较复杂的内容。
      </div>
      <div slot="extra">
          <div style="font-size: 16px; color: rgba(0, 0, 0, 0.85); font-weight: 500; margin-bottom: 20px; ">
            <span>项目名称</span>
          </div>
          <a-row style="margin-bottom: 16px; ">
            <a-col :xs="24" :sm="12" :md="12" :lg="12" :xl="6">
              <span style="color: rgba(0, 0, 0, 0.85) ">项目 ID：</span>
              23421
            </a-col>
            <a-col :xs="24" :sm="12" :md="12" :lg="12" :xl="6">
              <span style="color: rgba(0, 0, 0, 0.85) ">负责人：</span>
              曲丽丽
            </a-col>
            <a-col :xs="24" :sm="24" :md="24" :lg="24" :xl="12">
              <span style="color: rgba(0, 0, 0, 0.85) ">生效时间：</span>
              2016-12-12 ~ 2017-12-12
            </a-col>
          </a-row>
          <a-steps progressDot :current="1" style="margin-left: -42px; width: calc(100% + 84px)">
            <a-step>
              <span slot="title" style="font-size: 14px">创建项目</span>
              <div slot="description" style="font-size: 12px; position: relative; left: 42px; text-align: left;">
                <div style="margin-top: 8px; margin-bottom: 4px;">
                  曲丽丽
                  <a-icon type="dingding" style="margin-left: 8px;" />
                </div>
                <div style="margin-top: 8px; margin-bottom: 4px;">2016-12-12 12:32</div>
              </div>
            </a-step>
            <a-step>
              <span slot="title" style="font-size: 14px">部门初审</span>
              <div slot="description" style="font-size: 12px; position: relative; left: 42px; text-align: center">
                <div style="margin-top: 8px; margin-bottom: 4px">
                  周毛毛
                  <a-icon type="dingding" style="color: #00A0E9; margin-left: 8px;"/>
                </div>
                <div style="margin-top: 8px; margin-bottom: 4px"><a href="">催一下</a></div>
              </div>
            </a-step>
            <a-step title="财务复核" />
            <a-step title="完成" />
          </a-steps>
      </div>
      <template slot="actions">
        <a-button type="primary">返回列表</a-button>
        <a-button type="default">查看项目</a-button>
        <a-button type="default">打印</a-button>
      </template>
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
