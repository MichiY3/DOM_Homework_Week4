// このファイルに解答を書いてください。
// 問題文はindex.htmlにあります。


// Q 1


// Q 2


// Q 3


// Q 4 (難)
// 「for of」を使います。

// Q 5


// Q 6


// Q 8


// Q 9


// Q 10


// Q 11　Checkボタンがクリックされた時、入力された名前と年齢をpタグに表示してください。
// ただし、年齢が20未満の場合には、「20歳未満の方の利用は禁止です。」、
// 名前が空欄の場合には、「名前が空欄です」と 赤文字で 表示してください。

// let btn11 = document.querySelector('.q11-btn');
// btn11.addEventListener('click',function(){
// var input11_1 = document.querySelector('#q11-input-name');

// var result11_1 = document.querySelector('#q11-result-name');
// if(input11_1.value = null){
// 		result11_1.textContent = '名前が空欄です';
// 		result11_1.textContent.style.color = 'red';
// 	}
// 	else{
// 		result11_1.textContent = result11_1.value;
// 		}
// 	console.log(input11_1.value);
// });
// btn11.addEventListener('click',function(){
// var input11_2 = document.querySelector('#q11-input-age');
// var result11_2 = document.querySelector('#q11-result-age');
// 	if(input11_2.value < 20){
// 		result11_2.textContent = '20歳未満の方の利用は禁止です。';
// 	}
// 	 else {
// 		result11_2.textContent = result11_2.value;
// 	}
// 	});
	
	// console.log(result11_2.value)
	// if(input11_1.value =''){
	// 	result11_1.textContent = '名前が空欄です'
	// }
	// else{
	// 	result10.textContent = result10.value;
	// }
// --------------------- A N S W E R RRRRRR   ------------------------------

let button11 = document.querySelector('.q11-btn');
button11.addEventListener('click',function(){

var input11_age = document.querySelector('#q11-input-age');
let result11_age = document.querySelector('#q11-result-age');
	if(input11_age.value < 20){
		result11_age.textContent = '20歳未満の方の利用は禁止です。';
	}
	else{
		result11_age.textContent = input11_age.value;
	}
var input11_name= document.querySelector('#q11-input-name');
let result11_name = document.querySelector('#q11-result-name');
	if(input11_name.value ==''){
		result11_name.textContent = '名前が空欄です';
		result11_name.style.color = 'orange';
	}
	else{
		result11_name.textContent = input11_name.value;
		result11_name.style.color = '';
	}

});



// Q 12　ボタンがクリックされたときに、
// 押されたボタンと同じテキストを持つ、pタグを作成して画面に表示する
function q12_btn_click(){
let parent_text = document.querySelector('.q12-result');
let child_p=document.createElement('p');

child_p.textContent = document.querySelector('.q12-btn').textContent;

// child_p.id= 'add_id';
parent_text.appendChild(child_p);
console.log(child_p)
};

// または



// Q 13　　「追加」をクリックしたときに「リンゴ」をリストの先頭に追加してください
// 飛ばしていいです。
function q13_btn_click(){
let parent_text = document.querySelector('#q13-box');
let child_fruit = document.createElement('li');
child_fruit.textContent ='リンゴ';
// 次にメロンを指定　→ firstElementChild
let melon = parent_text.firstElementChild;
console.log(melon);
parent_text.insertBefore(child_fruit,melon);
};




// Q 14　　削除ボタンがクリックされたときに、「ニワトリ」をリストから削除してください

function q14_btn_click(){
	let niwatori  = document.querySelector('#chicken');
	niwatori.remove();
};





// Q 15 (難)
// switchまたはifを使います。
// 要素.href = 'https://google.com';
// でリンク先を追加できます。

// 以下のボタンがクリックされたとき、
// それぞれのテキストに合うリンクを作成する。
// Google: https://google.com
// Youtube: https://youtube.com
// Amazon: https://amazon.com

// 例 Googleの場合
// '<a href="https://google.com">google<a>'

let parent_text = document.querySelector('.q15-btn');
let child_a=document.createElement('a');
	if(function q15_google_btn_click()){
		child_a.href= "https://google.com";
	}
	else if(function q15_YouTube_btn_click()){
		child_a.href = 'https://youtube.com';
	}
	else if(function q15_Amazon_btn_click()){
		child_a.href = 'https://amazon.com';
	}
parent_text.appendChild(child_a);







