<template>
    <el-row>
        <h1 style="margin-left: 35%">Table Of All Students</h1>
        <el-button type="success" @click="goAddStudent" size="large" style="margin-left: 28%">Add Student</el-button>
    </el-row>

        <el-table :data="students" style="width: 100%" max-height="250" >
            <el-table-column prop="name" label="Name" width="120" />
            <el-table-column prop="section" label="Section" width="120" />
            <el-table-column prop="class" label="Class" width="120" />
            <el-table-column prop="email" label="Email" width="400" />
            <el-table-column fixed="right" label="Edit" width="120">
                <template #default="scope">
                    <el-button type="primary" size="medium">Edit</el-button>
                </template>
            </el-table-column>
            <el-table-column fixed="right" label="Delete" width="120">
                <template #default="scope">
                    <el-button type="danger" size="medium">Remove</el-button>
                </template>
            </el-table-column>
        </el-table>
</template>

<script>
    export default {
        props: {
            students: {}
        },
        data(){
            return {

            };
        },
        methods: {
          goAddStudent(){
              window.location.href = "/add-student";
          }
        },
        mounted() {
            console.log(this.students);
        }
    };

</script>

<style scoped></style>
