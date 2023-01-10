<template>
    <div>
        <h1>Registrace</h1>

        <form @submit.prevent="submitForm">
            <div>
                <label>Username</label>
                <div>
                    <input type="text" class="input" v-model="username">
                </div>
            </div>

            <div>
                <label>Password</label>
                <div>
                    <input type="password" class="input" v-model="password">
                </div>
            </div>

            <div>
                <label>Confirm Password</label>
                <div>
                    <input type="password" class="input" v-model="confirmPassword">
                </div>
            </div>

            <div v-if="errors.length">
                <p v-for="error in errors" v-bind:key="error">{{ error }}</p>
            </div>

            <div>
                <button class="btn">Sign Up</button>
            </div>
        </form>
    </div>
</template>

<script setup>
import axios from 'axios';
import { onMounted, ref } from 'vue';
import { useRouter } from 'vue-router';

const username = ref('');
const password = ref('');
const confirmPassword = ref('');
const errors = ref([]);

async function submitForm() {
    errors.value = [];

    if (username.value === '') {
        errors.value.push('The username is empty');
    }

    if (password.value === '') {
        errors.value.push('The username is empty');
    }

    if (confirmPassword.value !== password.value) {
        errors.value.push('The passwords dont vibe');
    }

    if (!errors.value.length) {
        const router = useRouter();
        const formData = {
            username: username.value,
            password: password.value
        };

        try {
            const response = await axios.post('/api/v1/users/', formData);
            alert("oi, log in now");
            router.push('/prihlasit');
        } catch (error) {
            if (error.response) {
                for (const property in error.response.data) {
                    errors.value.push(`${property}: ${error.response.data[property]}`);
                }
                console.log(JSON.stringify(error.response.data));
            } else if (error.message) {
                errors.value.push("Something went wrong!");
                console.log(JSON.stringify(error));
            }
        }
    }
}


</script>
