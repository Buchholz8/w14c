<template>
  <div>
    <p>{{ score }}</p>
    <button @click="play_function">Play</button>
  </div>
</template>

<script>
import axios from 'axios'
    export default {

        methods: { 
            play_function: function(){
                if(this.generated_number >= 50){
                    this.score + 1
                }else{
                    this.score - 1
                };
                if(this.score = 0){
                    this.score = 0
                }
                Cookies.set(`setscore` , this.score)
            }
        },
        data() {
            return{
                score: 0,
                generated_number: undefined,
            }
        },
        mounted ( ) {
            axios.request({
               irl: `http://www.randomnumberapi.com/api/v1.0/randomnumber` 
            }).then((response) => {
                this.generated_number = response[`data`];
            }).catch((error) => {
                error;
            })
        }
    }
</script>

<style scoped>
</style>