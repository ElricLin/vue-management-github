<template>
    <el-pagination
            @size-change="handleSizeChange"
            @current-change="handleCurrentChange"
            :current-page="currentPage"
            :page-sizes="[5, 10, 20, 40]"
            :page-size="pagesize"
            layout="total, sizes, prev, pager, next, jumper"
            :total="total">
    </el-pagination>
</template>

<script>
    export default {
        name: "DeptPagination",
        props:{
            pagesize:{},
            total:{},
            currentPage:{}
        },
        methods:{
            handleSizeChange(size){
                this.$emit('handleSizeChange',size)
            },
            handleCurrentChange(page){
                this.$emit('handleCurrentChange',page)
            }
        }
    }
</script>

<style scoped>

</style>