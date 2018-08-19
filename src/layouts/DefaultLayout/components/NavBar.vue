<template>
  <a-layout-header class="header">
    <a-icon class="fold" @click="toggleCollapsed" :type="collapsed ? 'menu-unfold' : 'menu-fold'" />
    <div class="right">
      <span class="item">
        <a-icon type="search" />
      </span>
      <a target="_blank" rel="noopener noreferrer" class="item link" href="https://pro.ant.design/docs/getting-started">
        <a-icon type="question-circle-o" />
      </a>
      <span class="item link">
        <a-icon type="notification" />
      </span>
      <a-dropdown class="item link">
        <span>
          <a-avatar size="small" src="https://gw.alipayobjects.com/zos/rmsportal/BiazfanxmamNRoxxVxka.png" class="avatar" />
          <span class="user-name">Vicen Law</span>
        </span>
        <a-menu slot="overlay" class="user-dropdown">
          <a-menu-item>
            我的主页
          </a-menu-item>
          <a-menu-item>
            个人设置
          </a-menu-item>
          <a-menu-item>
            <span @click="logout" style="display:block;">退出</span>
          </a-menu-item>
        </a-menu>
      </a-dropdown>
    </div>
  </a-layout-header>
</template>

<script>
export default {
  name: "NavBar",
  props: ["collapsed"],
  methods: {
    logout() {
      console.log("Logout");
    },
    toggleCollapsed() {
      this.$emit("toggle");
    },
  },
};
</script>

<style lang="scss" scoped>
.header {
  padding: 0 12px 0 0;
  background: #fff;
  -webkit-box-shadow: 0 1px 4px rgba(0, 21, 41, 0.08);
  box-shadow: 0 1px 4px rgba(0, 21, 41, 0.08);
  position: relative;
  .fold {
    font-size: 20px;
    line-height: 64px;
    cursor: pointer;
    -webkit-transition: all 0.3s, padding 0s;
    transition: all 0.3s, padding 0s;
    padding: 0 24px;
    &:hover {
      background: #e6f7ff;
    }
  }
  .right {
    float: right;
    height: 100%;
    .item {
      cursor: pointer;
      padding: 0 12px;
      display: inline-block;
      -webkit-transition: all 0.3s;
      transition: all 0.3s;
      height: 100%;
      & > i {
        font-size: 16px;
        vertical-align: middle;
        color: rgba(0, 0, 0, 0.65);
      }
      .avatar {
        margin: 20px 8px 20px 0;
        color: #1890ff;
        background: hsla(0, 0%, 100%, 0.85);
        vertical-align: middle;
      }
    }
    .link {
      &:hover {
        background: #e6f7ff;
      }
    }
    .user-profile-body {
      position: raative;
      display: flex;
      flex-direction: row;
      align-items: center;
      justify-content: center;
      text-align: center;
      padding-right: 14px;
    }
    .user-avatar {
      width: 24px;
      height: 24px;
      margin: 0 8px 0 12px;
      border-radius: 4px;
    }
  }
}
</style>
