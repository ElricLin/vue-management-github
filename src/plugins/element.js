import Vue from 'vue'
import { Button , Dropdown , DropdownMenu , DropdownItem ,Menu ,MenuItem ,Submenu ,MenuItemGroup ,FormItem,Form,Input ,Table ,TableColumn , Dialog ,Message ,MessageBox , Pagination} from 'element-ui'

Vue.use(Button)
Vue.use(Dropdown)
Vue.use(DropdownMenu)
Vue.use(DropdownItem)
Vue.use(Menu)
Vue.use(MenuItem)
Vue.use(Submenu)
Vue.use(MenuItemGroup)
Vue.use(Button)
Vue.use(FormItem)
Vue.use(Form)
Vue.use(Input)
Vue.use(Table)
Vue.use(TableColumn)
Vue.use(Dialog)
Vue.use(Pagination)

Vue.prototype.$message = Message
Vue.prototype.$confirm = MessageBox.confirm