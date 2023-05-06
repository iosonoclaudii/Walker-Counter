const walkerDiv = document.querySelector(".walker");

const counterDiv = document.createElement("div");
counterDiv.classList.add("counter-number");

const counterImg = document.createElement("img");
counterImg.src = "assets/img/walker1.jpg";
counterImg.alt = "Counter";
counterDiv.appendChild(counterImg);

const counterSpan = document.createElement("span");
counterSpan.classList.add("counterN");
counterSpan.textContent = "0";
counterDiv.appendChild(counterSpan);

const buttonDiv = document.createElement("div");
buttonDiv.classList.add("button");

const minusBtn = document.createElement("button");
minusBtn.classList.add("btn", "minus");
minusBtn.textContent = "-";
buttonDiv.appendChild(minusBtn);

const resetBtn = document.createElement("button");
resetBtn.classList.add("btn", "reset");
resetBtn.textContent = "Reset";
buttonDiv.appendChild(resetBtn);

const plusBtn = document.createElement("button");
plusBtn.classList.add("btn", "plus");
plusBtn.textContent = "+";
buttonDiv.appendChild(plusBtn);

walkerDiv.appendChild(counterDiv);
walkerDiv.appendChild(buttonDiv);

let currentImage = "assets/img/walker1.jpg";

minusBtn.addEventListener("click", function() {
  counterSpan.textContent--;
  toggleImage();
});

resetBtn.addEventListener("click", function() {
  counterSpan.textContent = "0";
});

plusBtn.addEventListener("click", function() {
  counterSpan.textContent++;
  toggleImage();
});

function toggleImage() {
  if (currentImage === "assets/img/walker1.jpg") {
    counterImg.src = "assets/img/walker2.jpg";
    currentImage = "assets/img/walker2.jpg";
  } else {
    counterImg.src = "assets/img/walker1.jpg";
    currentImage = "assets/img/walker1.jpg";
  }
}

