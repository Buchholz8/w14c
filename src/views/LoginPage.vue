<template>
  <div>
    <input class="user_name" type="text">
    <input class="user_password" type="text">
    <button @click="login_button"> Login </button>
  </div>
</template>

<script>

export default {
  methods: {
    data( ){
      return{
        email_value: undefined,
        password_value: undefined
      }
    },
    login_button: function(response) {
      let email_input = document.querySelector(`.user_name`);
      let email_value = email_input[`value`];
      let password_input = document.querySelector(`.user_password`);
      let password_value = password_input[`value`];
      Cookies.set(`token`, response[`data`][`token`]);
      this.$router.push(`/GamePage`);
    }
  },
  mounted() {
    axios
      .request({
        url: `https://reqres.in/api/login`,
        method: `POST`,
        data: {
          emai: email_value,
          password: password_value,
        },
      })
      .then(login_button)
      .catch((error) => {
        error;
      });
  },
}
</script>

<style scoped>
</style>