<script setup> 
import { ElMain,
        ElForm,
        ElFormItem,
        ElInput,
        ElButton
 } from 'element-plus';
import { reactive } from 'vue';
import axios from 'axios';

const signInDetails = reactive({
    username: '',
    password: '',
});

const handleSignIn = async () => {
    try {
        const url = 'http://localhost:8080/auth/login';
        const response = await axios.post(url, {
            username: signInDetails.username,
            password: signInDetails.password,
        },);
        console.log(response.data); // For testing purposes
        localStorage.setItem('authToken', response.data.token);
        window.location.href = '/shows';
    } catch (error) {
        console.error('Oops, an unexpected error occurred:', error);
    }
};

const handleAccountCreation = () => {
    window.location.href = '/sign-up';
};


</script>

<template>
    <div class="signIn">
        <el-main>
            <div class="signIn__content">
                <div class="signIn__header">
                    <h1> Sign In </h1>
                </div>
                <div class="signIn__form">
                        <el-form :model="signInDetails" label-width="auto" >
                            <div class="signIn__form__content">
                                <el-form-item label="Username: ">
                                    <el-input v-model="signInDetails.username" placeholder="Enter Username" />
                                </el-form-item>
                                <el-form-item label="Password: ">
                                    <el-input v-model="signInDetails.password" placeholder="Enter Password" />
                                </el-form-item>
                                <div class="signIn__form__buttons">
                                    <el-button @click="handleAccountCreation">Create Account </el-button>
                                    <el-button type="primary" @click="handleSignIn">Sign In</el-button>
                                </div>
                            </div>
                        </el-form>
                </div>
            </div>
        </el-main>
    </div>
</template>