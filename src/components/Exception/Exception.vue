<template>
  <div class="exception" style="min-height: 500px; height: 80%;">
    <div class="imgBlock">
      <div class="imgEle" :style="{backgroundImage: `url(${img || config[type].img})`}">
      </div>
    </div>
    <div class="content">
      <h1>{{title || config[type].title}}</h1>
      <div class="desc">{{desc || config[type].desc}}</div>
      <a href="/" class="actions">
        <a-button type="primary">返回首页</a-button>
      </a>
    </div>
  </div>
</template>
<script>
import config from './typeConfig';

export default {
  name: 'Exception',
  props: ['type', 'img', 'title', 'desc'],
  data() {
    return {
      config,
    };
  },
};
</script>
<style lang="less" scoped>
.exception {
  display: flex;
  align-items: center;
  height: 100%;

  .imgBlock {
    flex: 0 0 62.5%;
    width: 62.5%;
    padding-right: 152px;
    zoom: 1;
    &:before,
    &:after {
      content: " ";
      display: table;
    }
    &:after {
      clear: both;
      visibility: hidden;
      font-size: 0;
      height: 0;
    }
  }

  .imgEle {
    height: 360px;
    width: 100%;
    max-width: 430px;
    float: right;
    background-repeat: no-repeat;
    background-position: 50% 50%;
    background-size: contain;
  }

  .content {
    flex: auto;

    h1 {
      color: #434e59;
      font-size: 72px;
      font-weight: 600;
      line-height: 72px;
      margin-bottom: 24px;
    }

    .desc {
      color: rgba(0, 0, 0, 0.45);
      font-size: 20px;
      line-height: 28px;
      margin-bottom: 16px;
    }

    .actions {
      button:not(:last-child) {
        margin-right: 8px;
      }
    }
  }
}

@media screen and (max-width: 1200px) {
  .exception {
    .imgBlock {
      padding-right: 88px;
    }
  }
}

@media screen and (max-width: 576px) {
  .exception {
    display: block;
    text-align: center;
    .imgBlock {
      padding-right: 0;
      margin: 0 auto 24px;
    }
  }
}

@media screen and (max-width: 480px) {
  .exception {
    .imgBlock {
      margin-bottom: -24px;
      overflow: hidden;
    }
  }
}
</style>
