import Vue from 'vue'
import Router from 'vue-router'
const Homepage = () => import("../components/homepage/Homepage");
const Department = () => import("../views/homepage/Department");
const Employee = () => import("../views/homepage/Employee");

Vue.use(Router)

export default new Router({
    routes: [
        {path:'/',component:Homepage,
            children:[
                {path: 'department',component:Department},
                {path: 'employee',component:Employee}
            ]
        }
    ]
})
