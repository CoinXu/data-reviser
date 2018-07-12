import VeriInt32 from "../script/VeriInt32";
import Validator from "../script/Validator";

class objEntry extends Validator{

  @VeriInt32()
  num1: number = 1;

  @VeriInt32()
  num2: number = 1;
}

export default objEntry
