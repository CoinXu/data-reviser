<template>
  <div>
    <button @click="checkParam">验证</button>
  </div>
</template>

<script>
  import test1Entry from '../entry/Test1Entry';
  import {Test1ExtendEntry} from '../entry/Test1ExtendEntry';

  export default {
    name: "demo",
    data() {
      return {}
    },
    methods: {
      checkParam: function () {
        let data = {
          // num1: 10,
          num64: 64,
          unnum32: 100,
          unnum64: 6400,
          double: 1.11,
          float: 1.1,
          str: "test",
          mail: "2959581@qq.com",
          phone: 13561127191,
          numarr: [
            {num: 12},
            {num: 13}
          ],
          boo: true,
          obj: {
            obj1: {
              num: 10
            }
          }
        };
        const entry = new test1Entry();
        const entry1 = new Test1ExtendEntry();
        const errmsg = entry.setModel(data);
        const errmsg1 = entry1.setModel(Object.assign({},data,{
          numExtend: 10
        }));
        const model = entry.getModel();
        console.log(entry, model,errmsg);
        console.log(entry1, errmsg1)
      }
    }
  }
</script>

<style scoped>

</style>
