let radio = document.querySelectorAll("[type='radio']");
let userInputNum = document.querySelectorAll("[type='number']");
let cards = document.querySelectorAll(".cardholder__card");

function syncData() {
  let clickedCard = document.querySelector(".active");
  let counter = clickedCard.querySelector(".counter");
  let userInputNum = clickedCard.querySelector("[type='number']");
  let table = document.querySelector(".order__details");
  let tProductName = table.querySelector(".table_pro_name");
  let cProductname = clickedCard.querySelector(".card__name");
  let cardId = clickedCard.id;
  let totalCost = clickedCard.querySelector(".price");
  let tProCost = table.querySelectorAll(".table_pro_cost");

  counter.innerHTML = userInputNum.value;
  tProductName.innerHTML = cProductname.innerHTML;
  if (cardId === "offer1") {
    totalCost.innerHTML = `${610 * userInputNum.value} EGP`;
  } else {
    totalCost.innerHTML = `${550 * userInputNum.value} EGP`;
  }
  tProCost[0].innerHTML = totalCost.innerHTML;
  tProCost[1].innerHTML = totalCost.innerHTML;
}

window.onload = function reset() {
  radio[0].checked = "checked";
  let counter = document.querySelectorAll("[type='number']");
  for (let i = 0; i < counter.length; i++) {
    counter[i].value = 1;
    userInputNum[i].value = 1;
  }
};

for (let i = 0; i < radio.length; i++) {
  radio[i].addEventListener("click", function () {
    //add and remove class active
    for (let k = 0; k < cards.length; k++) {
      cards[k].classList.remove("active");
      radio[k].removeAttribute("checked");
    }
    radio[i].parentElement.classList.add("active");

    syncData(); // Synchronise Data which user set or choose
  });
}

for (let i = 0; i < userInputNum.length; i++) {
  userInputNum[i].addEventListener("change", function (e) {
    let check = e.target.parentElement.parentElement.parentElement;
    if (check.classList.contains("active")) {
      syncData();
    } else {
      console.log("error");
    }
  });
}
