<template>
  <div>
    <h1>Checkout</h1>

    <div>
      <table>
        <thead>
          <tr>
            <th>Product</th>
            <th>Price</th>
            <th>Quantity</th>
            <th>Total</th>
          </tr>
        </thead>

        <tbody>
          <tr v-for="item in cart.items" v-bind:key="item.product.id">
            <td>{{ item.product.name }}</td>
            <td>${{ item.product.price }}</td>
            <td>{{ item.quantity }}</td>
            <td>${{ getItemTotal(item).toFixed(2) }}</td>
          </tr>
        </tbody>

        <tfoot>
          <tr>
            <td>Total</td>
            <td>{{ cartTotalLength }}</td>
            <td>${{ cartTotalPrice.toFixed(2) }}</td>
          </tr>
        </tfoot>
      </table>
    </div>

    <div>
      <h2>Shipping Details</h2>
      <p>* All fields are required</p>
    </div>

    <div>
      <div>
        <label>First name*</label>
        <div>
          <input type="text" class="input" v-model="firstName" />
        </div>
      </div>

      <div>
        <label>Last name*</label>
        <div>
          <input type="text" class="input" v-model="lastName" />
        </div>
      </div>

      <div>
        <label>E-mail*</label>
        <div>
          <input type="email" class="input" v-model="email" />
        </div>
      </div>

      <div>
        <label>Phone*</label>
        <div>
          <input type="text" class="input" v-model="phone" />
        </div>
      </div>
    </div>

    <div>
      <div class="field">
        <label>Address*</label>
        <div class="control">
          <input type="text" class="input" v-model="address" />
        </div>
      </div>

      <div class="field">
        <label>Zip code*</label>
        <div class="control">
          <input type="text" class="input" v-model="zipcode" />
        </div>
      </div>

      <div class="field">
        <label>Place*</label>
        <div class="control">
          <input type="text" class="input" v-model="place" />
        </div>
      </div>
    </div>

    <div v-if="errors.length">
      <p v-for="error in errors" v-bind:key="error">{{ error }}</p>
    </div>

    <hr />

    <template>
      <hr />

      <button class="btn" @click="submitForm">Pay with Money</button>
    </template>
  </div> 
</template>

<script setup>
import axios from 'axios';
import { computed, onMounted, ref } from 'vue';

import { useStore } from '@/stores/stores';

const cart = ref({ items: [] });
const firstName = ref('');
const lastName = ref('');
const email = ref('');
const phone = ref('');
const address = ref('');
const zipcode = ref('');
const place = ref('');
const errors = ref([]);

const cartTotalLength = computed(() => {
    return cart.value.items.reduce((acc, curVal) => {
        return acc += curVal.quantity;
    }, 0);
});

const cartTotalPrice = computed(() => {
    return cart.value.items.reduce((acc, curVal) => {
        return acc += curVal.product.price * curVal.quantity;
    }, 0);
});

function getItemTotal(item) {
    return item.quantity * item.product.price;
}

</script>