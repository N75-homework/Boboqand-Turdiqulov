var grant = 'Siz tanlagan OTM ga grant kirdingiz';
var kantrakt = 'Siz tanlagan OTM ga kantraktga kirdingiz';
var noo = 'Siz tanlagan OTM ga oqishga tavsiya etilmadiz';
var erro = 'Siz notgri malumot kiritdingiz';
var firstName = prompt('Ismingizni kiriting');

var OTM = prompt('OTM lar dan birini tanlang: 1.TDIU 2.TDMI 3.MU');

var ball = prompt( firstName, 'balingizni kiriting:');

if (OTM == 1){
    if(ball >= 150){
        // console.log(grant);
        alert( grant);
    }
    else if( ball > 120){
        // console.log(kantrakt);
        alert(kantrakt);
    }
    else if(120 >= ball > 0){
        // console.log(no);
        alert( noo);
    }
    else{
        alert(erro);
    }
}else if(OTM == 2){
    if(ball >= 160){
        // console.log(grant);
        alert(grant);
    }
    else if(ball > 100){
        // console.log(kantrakt);
        alert(kantrakt);
    }
    else if(100 >= ball > 0){
        // console.log(no);
        alert( noo);
    }
    else{
        alert(erro);
    }
}else if(OTM == 3){
    if(ball >= 180){
        // console.log(grant);
        alert(grant);
    }
    else if( ball > 168){
        // console.log(kantrakt);
        alert(kantrakt);
    }
    else if(168 >= ball > 0){
        // console.log(no);
        alert( noo);
    }
    else{
        alert(erro);
    }
}else{
    alert(erro);
}

