<template>
  <div>
    <p> {{win}} </p>
    <p> {{loss}} </p>
    <button @click="play_function">Play</button>
  </div>
</template>

<script>
import axios from 'axios'
    export default {

        methods: { 
            play_function: function(){
                if(this.generated_number >= 50){
                    this.win + 1
                }else{
                    this.loss + 1
                };
                Cookies.set(`setwin` , this.win)
                Cookies.set(`setloss` , this.loss)
            }
        },
        data() {
            return{
                generated_number: undefined,
                win: 0,
                loss: 0,
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