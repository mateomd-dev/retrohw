<template>
  <div class="container-fluid">
    <div class="row mb-0 pb-0 d-flex justify-content-center">
      <Header class="col-12 pt-3 mb-3" />
      <!-- <RouterLink to="/kosik" class="col-2">
        Košík [{{ cartTotalLength }}]
      </RouterLink> -->
      <div class="row">
        <div class="col-4 border border-dark">
          SEARCH BAR
        </div>
        <div class="col-4 border border-dark">
          SLIDEBAR
        </div>
        <div class="col-4 border border-dark">
          <div class="float-end">
            <button @click="login" type="button" class="btn btn-primary" data-bs-toggle="modal" data-bs-target="#loginModal">
              <!-- <i class="fa-solid fa-user"></i> -->
              Přihlášení
            </button>
            <RouterLink to="/kosik" class="btn btn-primary ms-3">
              Košík
            </RouterLink>
          </div>
        </div>
      </div>
    </div>
    <div class="row pt-0">
      <div class="col-2 p-0">
        <Navbar class="" />
      </div>
      <div class="col-10 ms-auto-me-auto">
        <LogInModal v-show="showLogin" @closeModal="showLogin = false" />
        <RouterView />
      </div>
    </div>
    <Footer />
  </div>
</template>

<script setup lang="ts">
import axios from 'axios';
import { computed, ref } from 'vue';
import { RouterLink, RouterView } from 'vue-router';
import { useStore } from '@/stores/stores';

import Footer from '@/components/Footer.vue';
import Header from '@/components/Header.vue';
import Navbar from '@/components/Navbar.vue';
import LogInModal from '@/components/LogInModal.vue';

const store = useStore();
store.initStore();
const token = store.token;

const showLogin = ref(true);

if (token) {
  axios.defaults.headers['Authorization'] = 'Token ' + token;
} else {
  axios.defaults.headers.common['Authorization'] = '';
}

const cart = store.cart;
const cartTotalLength = computed(() => {
  let totalLength = 0;
  for (let i = 0; i < cart.items.length; i++) {
    totalLength += cart.items[i].quantity;
  }
  return totalLength;
})

function login() {
  showLogin.value = true;
}
</script>
