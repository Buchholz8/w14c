<template>
  <div>
    <input class="user_name" type="text" ref="email_input"/>
    <input class="user_password" type="text" ref="password_input"/>
    <button @click="login_button">Login</button>
  </div>
</template>

<script>
import axios from 'axios'
import cookies from "vue-cookies"

export default {
         methods: {
    login_button: function() {
    axios
      .request({
        url: `https://reqres.in/api/login`,
        //i made a POST request with the data i want requested, this could be the problem but id bet against it
        method: `POST`,
        data: {
          emai: this.$refs[`email_input`].value,
          password: this.$refs[`password_input`].value
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
    }
  },
}
</script>

<style scoped>
</style>