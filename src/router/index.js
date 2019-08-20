import Vue from 'vue'
import Router from 'vue-router'
const Homepage = () => import("../components/homepage/Homepage");
const Department = () => import("../views/department/Department");
const Employee = () => import("../views/employee/Employee");
const Login = ()=>import('@/views/login/Login')

Vue.use(Router)

export default new Router({
    routes: [
        {path: '/login', component: Login},
        {
            path: '/', component: Homepage,
            children: [
                {path: 'department', component: Department, meta:{name:'department',title:'部门管理'}},
                {path: 'employee', component: Employee,meta:{name:'employee',title:'员工管理'}}
            ]
        }
    ]
})