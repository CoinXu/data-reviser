import VeriInt32 from '../script/VeriInt32'
import objEntry from "./objEntry";
import VeriStruct from "../script/VeriStruct";
import Validator from "../script/Validator";
import VeriString from "../script/VeriString";
import VeriInt64 from "../script/VeriInt64";
import VeriFloat from "../script/VeriFloat";
import VeriDouble from "../script/VeriDouble";
import VeriUnInt32 from "../script/VeriUnInt32";
import VeriUnInt64 from "../script/VeriUnInt64";

class testEntry extends Validator{

  @VeriInt32()
  num: number = 1;

  @VeriInt64()
  num64: number = 1;

  @VeriString()
  str: string = "demo";

  @VeriFloat(false)
  float: number = 1.0;

  @VeriDouble(false,function (err) {
    console.log(err);
  })
  double: number = 1.0;

  @VeriUnInt32()
  unnum: number = 1;

  @VeriUnInt64()
  unnum64: number = 1;

  @VeriDouble(true)
  doubleArray: Array = [];

  @VeriFloat(true)
  floatArray: Array = [];

  @VeriInt32(true)
  numArray: Array = [];

  @VeriInt64(true)
  num64Array: Array = [];

  @VeriString(true)
  strArray: Array = [];

  @VeriUnInt32(true)
  unnumArray: Array = [];

  @VeriUnInt64(true)
  unnum64Array: Array = [];

  @VeriStruct(objEntry)
  obj: objEntry = new objEntry();

  @VeriStruct(objEntry,true)
  objArray: Array = [];
}

export default testEntry;




