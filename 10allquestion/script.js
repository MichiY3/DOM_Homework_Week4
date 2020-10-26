// このファイルに解答を書いてください。
// 問題文はindex.htmlにあります。


// Q 1　Hello Worldの文字を取得して、console.logで出力する
let text1 = document.getElementById('q1-text');
console.log(text1);



// Q 2　変更してください　を任意の文字に変更する
let text2 = document.getElementById('q2-text');
console.log(text2);
text2.textContent = '変更済み';



// Q 3　色を変えてください　の文字色を変更する
let text3 = document.getElementById('q3-text');
console.log(text3);
text3.style.color = '#d1de4c';


// Q 4 (難)　文字の色をすべて変更してください
// 「for of」を使います。
let text4 = document.querySelectorAll('.q4-text');
console.log(text4);
// text4.style.color = '#b0778c';
for (let elements of text4){
	elements.style.color = '#dc6b9a';
}


// Q 5　　背景色をすべて変更してください

let text5 = document.querySelectorAll('.q5-text');
console.log(text5);
for (let element2 of text5){
	element2.style.backgroundColor = '#bbdbf3';
}

// Q 6　以下のテキストがクリックされた時、クリックされた要素の文字の色を変更する
// Click Me!!!

var text = document.getElementById('q6-text');
text.addEventListener('click',function(){
	this.style.color = '#e5a323';
})


// Q 7　以下のテキストがマウスオーバーされた時、
// マウスオーバーされた要素の背景色と文字色を変更する
// Mouse Over Me!!!
var text = document.getElementById('q7-text');
text.addEventListener('mouseover',function(){
	this.style.color = '#d70035';
	this.style.backgroundColor = '#f6e5cc';
	// this.style.color.backgroundColor = '#d70035, #c82c55';
})


// Q 8
// 以下のテキストがマウスオーバーされた時、
// マウスオーバーされた要素の背景色を変更する。
// またマウスが外れた時、背景色を元に戻す
// Mouse Over Me!!!

var text = document.getElementById('q8-text');
text.addEventListener('mouseover',function(){
	this.style.backgroundColor ='#fac559';
});
text.addEventListener('mouseleave',function(){
	this.style.backgroundColor = '';
})

// Q 9　Checkボタンがクリックされた時、入力された名前をpタグに表示してください

var input = document.querySelector('#q9-input');
console.log(input.value);
function getInput(){
	var input = document.querySelector('#q9-input');
	console.log(input.value);
}

// Q 10
// Checkボタンがクリックされた時、
// 入力された年齢をpタグに表示してください
// ただし、年齢が20未満の場合には、
// 「20歳未満の方の利用は禁止です。」と表示してください。

var input = document.querySelector('#q10-input');
console.log(input.value);

function getInput(){
	var input =document.querySelector('#q10-input');
		if(input < 20){
			input.value = '20歳未満の方の利用は禁止です。';
		console.log(input.value);
	}
		
	}
	

