import { createApp } from 'vue';
import axios from 'axios';
import {ElLoading, ElNotification} from 'element-plus';

let loader = null;
function showLoader(text = 'loading'){
    loader = ElLoading.service({
        lock: true,
        text: text,
        spinner: 'el-icon-loading',
        background: 'rgba(255, 255, 255, 0, 85)',
    });
}
function hideLoader(){
    loader.close();
}

import { setTableData } from "./mutations.js";

export const getStudents = ({ commit }, payload) => {
    let url = `/fetch-all-students`;
    axios.post(url, payload)
        .then(res => {
            commit('setTableData', res.data);  // Correct mutation name
        });
};

export const saveStudent = ({ commit }, payload) => {

    let url = '/save-student';
    showLoader('Saving Student');

    axios.post(url, payload).then(res => {

        ElLoading.service().close();

        ElNotification({
            title: 'success',
            message: 'Student Created Successfully',
            type: 'success',
        });
        // Redirect on success
        window.location.href = '/students';
    }).catch(error => {
        console.error(error);

        // Notify error
        ElNotification({
            title: 'Error',
            message: 'An error occurred while saving the student',
            type: 'error',
        });
        throw error;
    }).finally(() => {
        hideLoader();
    });
};

export const updateStudent = ({ commit }, payload) => {

    let url = `/update-student/${payload.id}`;
    showLoader('Updating Student');

    axios.put(url, payload.model).then(res => {

        ElLoading.service().close();

        ElNotification({
            title: 'success',
            message: res.data.message,
            type: 'success',
        });
        // Redirect on success
        window.location.href = '/students';
    }).catch(error => {
        console.error(error);

        // Notify error
        ElNotification({
            title: 'Error',
            message: 'An error occurred while saving the student',
            type: 'error',
        });
        throw error;
    }).finally(() => {
        hideLoader();
    });
};

export const deleteStudent = ({ commit }, payload) => {

    let url = `/delete-student/${payload.id}`;
    showLoader('Deleting Student');

        axios.get(url, payload).then(res => {

        ElLoading.service().close();

        ElNotification({
            title: 'success',
            message: res.data.message,
            type: 'success',
        });
        // Redirect on success
        // window.location.href = '/students';
    }).catch(error => {
        console.error(error);

        // Notify error
        ElNotification({
            title: 'Error',
            message: 'An error occurred while saving the student',
            type: 'error',
        });
        throw error;
    }).finally(() => {
        hideLoader();
    });
};
