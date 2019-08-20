<template>
    <el-table
            :data="deptlists"
            style="width: 100%">
        <el-table-column
                prop="id"
                label="编号">
        </el-table-column>
        <el-table-column
                prop="name"
                label="部门名称">
        </el-table-column>
        <el-table-column
                prop="sn"
                label="部门编号">
        </el-table-column>
        <el-table-column
                label="操作">
            <template slot-scope="scope">
                <el-button
                        type="info"
                        size="mini"
                        @click="edit(scope.row)">编辑</el-button>
                <el-button
                        size="mini"
                        type="danger"
                        @click="del(scope.row)">删除</el-button>
            </template>
        </el-table-column>
    </el-table>
</template>

<script>
    export default {
        name: "DeptTable",
        props:{
            deptlists:{type:Array,default:[]},
        },
        methods:{
            edit(row){
                this.$emit('edit',row)
            },
            del(row){
                this.$emit('del',row)
            }
        }
    }
</script>

<style scoped>

</style>