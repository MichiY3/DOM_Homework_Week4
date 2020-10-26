// このファイルに解答を書いてください。
// 問題文はindex.htmlにあります。
function answer(){

// Q 1　以下のテキストの文字を取得して、console.logで出力する
let text = document.getElementById('q1-text');
console.log(text);
// Id の時は、getElement ←単数！！　


// Q 2　以下の文字を任意の文字に変更する  →→→→→→textContent
let text2 = document.getElementById('q2-text');
console.log(text2);
text2.textContent = "変更しました";


// Q 3 以下の文字色を変更する →→→→→→style.color
let text3 = document.getElementById('q3-text');
console.log(text3);
text3.style.color = '#00947a';


// Q 4 (難) 以下の文字の色をすべて変更してください ３段
// 「for of」を使います　↓
// 配列の繰り返し処理を、回数を意識せずに使える書き方
// 「配列限定」の繰り返し処理

 let text4 = document.getElementsByClassName('q4-text');
console.log(text4);
 for (let elements of text4){
elements.style.color = '#00947a';
}
// または
for (let i = 0; i =< text4.length; i++){
	if(i == 0){
		text4[i].style.color = 'red';
	}
	if(i == 1){
		text4[i].style.color ='#00947a';
	}
	if(i > 1){
		text4[i].style.color ='grey';
	}
}
// ここでのelementsは、繰り返している間に配列から一つずつ取り出した値を格納する変数


//  for (let text4 of 'q4-text');
// console.log(text4);
//  text4.style.color = '#ea5532';





// Q 5   style.backgroundColor



}
