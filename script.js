// Dropdown js - mobile nav
let mobile_nav_dropdown = document.querySelector(".mobile-dropbtn");
mobile_nav_dropdown.addEventListener("click", toggle_nav.bind(null, ".mobile_dropdown_content"));
document.querySelector(".mobile_dropdown_content").style.display = "none";

function toggle_nav(x) {
  if (document.querySelector(x).style.display == "none") {
    document.querySelector(x).style.display = "flex";
  } else {
    document.querySelector(x).style.display = "none";
  }
}


// Change EC title to NECC on hover --> What is wrong with this?? Throws an error that messes up form js

// let title = document.getElementById("ECtitle");
// title.addEventListener("mouseover", mouseOver);
// title.addEventListener("mouseout", mouseOut);

function mouseOver() {
  title.innerHTML = "@ Northern Essex Community College";
}

function mouseOut() {
  title.innerHTML = "Early College / Dual Enrollment";
}

// Contact Form Submit
window.addEventListener("load", () => {
  const form = document.getElementById('contact-me-form');
  form.addEventListener("submit", (e) => {
    e.preventDefault();
    const data = new FormData(form);
    const action = e.target.action;
    fetch(action, {
      method: 'POST',
      body: data,
    })
      .then(() => {

        //change this to wipe previous form
        form.reset()
        alert("Form Sucessfully Submitted!");
      })
  });
});

