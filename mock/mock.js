import Mock from 'mockjs';
import { getRule, postRule } from './rule';
import { getActivities, getNotice, getFakeList } from './api';
import { getFakeChartData } from './chart';
import { getProfileBasicData } from './profile';
import { getProfileAdvancedData } from './profile';
import { getNotices } from './notices';

// 设置延迟响应，模拟向后端请求数据
Mock.setup({
  timeout: '200-2000',
});

Mock.mock('/api/currentUser', 'get', {
  name: 'Serati Ma',
  avatar: 'https://gw.alipayobjects.com/zos/rmsportal/BiazfanxmamNRoxxVxka.png',
  userid: '00000001',
  notifyCount: 12,
});
Mock.mock('/api/users', 'get', [
  {
    key: '1',
    name: 'John Brown',
    age: 32,
    address: 'New York No. 1 Lake Park',
  },
  {
    key: '2',
    name: 'Jim Green',
    age: 42,
    address: 'London No. 1 Lake Park',
  },
  {
    key: '3',
    name: 'Joe Black',
    age: 32,
    address: 'Sidney No. 1 Lake Park',
  },
]);
Mock.mock('/api/project/notice', 'get', getNotice);
Mock.mock('/api/activities', 'get', getActivities);
Mock.mock('/api/rule', 'get', getRule);
Mock.mock('/api/rule', 'post', postRule);
Mock.mock('/api/fake_chart_data', 'get', getFakeChartData);
