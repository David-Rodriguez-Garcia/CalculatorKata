Weird Error: 
Test n-54 ERROR  -- For input: //+_'H)c[//][///]
737.9968971872946///1023.7948207721224,802.7481724259906H435.9245044605324
713.2142280760398
839.0267657142831)724.3945109135436///595.3497955785805)1138.830118128268///1080.6433820110078'520.4140967990878)946.1669550325886,826.4061115716631'536.4245791656539'758.661064089682c346.35228736319954,456.8054970282567H385.3659880139232 -- Expected output: 9625.25145342032 -- Current output: 0

Explanation:
    In the column 36 we delete the first two, because it is assignable to //, but one is left, since it was meant to be a separator for [///] not [//]. Since there is no separator with only one '/', it stays and it will be detectes as if it is not a number, because it isn't.
    Therefore, we must check for not repeating multiple elements. But this would not improve the code. We shouldn't change the tests code, but the applications code! For this reason, we must alter the application code.

    How are we going to solve it? -> Ordering the separators list from bigger to smaller, that way, we take out as many characters as we can.
    I suspect, however, that it will still have bugs, as for example, for input: //[abc][//][abc/] 12475abc//2
    This will also give us error, but I believe that is the best case scenario for now. We could solve it with an algorithm, but for now we might leave it like this.