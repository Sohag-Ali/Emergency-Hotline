
// .......Heart Count Part..Extra work for Heart color red ans set stay time stamp.........
const buttons = document.getElementsByClassName("heart-btn");

for (const btn of buttons) {
  btn.addEventListener("click", function () {
    const toatHeart = parseInt(
      document.getElementById("heart-count").innerText
    );
    // console.log(toatHeart);
    const totalHeartAmount = toatHeart + 1;
    document.getElementById("heart-count").innerText = totalHeartAmount;

    // ...heart color part..

    var icon = this.querySelector("i"); 
    if (!icon) return;

    // make it solid + red
    icon.classList.remove("fa-regular");
    icon.classList.add("fa-solid", "text-red-500");

    // after 200ms
    setTimeout(function () {
      icon.classList.remove("fa-solid", "text-red-500");
      icon.classList.add("fa-regular");
    }, 200);
  });
}

// ....... history added part calling and coin reduce par call.........

const callButtons = document.getElementsByClassName("btn-call");
const names = document.getElementsByClassName("name");
const numbers = document.getElementsByClassName("number");
const historyList = document.getElementById("historyList");
const clearBtn = document.getElementById("clearHistory");

for (let i = 0; i < callButtons.length; i++) {
  callButtons[i].onclick = function () {
    // coint cheeck
    const totalCoin = parseInt(document.getElementById("coin-count").innerText);
    if (totalCoin < 20) {
      alert("Insufficient Balance 😊 💸🫰");
      return;
    }
    const newAmount = totalCoin - 20;
    document.getElementById("coin-count").innerText = newAmount;

    const serviceName = names[i].innerText;
    const serviceNumber = numbers[i].innerText;

    // Massage show.....
    alert(`📞Calling to the : ${serviceName}
    Number: ${serviceNumber}`);

  // ---- Call History Added----
const div = document.createElement("div");
div.className = "flex items-center justify-between p-3 bg-slate-50 rounded-lg";

// Time
const time = new Date().toLocaleTimeString([], {
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

  historyList.appendChild(div);

  };
}

// Clear History 
clearBtn.onclick = function () {
  historyList.innerHTML = "";
};

// .........copy count and copy massage, copy paste part.........

const copy = document.getElementsByClassName("btn-copy");
// const numbers = document.getElementsByClassName("number");

for (let i = 0; i < copy.length; i++) {
  copy[i].addEventListener("click", function () {
    //  Copy counter increment
    const toatCopy = parseInt(document.getElementById("copy-count").innerText);
    const totalCopyAmount = toatCopy + 1;
    document.getElementById("copy-count").innerText = totalCopyAmount;

    
    const serviceNumber = numbers[i].innerText;

    //  Clipboard- copy
    if (navigator.clipboard && navigator.clipboard.writeText) {
      navigator.clipboard.writeText(serviceNumber)
        .then(() => {
          alert("Sucessfully Copied: " + serviceNumber); 
        })
        .catch(err => {
          console.error("Clipboard copy failed", err);
        });
    } else {
      
      const ta = document.createElement("textarea");
      ta.value = serviceNumber;
      document.body.appendChild(ta);
      ta.select();
      document.execCommand("copy");
      document.body.removeChild(ta);
      alert("Sucessfully Copied: " + serviceNumber);
    }
  });
}



