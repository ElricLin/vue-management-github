<template>
    <div>
        <el-button type="primary" @click="add">添加</el-button>
        <dept-table :deptlists="deptlists"
                    @edit="edit"
                    @del="del"/>
        <dept-dialog :title="title"
                     :form="form"
                     :diaVisible="diaVisible"
                     @submit="submit"/>
        <dept-pagination :currentPage="currentPage"
                         :pagesize="pagesize"
                         :total="total"
                         @handleSizeChange="handleSizeChange"
                         @handleCurrentChange="handleCurrentChange"/>
    </div>
</template>

<script>
    import {getdepartment,editdepartment ,adddepartment ,deldepartment} from '@/request/api'
    import DeptTable from "./children/DeptTable";
    import DeptDialog from "./children/DeptDialog";
    import DeptPagination from "./children/DeptPagination";
    export default {
        name: "Department",
        components: {DeptPagination, DeptDialog, DeptTable},
        data(){
            return {
                deptlists:[],
                form:{},
                diaVisible:false,
                title:'',
                currentPage:1,
                pagesize:5,
                total:0
            }
        },
        methods:{
            edit(row){
                this.title = '部门编辑'
                this.diaVisible=true
                this.form = {...row}
            },
            add(){
                this.title = '部门添加'
                this.diaVisible=true
            },
            del(row){
                this.$confirm('是否删除该部门', '删除提示')
                    .then(res => {
                        deldepartment({...row})
                            .then(res=>{
                                this.getdepartmentfn()
                            })
                     })
            },
            submit(data){
                this.diaVisible=false
                if(data){
                    if(data.id){
                        editdepartment(data)
                            .then(res=>{
                                    if(res.success === true){
                                        this.getdepartmentfn()
                                    }
                                }
                            )
                    }else {
                        adddepartment(data)
                            .then(res=>{
                                if(res.success === true){
                                    this.getdepartmentfn()
                                }
                            })
                    }
                }
                this.form = {}
            },
            getdepartmentfn(){
                getdepartment({
                    currentPage:this.currentPage,
                    pageSize:this.pageSize
                }).then(res=>{
                    this.deptlists = res.data.list;
                    this.total = res.data.total;
                })
            },
            handleSizeChange(size){
                this.pageSize=size
                this.getdepartmentfn()
            },
            handleCurrentChange(page){
                this.currentPage=page
                this.getdepartmentfn()
            }
        },
        created() {
            this.getdepartmentfn()
        }
    }
</script>

<style scoped>

</style>