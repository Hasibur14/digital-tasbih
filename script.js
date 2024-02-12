const SubhanAllahDisplay = document.getElementById('Subhanallah-display');
const SubhanAllahIncrementBtn = document.getElementById('Subhanallah-increment-btn');
const SubhanAllahDecrementBtn = document.getElementById('Subhanallah-decrement-btn')

const alhamdulilahDisplay = document.getElementById('alhamdulilah-display');
const alhamdulilahIncrementBtn = document.getElementById('alhamdulilah-increment-btn');
const alhamdulilahDecrementBtn = document.getElementById('alhamdulilah-decrement-btn');

const allahuakberDisplay = document.getElementById('allahuakber-display');
const allahuakberIncrementBtn = document.getElementById('allahuakber-increment-btn');
const allahuakberDecrementBtn = document.getElementById('allahuakber-decrement-btn');

const resetButton = document.getElementById('reset-btn');

let subhanallahInitialValue = 0;
let alhamdulilahInitialValue = 0;
let allahuakberInitialValue = 0;

//SubhanAllah

SubhanAllahIncrementBtn.addEventListener('click', function () {
  if (subhanallahInitialValue === 33) {
    return alert('Subhan Allah fillup,plase try anather one')
  }
  subhanallahInitialValue += 1;
  SubhanAllahDisplay.innerText = subhanallahInitialValue;

});

SubhanAllahDecrementBtn.addEventListener("click", function () {
  if (subhanallahInitialValue === 0) {
    return alert('You can not added negative value')
  }
  subhanallahInitialValue -= 1;
  SubhanAllahDisplay.innerText = subhanallahInitialValue;
});


//Alhamduliah
alhamdulilahIncrementBtn.addEventListener('click', function () {
  if (alhamdulilahInitialValue === 33) {
    return alert('Allahuakber fillup,plase try anather one')
  }
  alhamdulilahInitialValue += 1;
  alhamdulilahDisplay.innerText = alhamdulilahInitialValue;

});
alhamdulilahDecrementBtn.addEventListener('click', function () {
  if (alhamdulilahInitialValue === 0) {
    return alert('You can not added negative value');
  }
  alhamdulilahInitialValue -= 1;
  alhamdulilahDisplay.innerText = alhamdulilahInitialValue;

});





//allahuakber
allahuakberIncrementBtn.addEventListener('click', function () {
  if (allahuakberInitialValue === 33) {
    return alert('Allahuakber fillup,plase try anather one')
  }
  allahuakberInitialValue += 1;
  allahuakberDisplay.innerText = allahuakberInitialValue;

});

allahuakberDecrementBtn.addEventListener("click", function () {
  if (allahuakberInitialValue === 0) {
    return alert('You can not added negative value')
  }
  allahuakberInitialValue -= 1;
  allahuakberDisplay.innerText = allahuakberInitialValue;
});



//Reset button

resetButton.addEventListener('click', function () {
  
  SubhanAllahDisplay.innerText = 0;
  alhamdulilahDisplay.innerText = 0;
  allahuakberDisplay.innerText = 0;

  subhanallahInitialValue = 0;
  alhamdulilahInitialValue = 0;
  allahuakberInitialValue = 0;
});







