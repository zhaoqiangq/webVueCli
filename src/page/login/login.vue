<template>
    <div>this is login
      <button @click="gettoken">点击获取token</button>
      <button @click="router">返回</button>

    </div>
</template>

<script>
    export default {
      metaInfo: {
        title: 'login',
        meta: [
          {
            name: 'keywords',
            content: 'this is login'
          },
          {
            name: 'description',
            content: 'this is login2'
          }
        ]
      },
      methods: {
        gettoken(){
          this.$local.save("sbtoken",'rmtR58SSgEm1v8WbiEeXGPrzlIHuoDTJ_1525424623');
        },
        router(){
          this.$router.push('/list');
        }
      }
    }
</script>

<style scoped>

</style>
