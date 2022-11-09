var firstName = prompt('Ismingizni kiriting:');
var lastName = prompt('Familiyangizni kiriting:');
var number = prompt('Nomeringizni kiriting:');
var email = prompt('Emailingizni kiriting:');
var address = prompt('Addressingizni kiriting');
var scholl = prompt('Nechinchi maktabda oqigansiz');
var schollNum = prompt('Maktabingizni nechinchi yillarda oqigansiz');
var Unversy = prompt('Qaysi OTM da tahsil olgansiz');
var unversyNum = prompt('OTM ni qaysi yillarda oqigansiz');
var work = prompt('Ayni vaqtda qayerda ishlaysiz');

main.innerHTML = `
<div class="image"><img src="" alt=""></div>
<div>
  <h1 class="firstName" id="firstName">${firstName}</h1>
  <h1 class="lastName" id="lastName">${lastName}</h1>
  <div class="item"> 
    <h3>Phone:</h3>
    <ins class="number" id="number">${number}</ins>
  </div>
  <div class="input">
    <div>
      <h3>Email:</h3>
      <p id="email">${email}</p>
    </div>
    <div>
      <h3>Addres:</h3>
      <p id="address">${address}</p>  
    </div>
  </div>

</div>
<div>
  
  <h3>Education</h3>
  <ins class="schollNum" id="schoolNum">${schoolNum}</ins>
  <p class="scholl" id="scholl"> ${scholl}</p> 
  <br>
  <ins class="unversyNum" id="unversyNum">${unversyNum}</ins>
  <p class="Unversy" id="Unversy">${Unversy}</p>
</div>
<div>
  <h3>Experience</h3>
  <p class="work" id="work">${work}</p> 
</div>

`

