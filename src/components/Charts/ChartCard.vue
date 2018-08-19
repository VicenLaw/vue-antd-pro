<template>
  <a-card :bordered="false" :loading="loading" :bodyStyle="{padding: '20px 24px 8px'}">
    <div class="chartCard">
      <div class="chartTop">
        <div class="avatar"></div>
        <div class="metaWrap">
          <div class="meta">
            <span>{{title}}</span>
            <span class="action">
              <a-tooltip>
                <template slot='title'>
                  {{tips}}
                </template>
                <i class="anticon anticon-info-circle-o"></i>
              </a-tooltip>
            </span>
          </div>
          <div class="total">
            <span>{{total}}</span>
          </div>
        </div>
      </div>
      <div class="content" style="height: 46px;">
        <div class="contentFixed">
          <slot name="content"></slot>
        </div>
      </div>
      <div class="footer">
        <slot name="footer"></slot>
      </div>
    </div>
  </a-card>
</template>

<script>
export default {
  name: 'ChartCard',
  props: [
    'bordered',
    'title',
    'loading',
    'tips',
    'total',
    'footer',
    'contentHeight',
  ],
  data() {
    return {};
  },
};
</script>

<style lang="less" scoped>
.chartCard {
  position: relative;
  .chartTop {
    position: relative;
    overflow: hidden;
    width: 100%;
    .avatar {
      position: relative;
      top: 4px;
      float: left;
      margin-right: 20px;
    }
    .metaWrap {
      float: left;
      .meta {
        color: rgba(0, 0, 0, 0.45);
        font-size: 14px;
        line-height: 22px;
        height: 22px;
        .action {
          cursor: pointer;
          position: absolute;
          top: 0;
          right: 0;
        }
      }
      .total {
        overflow: hidden;
        text-overflow: ellipsis;
        word-break: break-all;
        white-space: nowrap;
        color: rgba(0, 0, 0, 0.85);
        margin-top: 4px;
        margin-bottom: 0;
        font-size: 30px;
        line-height: 38px;
        height: 38px;
      }
    }
  }
  .content {
    margin-bottom: 12px;
    position: relative;
    width: 100%;
    .contentFixed {
      position: absolute;
      left: 0;
      bottom: 0;
      width: 100%;
    }
  }
  .footer {
    border-top: 1px solid #e8e8e8;
    padding-top: 9px;
    margin-top: 8px;
  }
}
</style>
