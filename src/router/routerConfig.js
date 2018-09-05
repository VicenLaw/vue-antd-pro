import DefaultLayout from '../layouts/DefaultLayout';
import {
  Analysis, Monitor, Workplace,
} from './Dashboard';

import {
  Page403, Page404, Page500,
} from './Exception';

import {
  ResultError, ResultSuccess,
} from './Result';

const routerConfig = [{
  path: '/',
  layout: DefaultLayout,
  component: Analysis,
  children: [{
    path: '/dashboard/analysis',
    layout: DefaultLayout,
    component: Analysis,
  },
  {
    path: '/dashboard/monitor',
    layout: DefaultLayout,
    component: Monitor,
  },
  {
    path: '/dashboard/workplace',
    layout: DefaultLayout,
    component: Workplace,
  },
  {
    path: '/exception/403',
    layout: DefaultLayout,
    component: Page403,
  },
  {
    path: '/exception/404',
    layout: DefaultLayout,
    component: Page404,
  },
  {
    path: '/exception/500',
    layout: DefaultLayout,
    component: Page500,
  },
  {
    path: '/result/success',
    name: 'Success',
    layout: DefaultLayout,
    component: ResultSuccess,
  },
  {
    path: '/result/fail',
    name: 'Fail',
    layout: DefaultLayout,
    component: ResultError,
  },
  ],
},
{
  path: '*',
  layout: DefaultLayout,
  component: Page404,
},
];

export default routerConfig;
