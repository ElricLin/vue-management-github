<template>
    <el-menu
            default-active="indexactive"
            class="side-menu"
            background-color="#545c64"
            text-color="#fff"
            active-text-color="#ffd04b"
            :router=true>
        <el-submenu index="1" v-for="menu in menudata">
            <template slot="title">
                <i class="el-icon-location"></i>
                <span>{{menu.title}}</span>
            </template>
            <el-menu-item v-for="child in menu.menuchildren" :index="child.index">{{child.title}}</el-menu-item>
        </el-submenu>
    </el-menu>
</template>

<script>
    export default {
        name: "SideMenu",
        data(){
            return {
                menudata:[
                    {title:'系统管理',
                    menuchildren:[
                            {title:'部门管理',index:'department'},
                            {title:'员工管理',index:'employee'}
                        ]}
                ]
            }
        },
        computed:{
            indexactive(){
                return this.$route.path
            }
        }
    }
</script>

<style scoped>
.side-menu{
    width: 200px;
    position: absolute;
    left: 0;
    bottom: 0;
    top: 60px;
}
</style>