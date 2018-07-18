<template>
  <div>
    <button @click="checkParam">验证</button>
  </div>
</template>

<script>
  import test1Entry from '../entry/Test1Entry';
  import test1ObjEntry from "../entry/Test1ObjEntry";
  import jQuery from "jquery";

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
          numarr: [1,2,3,4],
          boo: true,
          obj: {
            num: 11
          }
        };
        let obj = new test1ObjEntry();
        obj.setModel(data.obj);
        jQuery.extend(data,{
          obj: obj
        })
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
