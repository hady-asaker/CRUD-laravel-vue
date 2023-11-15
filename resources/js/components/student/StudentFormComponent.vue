<template>
    <h1 style="text-align: center">Add Student</h1>
    <div class="full-height">
        <el-card class="box-card">
            <template #header>
                <div slot="header" class="card-header">
                    <el-page-header @back="goBack" :content="`Category - ${scope}`">
                    </el-page-header>
                </div>
            </template>

            <div class="form-container">
                <el-form :model="model" :rules="rules" ref="studentForm" class="full-form">

                    <el-form-item label="Name" required prop="name" >
                        <el-input v-model="model.name" aria-placeholder="Student Name" size="large"></el-input>
                    </el-form-item>

                    <el-form-item label="Class" required prop="class">
                        <el-input v-model="model.class" aria-placeholder="Student Class" size="large"></el-input>
                    </el-form-item>

                    <el-form-item label="Section" required prop="section">
                        <el-input v-model="model.section" aria-placeholder="Student Section" size="large"></el-input>
                    </el-form-item>

                    <el-form-item label="Email" required prop="email">
                        <el-input v-model="model.email" aria-placeholder="Student Email" size="large"></el-input>
                    </el-form-item>

                    <el-row>
                        <el-form-item>
                            <el-button type="success" @click="saveForm('studentForm')" size="large">Save Student</el-button>
                        </el-form-item>
                    </el-row>
                </el-form>
            </div>
        </el-card>
    </div>
</template>

<script>
export default {
    name: "StudentFormComponent",
    data(){
        return{
            model: {
                name: null,
                email: null,
                status: null,
                class: null,
                section: null,
            },
            rules: {
                //validate
            }
        };
    },
    methods: {
        saveForm(formName){
            this.$refs[formName].validate( (valid) => {
                if (valid){
                    this.$store.dispatch(saveStudent, this.model);
                }
            });
        },
        goBack(){
            window.location.href = "/students";
        }
    },
    mounted() {
        console.log("Vue Mounted");
        console.log(this.$store);
    }
}
</script>

<style scoped>

.full-height {
    height: 70vh;
    display: flex;
    justify-content: center;
    align-items: center;
}

.card-header {
    display: flex;
    justify-content: space-between;
    align-items: center;
}

.form-container {
    //height: 100%;
    flex: 1;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
}

.full-form {
    flex: 1;
    display: flex;
    flex-direction: column;
}

.text {
    font-size: 14px;
}

.item {
    margin-bottom: 18px;
}
/* Increase the size of inputs and buttons */
.el-input, .el-button {
    height: 50px;
    font-size: 18px;
}

.box-card {
    width: 100%;
    margin: 0 auto;
}

.el-form-item {
    margin-bottom: 20px;
}

</style>
