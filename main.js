const accardion = document.getElementsByClassName('contentbox');
const boxs = document.getElementsByClassName('boxs');
for (i =0; i <accardion.length; i++){
    accardion[i].addEventListener('click', function() {
        this.classList.toggle('active')
    })
}


for (x = 0; x <boxs.length; x++){
    boxs[x].addEventListener('click', function(){
        this.classList.toggle('active')
    })
}

