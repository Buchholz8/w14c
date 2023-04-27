<template>
    <div>
    <p>{{ win }}</p>
    <p>{{ loss }}</p>
    <button @click="play_function">Play</button>
    <section>
      <p>your points: {{ points }}</p>
      <p>Wager Points</p>
      <input type="number" class="Wager" />
      <button @click="wager_function"> Wager {{this.wager_value}} </button>
    </section>
    </div>
</template>

<script>
import axios from "axios";
import cookies from "vue-cookies"
export default {
    //ik i am suppose to catch the token from the ogin page using cookies.get(`token`) but i do not kno whwere that goes 
    //ive tried to put it every where in here and i get erors everywhere 
  methods: {
    //for the play function i set the axios number to the generated_number
    //i create an if-else that will add 1 to the win if its above and add 1 to the loss if its below
    //i then set different cookeis for each so tat it would save the changes
    play_function: function() {
      if (this.generated_number >= 50) {
        this.win + 1;
      } else {
        this.loss + 1;
      }
      cookies.set(`setwin`, this.win);
      cookies.set(`setloss`, this.loss);
    },
    //for the wager function i did mostly the same thing just made a new value called wager_value and defined it as the 
    //[`value`] of the input then i either multiplied it by 2 for a win or - it by its same value
    wager_function: function () {
      let user_wager = document.querySelector(`.wager`);
      this.wager_value = user_wager[`value`];
      if (this.generated_number >= 50) {
        this.wager_value * 2;
      } else {
        //not sure it this works as im running into errors on the login page, if not i would probably just have to have it
        //as this.wager_value = this.wager_value - this.wager_value
        this.wager_value - this.wager_value;
      }
    },
  },
  data() {
    return {
      generated_number: undefined,
      win: 0,
      loss: 0,
      points: 100,
      wager_value: undefined,
    };
  },
  mounted() {
    axios
      .request({
        irl: `http://www.randomnumberapi.com/api/v1.0/randomnumber`,
      })
      .then((response) => {
        this.generated_number = response[`data`];
      })
      .catch((error) => {
        error;
      });
  },
};
</script>

<style scoped>

</style>