// uy ishlari 1-dars TIP lar bo'limi

// ---- 1 ----

// var sm = prompt('uzunlikni santimetrda kiriting:');
// if(sm > 0){
//     var metr = 100;
//     var xisob = sm - sm % metr ;
//     var result = xisob /metr
//     alert('sizning uzunligingizda '+ result + 'ta metr bor');
// }else{
//     alert('notogri malumot kiritdingiz ');
// }


//  ---- 2 ----

// var kg = prompt('ogirlikni kg da kiriting:');
// if(kg > 0){
// var tonna = 1000;
// var xisob = kg - kg % tonna ;
// var result = xisob /tonna 
// alert('siz kiritgan ogirlikda '+ result + 'ta tonna bor');
// }else{
//     alert('notogri malumot kiritdingiz ');
// }


//  ---- 3 ----

// var a = prompt('katta kesmani uzunligini kiriting');
// var b = prompt('kichik kesma uzunligini kiriting');
// if(b > 0){
// var x = a - a % b;
// var result = x / b;
// alert('katta kesmani ichiga ' + result + ' ta kichik kesmadan joylash mumkun');
// }else{
//     alert('notogri malumot kiritdingiz ');
// }

//  ---- 4 ----

// var a = prompt('ikki xonali son kiriting');
// if(a > 0){
// var b = a % 10;
// var x = (a - b)/10;
// alert('ikki xonali sonning birlik xonasi raqami '+ b +' onliklar xonasidagi raqami '+ x );
// }else{
//     alert('notogri malumot kiritdingiz ');
// }

//  ---- 5 ----

// var a = prompt('ikki xonali son kiriting');
// var b = a % 10;
// var x = (a - b)/10;
// var result = x + b;
// alert('siz kiritgan ikki xonali sonning raqamlar yigindisi ' + result );


//  ---- 6 ----

// var a = prompt('ikki xonali son kiriting');
// var b = a % 10;
// var x = (a - b)/10;
// var result = x * b;
// alert('siz kiritgan ikki xonali sonning raqamlar kopaytmasi ' + result );


//  ---- 7 ----

// var a = prompt('uch xonalidan katta son kiriting:');
// if(a > 0){
// var xisob = a - a % 100;
// var result = xisob / 100;
// alert('siz kiritgan son ichida '+ result + 'ta yuz bor');
// }else{
//     alert('notogri malumot kiritdingiz ');
// }


//  ---- 8 ----

// var a = prompt('kun boshidan beri necha sekund utganini kiriting:');
// if(a > 0){
// var xisob = a - a % 60;
// var result = xisob / 60;
// var b = a - a % 3600;
// var x = b / 3600; 
// alert('kun boshidan sizda  '+ result + ' minut yoki ' + x +' soat utibdi');
// }else{
//     alert('notogri malumot kiritdingiz ');
// }

//  Mantiqiy amallar (if else)

//  ---- 1 ----

// var x = prompt('bitta son kiriting:')
// if(x > 0){
//     alert(x + ' soni musbat');
// }
// else if(x < 0){
//     alert(x + ' soni manfiy');
// }
// else if(x = 0){
//     alert(x + ' nolga teng');
// }else{
//     alert('notogri malumot kiritdingiz');
// }



//  ---- 2 3 ----

// var a = prompt('butun son kiriting');
// if(a % 2 == 0){
//     alert(a +' soni juft');
// }else if(a % 2 != 0){
//     alert(a + ' soni toq');
// }else{
//     alert('notogri malumot kiritdingiz');
// }


//  ---- 4 ----

// var a = prompt('1-butun sonni kiriting');
// var b = prompt('2-butun sonni kiriting');
// if( a > 0 && b > 0){
//     alert('function rost ' + a + ' ham '+ b + ' ham 0 dan katta');
// }else if(a > 0 && b < 0){
//     alert('function yolgon');
// }
// else if(a < 0 && b < 0){
//     alert('function yolgon');
// }
// else if(a < 0 && b > 0){
//     alert('function yolgon');
// }else{
//     alert('notogri malumot kiritdingiz');
// }


//  ---- 5 ----

// var a = prompt('1-butun sonni kiriting');
// var b = prompt('2-butun sonni kiriting');
// var c =prompt('3-butun sonni kiriting');
// if( a > b && b > c){
//     alert('function rost');
// }else {
//     alert('function yolgon');
// }


//  ---- 6 ----

// var a = prompt('1-butun sonni kiriting');
// var b = prompt('2-butun sonni kiriting');
// var c = prompt('3-butun sonni kiriting');
// if( a > b && b > c){
//     alert('function rost');
// }else if(a < b && b < c) {
//     alert('function rost');
// }else{
//     alert('function yolgon');
// }


//  ---- 7 ----

// var a = prompt('1-butun sonni kiriting');
// var b = prompt('2-butun sonni kiriting'); 
// if(a % 2 != 0 && b % 2 != 0){
//     alert('Function rost');
// }else{
//     alert('Function yolgon');
// }


//  ---- 8 ----

// var a = prompt('1-butun sonni kiriting');
// var b = prompt('2-butun sonni kiriting');
// var c = prompt('3-butun sonni kiriting');
// var d = prompt('4-butun sonni kiriting ');
// if( a > 0 && b > 0 && c > 0 && d > 0){
//     alert('function rost');
// }else{
//     alert('function yolgon');
// }


//  ---- 9 ----

// var a = prompt('1-butun sonni kiriting');
// var b = prompt('2-butun sonni kiriting');
// var c = prompt('3-butun sonni kiriting');
// if( a > 0 && b > 0 ){
//     alert('function rost');
// }else if(a > 0 && c > 0 ){
//     alert('function rost');
// }else if(b > 0 && c > 0 ){
//     alert('function rost');
// }else {
//     alert('function yolgon');
// }



//  ---- 10 ----

var x = prompt('hafta kunlarini raqamda tanlang');

if(x == 1){
    alert('Dushanba');
}else if(x == 2){
    alert('Seshanba');
}else if(x == 3){
    alert('Shorshanba');
}else if(x == 4){
    alert('Payshanba');
}else if(x == 5){
    alert('Juma');
}else if(x == 6){
    alert('Shanba');
}else if(x == 7){
    alert('Yakshanba');
}else{
    alert('siz notogri malumot kritdingiz');
}
