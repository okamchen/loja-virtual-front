import Index from '@/pages/User/Index'
import New from '@/pages/User/New'
import Users from '@/pages/User/Users'
import Edit from '@/pages/User/Edit'

export default {
  path: '/user',
  component: Index,
  children: [
    {
      path: 'new',
      name: 'New',
      component: New
    },
    {
      path: '',
      name: 'Users',
      component: Users
    },
    {
      path: 'edit/:id',
      name: 'Edit',
      component: Edit
    }
  ]
}
