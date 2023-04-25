<template>
  <div>
    <input class="user_name" type="text">
    <input class="user_password" type="text">
    <button @click="login_button"> Login </button>
  </div>
</template>

<script>
//im having major issues on this part, i cant figure out what it is none of the values on this page are being read
import axios from 'axios'
import cookies from "vue-cookies"
export default {
  methods: {
    login_button: function() {
      //heres my main problem none of these values are eing read and iin return im being sent a lot of errors
      //ive looked over everything and from what iove seen this should be being read
      email_input = document.querySelector(`.user_name`);
      email_value = email_input[`value`];
      password_input = document.querySelector(`.user_password`);
      password_value = password_input[`value`];
    }
  },
  //i set up a mounted area for the axios request
  mounted() {
    axios
      .request({
        url: `https://reqres.in/api/login`,
        //i made a POST request with the data i want requested, this could be the problem but id bet against it
        method: `POST`,
        data: {
          emai: email_value,
          password: password_value,
        },
      })
      //i made the then and catches with the data and the token 
      .then((response) => {
        cookies.set(`token`, response[`data`][`token`]);
      this.$router.push(`/GamePage`);
      })
      .catch((error) => {
        error;
      });
  },
}
</script>

<style scoped>
</style>