import paramVeri from '../script/index';
import Test1Entry from  './Test1Entry';

export class Test1ExtendEntry extends Test1Entry{
  @paramVeri.DecoInt32()
  @paramVeri.DecoRequire()
  numExtend = 1;
}
