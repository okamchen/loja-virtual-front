import OrderIndex from '@/pages/Order/OrderIndex'
import Order from '@/pages/Order/Order'
import OrderDetail from '@/pages/Order/OrderDetail'

export default {
  path: '/order',
  component: OrderIndex,
  children: [
    {
      path: 'detail/:id',
      name: 'OrderDetail',
      component: OrderDetail
    },
    {
      path: '',
      name: 'Order',
      component: Order
    }
  ]
}
