<script setup>
import { ElMain,
        ElForm,
        ElFormItem,
        ElInput,
        ElButton
 } from 'element-plus';
import { reactive } from 'vue';
import axios from 'axios';

const signUpDetails = reactive({
    firstName: '',
    lastName: '',
    username: '',
    password: '',
});


const handleAccountCreation = async () => {
    try {
        const url = 'http://localhost:8080/auth/register';
        const response = await axios.post(url, {
            firstName: signUpDetails.firstName,
            lastName: signUpDetails.lastName,
            username: signUpDetails.username,
            password: signUpDetails.password,
        });
        console.log(response.data); // For testing purposes
        window.location.href = '/sign-in';
    } catch (error) {
        console.error('Oops, an unexpected error occurred:', error);
    }
};

const handleSignIn = () => {
    window.location.href = '/sign-in';
};
</script>



<template>
    <div class="signUp">
        <el-main>
            <div class="signUp__content">
                <div class="signUp__header">
                    <h1> Sign Up </h1>
                </div>
                <div class="signUp__form">
                        <el-form :model="signInDetails" label-width="auto" >
                            <div class="signUp__form__content">
                                <el-form-item label="First Name: ">
                                    <el-input v-model="signUpDetails.firstName" placeholder="Enter First Name" />
                                </el-form-item>
                                <el-form-item label="Last Name: ">
                                    <el-input v-model="signUpDetails.lastName" placeholder="Enter Last Name" />
                                </el-form-item>
                                <el-form-item label="Email: ">
                                    <el-input v-model="signUpDetails.email" placeholder="Enter Email" />
                                </el-form-item>
                                <el-form-item label="Password: ">
                                    <el-input v-model="signUpDetails.password" placeholder="Enter Password" />
                                </el-form-item>
                                <div class="signUp__form__buttons">
                                    <el-button type="primary" @click="handleSignIn">Sign In</el-button>
                                    <el-button @click="handleAccountCreation">Create Account </el-button>
                                </div>
                            </div>
                        </el-form>
                </div>
            </div>
        </el-main>
    </div>
</template>