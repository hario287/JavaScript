// chapte1
// alert('Hello World');

// chapter2
let hello = 'Hello World';
alert(hello);

// 整数
let int1 = 1;
alert(int1);
// 負数
let int2 = -10;
alert(int2);
// 小数点
let float1 = 3.14;
alert(float1);
// 文字列
let str1 = 'JavaScriptを覚えよう';
alert(str1);

// 足し算
alert(4 + 3);
// 引き算
alert(8 - 5);
// 掛け算
alert(2 * 6);
// 割り算
alert(10 / 2);

// 文字列を結合
alert('Hello' + 'World');

let str2 = 'Hello';
let str3 = 'World!!';
alert(str2 + str3);

// 条件分岐
let orange = 100;
let apple = 120;

if(orange < apple){
  alert('みかんの値段がりんごより安い');
} else if(orange == apple){
  alert('みかんとりんごが同じ値段');
} else{
  alert('みかんの値段がりんごより高い');
}

// 繰り返し処理
// 引数の条件がtrueの間、波括弧内部の処理が繰り返される。
let max = 100;
let num = 1;
let count = 0;

while(num < max){
  num = num * 2;
  count = count + 1;
}

alert('2を掛け続けて' + max + 'を超えるのに必要だった回数は' + count + '回です');

// 決められた回数の処理を繰り返す
let i;
let number = 0;

for(i = 1; i < 11; i++){
  number = number + i;
}

alert('1から10まで足し算した結果は' + number + 'です');

