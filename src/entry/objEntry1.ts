import VeriInt32 from "../script/VeriInt32";
import Validator from "../script/Validator";
import VeriString from "../script/VeriString";

class objEntry1 extends Validator{

  @VeriInt32
  num1: number = 1;

  @VeriString
  num2: string = 1;
}

export default objEntry1
