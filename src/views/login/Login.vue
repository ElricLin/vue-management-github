<template>
    <div class="login-wrapper">
        <el-form :model="ruleForm" status-icon :rules="rules" ref="ruleForm" class="login-content">
            <h3>叩丁狼客户管理系统</h3>
            <el-form-item prop="username">
                <el-input placeholder="请输入账户" type="text" v-model="ruleForm.username" autocomplete="off"></el-input>
            </el-form-item>
            <el-form-item prop="password">
                <el-input placeholder="请输入密码" type="password" v-model="ruleForm.password" autocomplete="off"></el-input>
            </el-form-item>
            <el-form-item>
                <el-button class="login-btn" type="primary" @click="loginfn()">提交</el-button>
            </el-form-item>
        </el-form>
    </div>
</template>

<script>
    import {LoginApi} from '@/request/api'
    import qs from 'qs'
    export default {
        name: "Login",
        data(){
            return {
                ruleForm:{},
                rules:{
                    username: [
                        { required:true,message:'请输入账户', trigger: 'blur' }
                    ],
                    password: [
                        { required:true,message:'请输入密码',trigger: 'blur' }
                    ],
                }
            }
        },
        methods:{
            loginfn(){
                this.$refs['ruleForm'].validate(vali=>{
                    if(vali){
                        LoginApi(qs.stringify({
                            username:this.ruleForm.username,
                            password:this.ruleForm.password
                        })).then(res=>{
                            console.log(res);
                        })
                    }else {
                        return false
                    }
                })
            }
        }
    }
</script>

<style scoped lang="less">
.login-wrapper{
    width: 100%;
    height: 100%;
    background: #324057;
    display: flex;
    justify-content: center;
    align-items: center;
    .login-content{
        width: 320px;
        height: 240px;
        h3{
            text-align: center;
            padding: 10px 0;
            color: #fff;
        }
        .login-btn {
            width: 100%;
        }
    }
}
</style>