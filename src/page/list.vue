<template>
    <div class="list">
       this is list
    </div>
</template>

<script>
    export default {
       metaInfo: {
          title: 'list',
          meta: [
            {
              name: 'keywords',
              content: 'this is list'
            },
            {
              name: 'description',
              content: 'this is list2'
            }
          ]
      },
      data(){
        return{
           hot:''
        }
      },
      created(){
         this.$http.post('v1/biz/trademark-storage?accessToken=',{
           name:'万小强',
           idCard:'',
         }).then((res) => {
           console.log(res)
         })

      }
    }
</script>

<style scoped>

</style>
