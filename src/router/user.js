import UserIndex from '@/pages/User/UserIndex'
import UserNew from '@/pages/User/UserNew'
import Users from '@/pages/User/Users'
import UserEdit from '@/pages/User/UserEdit'

export default {
  path: '/user',
  component: UserIndex,
  children: [
    {
      path: 'new',
      name: 'UserNew',
      component: UserNew
    },
    {
      path: '',
      name: 'Users',
      component: Users
    },
    {
      path: 'edit/:id',
      name: 'EditUser',
      component: UserEdit
    }
  ]
}
