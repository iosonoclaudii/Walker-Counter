var counter = 0;
var counterImg1 = "assets/img/walker1.jpg";
var counterImg2 = "assets/img/walker2.jpg";


function incrementCounter() {
  counter++;
  toggleCounterImg();
  updateCounterValue();
}

function decrementCounter() {
      counter--;
    toggleCounterImg();
    updateCounterValue();
  }

function resetCounter() {
  counter = 0;
  toggleCounterImg();
  updateCounterValue();
}

function toggleCounterImg() {
  var counterImg = document.getElementById("counter-img");
  if (counter % 2 == 0) {
    counterImg.src = counterImg1;
  } else {
    counterImg.src = counterImg2;
  }
}

function updateCounterValue() {
  var counterValue = document.getElementById("counter-value");
  counterValue.innerHTML = counter;
}


document.getElementById("increment-btn").addEventListener("click", incrementCounter);
document.getElementById("decrement-btn").addEventListener("click", decrementCounter);
document.getElementById("reset-btn").addEventListener("click", resetCounter);