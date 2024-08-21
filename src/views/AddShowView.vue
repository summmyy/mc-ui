<script setup>

import NavBar from '@/components/NavBar.vue';
import { ElMain, ElForm, ElFormItem, ElInput, ElButton} from 'element-plus';
import { reactive, ref } from 'vue';
import axios from 'axios';

const token = ref(localStorage.getItem('authToken'));


const showDetails = reactive({
    show: {
        title: '',
        genre: '',
        showType: '',
        country: '',
        duration: null,
        releaseDate: '',
        image: '',
        description: '',
    },
    tags:{
        tag_1: '',
        tag_2: '',
        tag_3: '',
        tag_4: '',
        tag_5: '',
    }
});

const handlesubmit = async () => {
    try{
    // post request to the API to add a show goes here
    const url = 'http://localhost:8080/api/shows/create-show';
    const request = await axios.post(url, {
        showDetails : {
            title: showDetails.show.title,
            genre: showDetails.show.genre,
            showType: showDetails.show.showType,
            country: showDetails.show.country,
            duration: showDetails.show.duration,
            releaseDate: showDetails.show.releaseDate,
            showPosterUrl: showDetails.show.image,
            description: showDetails.show.description,
        },
        tagDetails: {
            tag_1 : showDetails.tags.tag_1,
            tag_2 : showDetails.tags.tag_2,
            tag_3 : showDetails.tags.tag_3,
            tag_4 : showDetails.tags.tag_4,
            tag_5 : showDetails.tags.tag_5,
        }
    }, {
        headers: {
            'Authorization': `Bearer ${token.value}`
        },
    });

    console.log('Show Added Successfully!');
    console.log(request.data); // For testing purposes
    alert('Show Added Successfully! \nThank you for your contribution!');
    showDetails.show.title = '';
    showDetails.show.genre = '';
    showDetails.show.showType = '';
    showDetails.show.country = '';
    showDetails.show.duration = null;
    showDetails.show.releaseDate = '';
    showDetails.show.image = '';
    showDetails.show.description = '';
    showDetails.tags.tag_1 = '';
    showDetails.tags.tag_2 = '';
    showDetails.tags.tag_3 = '';
    showDetails.tags.tag_4 = '';
    showDetails.tags.tag_5 = '';
    } catch (error) {
        console.error('Oops, an unexpected error occurred:', error);
    }

}

const handleCancel = () => {
    showDetails.show.title = '';
    showDetails.show.genre = '';
    showDetails.show.showType = '';
    showDetails.show.country = '';
    showDetails.show.duration = null;
    showDetails.show.releaseDate = '';
    showDetails.show.image = '';
    showDetails.show.description = '';
    showDetails.tags.tag_1 = '';
    showDetails.tags.tag_2 = '';
    showDetails.tags.tag_3 = '';
    showDetails.tags.tag_4 = '';
    showDetails.tags.tag_5 = '';
}


</script>

<template>
    <div class="addShowView">
        <NavBar pageName="Add Shows" />
        <div class="addShowView__content">
            <div class="addShowView__header">
                <h1> Add Show </h1>
            </div>
            <div class="addShowView__form">
                <ElMain>
                    <el-form :model="showDetails.show" label-width="auto" >
                        <div class="addShowView__form__left">
                            <el-form-item label="Show Name">
                                <el-input v-model="showDetails.show.title" placeholder="Enter Show Name" />
                            </el-form-item>
                            <el-form-item label="Genre">
                                <el-input v-model="showDetails.show.genre" placeholder="Enter Genre" />
                            </el-form-item>
                            <el-form-item label="Show Type">
                                <el-input v-model="showDetails.show.showType" placeholder="Movie or Series" />
                            </el-form-item>
                            <el-form-item label="Country">
                                <el-input v-model="showDetails.show.country" placeholder="Enter Country" />
                            </el-form-item>
                            <el-form-item label="Duration">
                                <el-input v-model="showDetails.show.duration" placeholder="Enter Duration in minutes" />
                            </el-form-item>
                            <el-form-item label="Release Date">
                                <el-input v-model="showDetails.show.releaseDate" placeholder="Enter Release Date" />
                            </el-form-item>
                            <el-form-item label="Image">
                                <el-input v-model="showDetails.show.image" placeholder="Enter Image URL" />
                            </el-form-item>
                            <el-form-item label="Description">
                                <el-input v-model="showDetails.show.description" placeholder="Enter Description" type="textarea" :rows="3" />
                            </el-form-item>
                        </div>
                        <div class="addShowView__form__right">
                            <el-form-item label="Tag 1">
                                <el-input v-model="showDetails.tags.tag_1" placeholder="Enter Tag 1" />
                            </el-form-item>
                            <el-form-item label="Tag 2">
                                <el-input v-model="showDetails.tags.tag_2" placeholder="Enter Tag 2" />
                            </el-form-item>
                            <el-form-item label="Tag 3">
                                <el-input v-model="showDetails.tags.tag_3" placeholder="Enter Tag 3" />
                            </el-form-item>
                            <el-form-item label="Tag 4">
                                <el-input v-model="showDetails.tags.tag_4" placeholder="Enter Tag 4" />
                            </el-form-item>
                            <el-form-item label="Tag 5">
                                <el-input v-model="showDetails.tags.tag_5" placeholder="Enter Tag 5" />
                            </el-form-item>
                        </div>
                        <br/>
                    </el-form>
                    <el-form-item>
                            <el-button type="danger" @click="handleCancel" ><h3>Cancel</h3></el-button>
                            <el-button type="primary" @click="handlesubmit" ><h3>Submit</h3></el-button>
                    </el-form-item>
                </ElMain>
            </div>
        </div>
    </div>
</template>