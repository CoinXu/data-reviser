/**
* @date 2018-08-15
* @author zhuoyihan
* @description 测试用page
*/

<template>
  <div>
    <button @click="checkParam">验证</button>
  </div>
</template>

<script>
  import Entries from '../entry/TestReadOnlyEntry';

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
        const entry = new Entries.Test1Entry();
        const entry1 = new Entries.Test1ExtendEntry();
        const errmsg = entry.setModel(data);
        const errmsg1 = entry1.setModel(Object.assign({},data,{
          numExtend: 10,
          numExtend1: 11
        }));
        const model = entry.getModel();
        const model1 = entry1.getModel();
        console.log(entry, model,errmsg);
        console.log(entry1, model1, errmsg1)
      }
    }
  }
</script>

<style scoped>

</style>
