import ProductIndex from '@/pages/Product/ProductIndex'
import ProductNew from '@/pages/Product/ProductNew'
import Products from '@/pages/Product/Products'
import ProductEdit from '@/pages/Product/ProductEdit'

export default {
  path: '/product',
  component: ProductIndex,
  children: [
    {
      path: 'new',
      name: 'ProductNew',
      component: ProductNew
    },
    {
      path: '',
      name: 'Products',
      component: Products
    },
    {
      path: 'edit/:id',
      name: 'ProductEdit',
      component: ProductEdit
    }
  ]
}
