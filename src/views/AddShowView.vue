<script setup>

import NavBar from '@/components/NavBar.vue';
import { ElMain, ElForm, ElFormItem, ElInput, ElButton} from 'element-plus';
import { reactive } from 'vue';

const show = reactive({
    name: '',
    genre: '',
    showType: '',
    country: '',
    duration: null,
    image: '',
    description: '',
});

const handlesubmit = () => {
    console.log(show);
    alert('Show Added Successfully! \nThank you for your contribution!');
    show.name = '';
    show.genre = '';
    show.showType = '';
    show.country = '';
    show.duration = null;
    show.image = '';
    show.description = '';

}


</script>

<template>
    <NavBar pageName="Add Shows" />
    <div class="addShow">
        <ElMain>
            <el-form :model="show" label-width="auto" >
                <el-form-item label="Show Name">
                    <el-input v-model="show.name" placeholder="Enter Show Name" />
                </el-form-item>
                <el-form-item label="Genre">
                    <el-input v-model="show.genre" placeholder="Enter Genre" />
                </el-form-item>
                <el-form-item label="Show Type">
                    <el-input v-model="show.showType" placeholder="Movie or Series" />
                </el-form-item>
                <el-form-item label="Country">
                    <el-input v-model="show.country" placeholder="Enter Country" />
                </el-form-item>
                <el-form-item label="Duration">
                    <el-input v-model="show.duration" placeholder="Enter Duration in minutes" />
                </el-form-item>
                <el-form-item label="Image">
                    <el-input v-model="show.image" placeholder="Enter Image URL" />
                </el-form-item>
                <el-form-item label="Description">
                    <el-input v-model="show.description" placeholder="Enter Description" type="textarea" :rows="3" />
                </el-form-item>
                <br/>
                <el-form-item>
                    <el-button type="primary" @click="handlesubmit" ><h3>Submit</h3></el-button>
                </el-form-item>
            </el-form>
        </ElMain>
    </div>
</template>