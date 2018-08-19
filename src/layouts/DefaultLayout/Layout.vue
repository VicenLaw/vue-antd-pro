<template>
  <a-layout class="ant-layout-has-sider">
    <side-bar class="ant-layout-sider sider" :trigger="null" collapsible :collapsed="collapsed" :class="{ 'ant-layout-sider-collapsed': collapsed }"></side-bar>
    <a-layout>
      <nav-bar :collapsed="collapsed" @toggle="toggleCollapsed"></nav-bar>
      <app-main>
      </app-main>
      <a-layout-footer :style="{padding: '0px'}">
        <div class="globalFooter">
          <div class="links">
            <a target="_blank" href="http://pro.ant.design">Pro 首页</a>
            <a target="_blank" href="https://github.com/ant-design/ant-design-pro">
              <i class="anticon anticon-github"></i>
            </a>
            <a target="_blank" href="http://ant.design">Ant Design</a>
          </div>
          <div class="copyright">Copyright
            <i class="anticon anticon-copyright"></i> 2018 Ant Design Pro for vue.js</div>
        </div>
      </a-layout-footer>
    </a-layout>
  </a-layout>
</template>

<script>
import { NavBar, SideBar, AppMain } from './components';

export default {
  name: 'layout',
  data() {
    return {
      collapsed: false,
    };
  },
  methods: {
    toggleCollapsed(target) {
      this.collapsed = !this.collapsed;
    },
  },
  components: {
    NavBar,
    SideBar,
    AppMain,
  },
};
</script>

<style lang="less" scoped>
.app-wrapper {
  position: relative;
  height: 100%;
  width: 100%;
  &:after {
    content: "";
    display: table;
    clear: both;
  }
}

.ant-layout {
  min-height: 100vh;
  transition: margin-left 0.28s;
  overflow-x: hidden;
}
.ant-layout-has-sider {
  flex-direction: row;
}
.globalFooter {
  padding: 0 16px;
  margin: 48px 0 24px;
  text-align: center;
  .links {
    margin-bottom: 8px;
    a {
      color: rgba(0, 0, 0, 0.45);
      -webkit-transition: all 0.3s;
      transition: all 0.3s;
      &:not(:last-child) {
        margin-right: 40px;
      }
    }
  }
  .copyright {
    color: rgba(0, 0, 0, 0.45);
    font-size: 14px;
  }
}
</style>
