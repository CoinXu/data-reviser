import paramVeri from "@/index";
import Test1Entry from  './Test1Entry';

export class Test1ExtendEntry extends Test1Entry{
  @paramVeri.DecoInt32()
  @paramVeri.DecoRequire()
  numExtend = 1;

  @paramVeri.DecoInt32()
  numExtend1 = 1;
}
