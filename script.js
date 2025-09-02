const buttons = document.getElementsByClassName("heart-btn");

for (const btn of buttons) {
  btn.addEventListener("click", function () {
    const toatHeart = parseInt(
      document.getElementById("heart-count").innerText
    );
    // console.log(toatHeart);
    const totalHeartAmount = toatHeart + 1;

    document.getElementById("heart-count").innerText = totalHeartAmount;

    var icon = this.querySelector("i"); // << correct target (the <i> tag)
    if (!icon) return;

    // make it solid + red
    icon.classList.remove("fa-regular");
    icon.classList.add("fa-solid", "text-red-500");

    // after 500ms, revert back to outline (only a flash)
    setTimeout(function () {
      icon.classList.remove("fa-solid", "text-red-500");
      icon.classList.add("fa-regular");
    }, 200);
  });
}

//   var callButtons = document.getElementsByClassName("btn-call");
//   var names = document.getElementsByClassName("name");
//   var numbers = document.getElementsByClassName("number");

//   for (let i = 0; i < callButtons.length; i++) {
//     callButtons[i].onclick = function () {

//          const toatcoint = parseInt(
//       document.getElementById("coin-count").innerText
//     );
//     // console.log(toatHeart);
//     if(toatcoint < 20){
//         alert("Inefficient Blance 😊")
//         return ;
//     }
//     const totalCointAmount = toatcoint - 20;

//     document.getElementById("coin-count").innerText = totalCointAmount;

//       var serviceName = names[i].innerText;
//       var serviceNumber = numbers[i].innerText;

//       alert(`Calling: ${serviceName}
// Number: ${serviceNumber}`);

//     };
//   }

var callButtons = document.getElementsByClassName("btn-call");
var names = document.getElementsByClassName("name");
var numbers = document.getElementsByClassName("number");
var historyList = document.getElementById("historyList");
var clearBtn = document.getElementById("clearHistory");

for (let i = 0; i < callButtons.length; i++) {
  callButtons[i].onclick = function () {
    // কয়েন চেক
    const totalCoin = parseInt(document.getElementById("coin-count").innerText);
    if (totalCoin < 20) {
      alert("Insufficient Balance 😊");
      return;
    }
    const newAmount = totalCoin - 20;
    document.getElementById("coin-count").innerText = newAmount;

    // নাম ও নম্বর পড়া
    var serviceName = names[i].innerText;
    var serviceNumber = numbers[i].innerText;

    // Alert দেখানো
    alert(`Calling: ${serviceName}
Number: ${serviceNumber}`);

  // ---- Call History তে যোগ করা ----
var div = document.createElement("div");
div.className = "flex items-center justify-between p-3 bg-slate-50 rounded-lg";

// সময় বের করা
var time = new Date().toLocaleTimeString([], {
  hour: "2-digit",
  minute: "2-digit",
  second: "2-digit"
});

div.innerHTML = `
  <div>
    <p class="text-sm font-medium">${serviceName}</p>
    <p class="text-xs text-slate-500">${serviceNumber}</p>
  </div>
  <span class="text-xs text-slate-500">${time}</span>
`;

if (historyList.firstChild) {
  historyList.insertBefore(div, historyList.firstChild);
} else {
  historyList.appendChild(div);
}

  };
}

// Clear History বাটন
clearBtn.onclick = function () {
  historyList.innerHTML = "";
};
