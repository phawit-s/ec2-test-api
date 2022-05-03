<template>
  <div>
    <p>{{text}}</p>
  </div>
</template>

<script>

import {HTTP} from "@/axios.js"

export default {
  name: 'App',
  data(){
    return{
      text:""
    }
  },
  mounted(){
    this.getImage()
  },
  methods: {
    async getImage(){
      await HTTP.get().then(res => {
        this.text = res.data.text
        console.log(this.text);
      }).catch(e => {
        console.log(e);
      })
    }
  },

}
</script>