<template>
    <el-dialog :title="title" :visible.sync="diaVisible" :before-close="diaclose">
        <el-form :model="newform">
            <el-form-item label="部门名称" label-width="80px">
                <el-input v-model="newform.name" auto-complete="off" placeholder="请输入部门名称"></el-input>
            </el-form-item>
            <el-form-item label="部门编号" label-width="80px">
                <el-input v-model="newform.sn" auto-complete="off" placeholder="请输入部门编号"></el-input>
            </el-form-item>
        </el-form>
        <div slot="footer" class="dialog-footer">
            <el-button @click="diaclose">取 消</el-button>
            <el-button type="primary" @click="submit">确 定</el-button>
        </div>
    </el-dialog>
</template>

<script>
    export default {
        name: "DeptDialog",
        props:{
            title:{type:String,default:''},
            diaVisible:{type:Boolean,default:false},
            form:{type:Object,default:{}}
        },
        data(){
            return {
                newform:{}
            }
        },
        watch:{
            form(newVal,oldVal){
                if(newVal){
                    this.newform={...newVal}
                }
            }
        },
        methods:{
            submit(){
                this.$emit('submit',{...this.newform})
            },
            diaclose(){
                this.$emit('submit')
            }
        }
    }
</script>

<style scoped>

</style>