// //ツイートボタン

// function twitText() {
// 	var s, url;
// 	s = "JSからツイートしているだよ！ %23SUNABACO";
// 	url = document.location.href;
	
// 	if (s != "") {
// 		if (s.length > 140) {
// 			//文字数制限
// 			alert("テキストが140字を超えています");
// 		} else {
// 			//投稿画面を開く
// 			url = "http://twitter.com/share?url=" + escape(url) + "&text=" + s;
// 			window.open(url,"_blank","width=600,height=300");
// 		}
// 	}
// }

// //ここまでツイートボタン



// console.log("JSからはろわー!!");

// //変数
// var username="まいまい";
// console.log(username);

// username="あさと";
// console.log(username);

// //フルーツジュースを作ろう！
// var fruit="スイカ";

// fruit="グレープフルーツ";

// console.log(fruit+"の皮をむいて");
// console.log(fruit+"をざく切りにして");
// console.log(fruit+"をホールスロージューサーにかけて");
// console.log(fruit+"ジュースのできあがり！");

// function fruitjuice(fruit,count){
//     console.log(fruit+count+"の皮をむいて");
//     console.log(fruit+count+"をざく切りにして");
//     console.log(fruit+count+"をホールスロージューサーにかけて");
//     console.log(fruit+count+"ジュースのできあがり！");
// }

// fruitjuice("キウイ",2);
// fruitjuice("バナナ",3);

// function total(a,b){
//     var ab=a+b;
//     return ab
// }

// console.log(total(5,7));



// //四則演算
// var x=2;
// var y=4;

// console.log(x+y);
// console.log(x-y);
// console.log(x*y);
// console.log(x/y);
// console.log(x%y);



// var count=2;
// console.log(count++);
// console.log(count);

// //文字列
// console.log("グレープ"+"フルーツ");

// console.log("grapegrape".split("a"));


// //配列
// var region=["koza","yatsushiro","fukuoka"];
// console.log(region);
// console.log(region[0]);
// region[2]="amakusa";
// console.log(region);

// //連想配列・・・なみなみかっこ{}でかこってね。
// //配列は数字で管理されている！
// //連想配列は、キー：値 で管理されている！
// var region={okinawa:"koza",hokkaido:"ebetsu",fukuoka:"tenjin"}
// console.log(region["fukuoka"]);


// var a=1;
// var b=2;

// console.log(a>=b);


// var menkyo=0;
// var money=1000;

// if (menkyo==1){
//     console.log("車の運転をしていいよ！");
// }else if(money>550){
//     console.log("バスで帰ってね！");
// }else{
//     console.log("歩いて帰ってね！");
// }



// var time=10;
// var getup=7;

// if(time<getup){
//     console.log("遅刻だよ！でも起きただけでもえらい！");
// }else if(time==getup){
//     console.log("ギリギリだけど出勤しただけでえらい！");
// }else{
//     console.log("がんばって起きて、しかも余裕で間に合ったの？えらい！");
// }

// console.log("グレフルジュース");

// for(var i=1;i<11;i++){
//     console.log("グレフルジュース"+i+"杯目");
// }

// // for(var i=100;i>=1;i--){
// //     console.log(i+"回目");
// // }


// // var text_h1=document.getElementById("text");
// // console.log(text_h1);
// // console.log(text_h1.textContent);

// // text_h1.textContent="コーヒーあと1杯飲みたい";

// var btn_node=document.getElementById("btn");
// btn_node.addEventListener("click",changeText);

// function changeText(){
//     var text_h1=document.getElementById("text");
//     text_h1.textContent="omezame coffee";
// }

// *********************************************************************

// ここからはjQueryの講義だよ！

$(function(){ //これはjQueryのお約束だよ！

    // $('#text').text('こっふぃー');

    $('#btn').on('click',function(){
        // $('header').css('color','red');
        // $('#gallery img').attr('src','/Users/mygn/Desktop/workspace/test/img/kristen-kaethler-BMc5ciRxh5o-unsplash.jpg');
        // $('a').attr('href','https://www.delftstack.com/ja/howto/javascript/simple-click-counter-using-javascript/');
        // $('header').toggle();
        // $('body').addClass('red');
        // $('body').removeClass('blue');
        $('body').toggleClass('blue');

    })

    $('h1').text('超こんにちは');


}) //これはjQueryのお約束だよ！