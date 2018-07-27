<template>
  <div>
    <button @click="checkParam">验证</button>
  </div>
</template>

<script>
  import test1Entry from '../entry/Test1Entry';

  export default {
    name: "demo",
    data() {
      return {}
    },
    methods: {
      checkParam: function () {
        let data = {
          num1: 10,
          num64: 64,
          unnum32: 100,
          unnum64: 6400,
          double: 1.11,
          float: 1.1,
          str: "test",
          mail: "2959581@qq.com",
          phone: 13561127191,
          numarr: [
            1,2
          ],
          boo: true,
          obj: {
            obj1: {
              num: 10
            }
          }
        };
        let entry = new test1Entry();
        let errmsg = entry.setModel(data);
        let model = entry.getModel();
        console.log(model,errmsg);
      }
    }
  }
</script>

<style scoped>

</style>
