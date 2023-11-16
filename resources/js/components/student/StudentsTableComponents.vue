<template>
    <el-row>
        <h1 style="margin-left: 35%">Table Of All Students</h1>
        <el-button type="success" @click="goAddStudent" size="large" style="margin-left: 28%">Add Student</el-button>
    </el-row>

        <el-table :data="filteredStudents" style="width: 100%" max-height="500" >

            <el-table-column prop="name" label="Name" width="120" />
            <el-table-column prop="section" label="Section" width="120" />
            <el-table-column prop="class" label="Class" width="120" />
            <el-table-column prop="email" label="Email" width="400" />
            <el-table-column align="right">
                <template #header>
                    <el-input v-model="search" size="default" placeholder="Type to search" />
                </template>
                <template #default="scope">
                    <el-button type="primary" size="default" @click="editStudent(scope.$index, scope.row)">Edit</el-button>
                    <el-button type="danger" size="default" @click="removeStudent(scope.$index, scope.row.id)">Remove</el-button>
                </template>
            </el-table-column>
        </el-table>
    <div>
        <hr class="my-4" />
        <el-pagination
            :total="tableData.length"
            :page-size="pageSize"
            layout="prev, pager, next"
            @current-change="handleCurrentChange"
        />
    </div>

</template>

<script>
    import {mapGetters} from "vuex";

    export default {
        name: 'student-table-component',
        props: {
        },
        data(){
            return {
                search: '',
                currentPage: 1,
                pageSize: 7, // Set your desired page size here
            };
        },
        methods: {
          goAddStudent(){
              window.location.href = "/add-student";
          },
            handleCurrentChange(val) {
                this.currentPage = val;
            },
            editStudent(index, student){
                window.location.href = "/edit-student/"+student.id;
            },
            fetchStudents(){
                this.students = this.$store.dispatch('getStudents');
            },
            removeStudent(index, id){
              if (confirm("Are You Sure To Delete This Student ?")){
                this.$store.dispatch('deleteStudent', { id: id });
                this.fetchStudents();
              }
            },
        },
        mounted() {
            console.log(this.tableData);
            const loading = this.$loading({
                lock: true,
                text: 'Loading...',
                spinner: 'el-icon-loading',
                background: 'rgba(255, 255, 255, 0.85)',
            });
            this.$store.dispatch('getStudents').then(() => {
                loading.close();
                this.fetchStudents();
                console.log(this.tableData);
            });
        },
        computed: {
            filteredStudents() {
                const start = (this.currentPage - 1) * this.pageSize;
                const end = start + this.pageSize;
                return this.tableData.filter(
                    (student) =>
                        student.name.toLowerCase().includes(this.search.toLowerCase()) ||
                        student.section.toLowerCase().includes(this.search.toLowerCase()) ||
                        student.class.toLowerCase().includes(this.search.toLowerCase()) ||
                        student.email.toLowerCase().includes(this.search.toLowerCase())
                ).slice(start, end);
            },
            ...mapGetters({
                tableData: ['tableData']
            }),
        },
    };

</script>

<style scoped></style>
