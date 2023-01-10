<template>
   <div class="row justify-content-center">
        <div class="modal fade" id="loginModal" tabindex="-1" aria-labelledby="loginModalLabel" aria-hidden="true">
            <div class="modal-dialog">
                <div class="modal-content card-tertiary">
                    <div class="modal-header card-header">
                        <h5 class="modal-title" id="exampleModalLabel">Přihlášení</h5>
                    </div>
                    <div class="card-body">
                        <form @submit.prevent="submitForm" class="card-body">
                            <div class="form-group">
                                <label>Přihlašovací jméno</label>
                                <input type="text" class="form-control" v-model="username">
                            </div>

                            <div>
                                <label>Heslo</label>
                                <input type="password" class="form-control" v-model="password">
                            </div>

                            <div v-if="errors.length">
                                <p v-for="error in errors" v-bind:key="error">{{ error }}</p>
                            </div>

                            <div class="float-end mt-2">
                                <button @click="$emit('closeModal')" type="button" class="btn btn-primary me-1" data-bs-dismiss="modal">
                                    <span class="btn-text">Zavřít</span>
                                </button>
                                <button class="btn btn-primary">
                                    <span class="btn-text fw-bold">OK </span>
                                </button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>

    </div> 
</template>

<script setup>
import axios from 'axios';
import { onMounted, ref } from 'vue';
import { useRoute, useRouter } from 'vue-router';

import { useStore } from '@/stores/stores';

const username = ref('');
const password = ref('');
const errors = ref([]);

const route = useRoute();
const router = useRouter();

async function submitForm() {
    errors.value = [];
    const store = useStore();

    axios.defaults.headers.common['Authorization'] = ''
    localStorage.removeItem('token');
    const formData = {
        username: username.value,
        password: password.value
    }

    try {
        const response = await axios.post('/api/v1/token/login', formData);
        const token = response.data.auth_token;
        store.setToken(token);
        axios.defaults.headers.common['Authorization'] = 'Token ' + token;
        localStorage.setItem('token', token);
        const toPath = route.query.to || '/kosik';
        router.push(toPath);
    } catch (error) {
        if (error.response) {
            for (const property in error.response.data) {
                errors.value.push(`${property}: ${error.response.data[property]}`);
            }
        } else {
            errors.value.push('Something went wrong. Please try again.');
            console.log(JSON.stringify(error));
        }
    }
}
</script>

<style scoped>
.btn-text {
    font-family: 'Windows 95';
}

label {
    font-size: 0.6rem;
    color: black;
    margin: 0;
}

.form-group {
    position: relative;
}

.form-control,
.form-control:focus {
    font-size: .6rem;
    color: black;
    padding: .3rem;
    border-color: #4A4A4A;
    box-shadow: none;
    border-radius: 0;
}

.form-group-input {
    position: relative;
}

.form-group-input:after {
    content: '';
    display: block;
    position: absolute;
    left: 0;
    top: 0;
}

.form-group-input:before {
    top: 0;
    width: 100%;
    height: 1px;
    background: #000000;
}

.form-group-input:after {
    border-left: 1px solid #000000;
    border-top: 1px solid #000000;
    border-bottom: 1px solid #DFDFDF;
    border-right: 1px solid #DFDFDF;
}

.form-control.is-valid:focus,
.form-control.is-invalid:focus {
    box-shadow: none;
}

::selection {
    background-color: #0004BD;
    color: white;
}


.card {
    border-top: 2px solid white;
    border-left: 2px solid white;
    border-right: 2px solid #393939;
    border-bottom: 2px solid #393939;
    border-radius: 0;
    background: #C0C0C0;
}

.modal-footer {
    background-color: transparent;
}

.card-primary .card-header {
    background: #C0C0C0;
}

.card-secondary .card-header {
    background: #008081;
    color: white;
}

.card-tertiary .card-header {
    background: #000181;
    color: white;
}

.card-header {
    position: relative;
    background: #808080;
    font-size: .65rem;
    padding: 4px;
    color: #C9C9C9;
    border-radius: 0;
    border: 2px solid #BDBDBD;
}

.card-header .icon {
    position: absolute;
    top: -5px;
    left: -3px;
}

.card-body {
    padding: 10px 7px;
    border-top: 2px solid #BDBDBD;
    border-left: 3px solid #BDBDBD;
    border-right: 3px solid #BDBDBD;
    border-bottom: 2px solid #bdbdbd;
    background-color:#BDBDBD;
}

.card-footer {
padding: 10px 7px;
}
</style>