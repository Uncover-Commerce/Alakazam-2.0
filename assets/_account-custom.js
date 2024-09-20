const navTabs = document.querySelectorAll(".alakazam-account-nav__tabs div");
const winTabs = document.querySelectorAll(".alakazam-account-tab");
const subtitile = document.querySelector(".customer-account-sub");
const navActive = document.querySelectorAll(".nav-active");

subtitile.innerHTML = "| " + navTabs[0].innerHTML;

for (let index = 0; index < navTabs.length; index++) {
  const tab = navTabs[index];

  tab.addEventListener("click", () => {
    console.log("Clicked tab:", tab.innerHTML); // Debugging

    winTabs.forEach((win) => {
      win.classList.remove("tab-show");
    });

    navTabs.forEach((nav) => {
      nav.classList.remove("nav-active");
    });

    tab.classList.add("nav-active");
    
    // Check if winTabs[index] exists before adding class
    if (winTabs[index]) {
      winTabs[index].classList.add("tab-show");
      console.log("Showing tab:", winTabs[index].innerHTML); // Debugging
    } else {
      console.error("No matching content tab for index:", index); // Debugging
    }

    let sub = tab.innerHTML;

    if (tab.innerHTML.includes("Wish List")) {
      sub = "Wish List";
    }
    if (tab.innerHTML.includes("Loyalty Points")) {
      sub = "Loyalty Points";
    }
    if (tab.innerHTML.includes("Redeem")) { // Add this line for "Redeem" tab
      sub = "Redeem";
    }
    subtitile.innerHTML = "| " + sub;
  });
}
