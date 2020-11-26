import { Home, VoucherInfo, ListPage } from '../pages';

export const routePath = {
  HOME: 'Home',
  VOUCHERINFO: 'VoucherInfo',
  LISTPAGE: 'ListPage'
}

export const appRoutes = [
  { name: routePath.HOME, component: Home },
  { name: routePath.VOUCHERINFO, component: VoucherInfo },
  { name: routePath.LISTPAGE, component: ListPage }
];


export const appInitialRoutes = routePath.LISTPAGE;