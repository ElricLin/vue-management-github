<template>
    <div class="header-wrapper">
        <h3 class="header-title">叩丁狼客户管理系统</h3>
        <a href="#" class="header-icon"><i class="el-icon-chat-line-square"></i></a>
        <el-dropdown trigger="click" class="header-nav">
            <span class="el-dropdown-link">
              下拉菜单<i class="el-icon-arrow-down el-icon--right"></i>
            </span>
            <el-dropdown-menu slot="dropdown">
                <el-dropdown-item icon="el-icon-plus">黄金糕</el-dropdown-item>
                <el-dropdown-item icon="el-icon-circle-plus">狮子头</el-dropdown-item>
                <el-dropdown-item icon="el-icon-circle-plus-outline">螺蛳粉</el-dropdown-item>
                <el-dropdown-item icon="el-icon-check">双皮奶</el-dropdown-item>
                <el-dropdown-item icon="el-icon-circle-check">蚵仔煎</el-dropdown-item>
            </el-dropdown-menu>
        </el-dropdown>
    </div>
</template>

<script>
    export default {
        name: "Header"
    }
</script>

<style lang="less" scoped>
.header-wrapper{
    width: 100%;
    height: 60px;
    background: #333;
    display: flex;
    justify-content: center;
    align-items: center;
    color: #fff;
    .header-title{
        padding: 0 10px;
    }
    .header-icon{
        flex: 1;
        color: #fff;
    }
    .header-nav{
        color: #fff;
        padding: 0 10px;
    }
}
</style>