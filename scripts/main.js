function userInfo() {
  fetch('https://randomuser.me/api/')
    .then(response => response.json()).then(data => {
      // The User Data From API 
      let theData = data,

        // Create The Card 
        theCard = document.createElement("div"),
        theImg = document.createElement("img"),
        div = document.createElement("div"),
        theName = document.createElement("p"),
        theNameTxt = document.createTextNode(`${theData.results[0].name.title}: ${theData.results[0].name.first} ${theData.results[0].name.last}`),
        theAge = document.createElement("p"),
        theAgeTxt = document.createTextNode(`Age: ${theData.results[0].registered.age}`),
        theEmail = document.createElement("p"),
        theEmailTxt = document.createTextNode(`Email: ${theData.results[0].email}`);

      theCard.className = 'card';
      theImg.src = theData.results[0].picture.large;
      theName.className = 'userName';

      theName.appendChild(theNameTxt)
      theAge.appendChild(theAgeTxt)
      theEmail.appendChild(theEmailTxt)

      div.appendChild(theName)
      div.appendChild(theAge)
      div.appendChild(theEmail)

      theCard.appendChild(theImg);
      theCard.appendChild(div);

      document.querySelector(".container").appendChild(theCard)
    })

};

// On Click On Show Button 
document.querySelector("input[type=submit]").addEventListener("click", () => {
  // Remove All Cards To Add The New Cards 
  document.querySelectorAll(".card").forEach(e => e.remove());

  let usersCount = document.querySelector("input[type=number]").value;

  if (usersCount >= 3)
    for (let i = 0; i < usersCount; i++)
      userInfo();
  else {
    // Create The Sweet Alert 
    let sweetAlertEle = document.createElement("p"),
      sweetAlert = document.createTextNode("You Can not Show Little Than 3 Users");

    // Sweet Alert Style 
    sweetAlertEle.style.cssText = `
      position: fixed;
      bottom: 30px;
      left: 50%;
      transform: translateX(-50%);
      background-color: var(--main-color);
      color: white;
      padding: 16px;
      border-radius: 20px;
      opacity: .9;
      transition: .5s;
      `;

    sweetAlertEle.appendChild(sweetAlert);

    document.body.appendChild(sweetAlertEle);

    // To Hide The Sweet With Opacity 
    setTimeout(() => sweetAlertEle.style.opacity = '0', 1500);

    // To Remove The Element Smoothly 
    setTimeout(() => sweetAlertEle.remove(), 2000);
  }

});

