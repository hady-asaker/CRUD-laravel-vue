import { createApp } from 'vue';
import axios from 'axios';


export const saveStudent = ({ commit }, payload) => {

    let url = '/save-student';

    axios.post(url, payload).then((res) => {
        createApp({}).config.globalProperties.$notify({
            title: 'success',
            message: 'Student Created Successfully',
            type: 'success',
        });
        window.location.href = '/students';
    });
};
