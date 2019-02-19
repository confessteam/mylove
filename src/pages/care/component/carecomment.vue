<template>
    <div id="hello">{{msg}}</div>
</template>

<script>
  import { Button } from 'vant'

  export default {
    components: {
      [Button.name]: Button,
    },
    name: 'carecomment',
    data () {
      return {
        msg: 'care',
      }
    },
    methods: {}
    }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
