<template>
  <div>
    <button @click="checkParam">验证</button>
  </div>
</template>

<script>
  import testEntry from '../entry/testEntry';
  import objEntry from "../entry/objEntry";
  import jquery from "jquery";

  export default {
    name: "demo",
    data() {
      return {}
    },
    methods: {
      checkParam: function () {
        let data = {
          num: 10,
          num64: 64,
          str: "test",
          float: 1.01,
          double: 1.011,
          unnum: 1111,
          unnum64: 1111,
          doubleArray: [1.11,1.21],
          floatArray: [1.1,1.2],
          numArray: [1,2],
          num64Array: [10,20],
          strArray: ["demo","test"],
          unnumArray: [4,5],
          unnum64Array: [4,5],
          obj: {
            num1: -11,
            num2: 12
          },
          objArray:[{
            num1: -11,
            num2: 12
          },{
            num1: -11,
            num2: 12
          }]
        };
        let obj = new objEntry();
        obj.setModel(data.obj);
        jquery.extend(data,{
          obj: obj,
          objArray: [obj,obj]
        })
        let entry = new testEntry();
        entry.setModel(data);
        let model = entry.get();
        console.log(model);
      }
    }
  }
</script>

<style scoped>

</style>
