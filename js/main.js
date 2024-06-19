const ulNavbarHeader = document.querySelector(".navbar"); // ul for header
const toggleButton = document.querySelector(".toggle-button"); // button for close or show the menu
const bulletsSlider = document.querySelector(".bullets"); // ul for slider bullets
const sevicesData = document.querySelector(".services-data"); // Services Data Container
const playersDiv = document.querySelector(".players-data"); // Players Div For All Data
const footerUl = document.querySelector(".footer-detailes"); //The Footer Ul
const spanCopy = document.querySelector(".copy-span"); // Span CopyRights

// Start Header
const navbarLinks = [
  "homepage",
  "style demo",
  "full width",
  "dropdown",
  "link text",
];

for (let i = 0; i < navbarLinks.length; i++) {
  const liLink = document.createElement("li");
  const aLink = document.createElement("a");
  aLink.href = "#";
  aLink.appendChild(document.createTextNode(navbarLinks[i]));
  liLink.appendChild(aLink);
  ulNavbarHeader.appendChild(liLink);
}

toggleButton.onclick = () => {
  if (ulNavbarHeader.classList.contains("open")) {
    ulNavbarHeader.classList.remove("opacity-1");
    ulNavbarHeader.classList.add("opacity-0");
    setTimeout(() => {
      ulNavbarHeader.classList.remove("open");
    }, 300);
  } else {
    ulNavbarHeader.classList.add("open");
    setTimeout(() => {
      ulNavbarHeader.classList.remove("opacity-0");
      ulNavbarHeader.classList.add("opacity-1");
    }, 1);
  }
};
// End Header
//======================================================================

// Start Slider
const number = 5;
for (let i = 0; i < number; i++) {
  const liBullet = document.createElement("li");
  i === 0 && liBullet.classList.add("active");
  bulletsSlider.appendChild(liBullet);
}
// End Slider
//======================================================================

// Start Services
const boxs = [
  {
    icon: "fa-solid fa-house",
    h3: "Testing Title",
    p: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Aut nihil veritatis assumenda enim excepturi. Non velit tempora accusantium harum totam",
    a: "Read More ..",
  },
  {
    icon: "fa-solid fa-users",
    h3: "Testing Title",
    p: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Aut nihil veritatis assumenda enim excepturi. Non velit tempora accusantium harum totam",
    a: "Read More ..",
  },
  {
    icon: "fa-solid fa-gear",
    h3: "Testing Title",
    p: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Aut nihil veritatis assumenda enim excepturi. Non velit tempora accusantium harum totam",
    a: "Read More ..",
  },
];

for (let k = 0; k < boxs.length; k++) {
  const boxDiv = document.createElement("div");

  // Title
  const titleDiv = document.createElement("div");
  const i = document.createElement("i");
  i.className = boxs[k].icon;
  titleDiv.appendChild(i);
  const h3 = document.createElement("h3");
  h3.appendChild(document.createTextNode(boxs[k].h3));
  titleDiv.appendChild(h3);
  boxDiv.appendChild(titleDiv);

  // p
  const p = document.createElement("p");
  p.appendChild(document.createTextNode(boxs[k].p));
  boxDiv.appendChild(p);

  // a
  const a = document.createElement("a");
  a.href = "#";
  a.appendChild(document.createTextNode(boxs[k].a));
  boxDiv.appendChild(a);

  // Appending to main div
  sevicesData.appendChild(boxDiv);
}
// End Services
//======================================================================

// Start Players
const players = [
  {
    img: "http://placehold.it/300x200/DDD",
    name: "Ahmed Magdy",
    p: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Autnihil veritatis assumenda enim excepturi. Non velit temporaaccusantium harum totam",
    a: "Read More ..",
  },
  {
    img: "http://placehold.it/300x200/DDD",
    name: "Ahmed Magdy",
    p: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Autnihil veritatis assumenda enim excepturi. Non velit temporaaccusantium harum totam",
    a: "Read More ..",
  },
  {
    img: "http://placehold.it/300x200/DDD",
    name: "Ahmed Magdy",
    p: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Autnihil veritatis assumenda enim excepturi. Non velit temporaaccusantium harum totam",
    a: "Read More ..",
  },
  {
    img: "http://placehold.it/300x200/DDD",
    name: "Ahmed Magdy",
    p: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Autnihil veritatis assumenda enim excepturi. Non velit temporaaccusantium harum totam",
    a: "Read More ..",
  },
  {
    img: "http://placehold.it/300x200/DDD",
    name: "Ahmed Magdy",
    p: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Autnihil veritatis assumenda enim excepturi. Non velit temporaaccusantium harum totam",
    a: "Read More ..",
  },
];

for (let i = 0; i < players.length; i++) {
  const div = document.createElement("div");
  const img = document.createElement("img");
  img.src = players[i].img;
  img.alt = "player-img";
  div.appendChild(img);

  const title = document.createElement("h3");
  const span = document.createElement("span");
  span.appendChild(document.createTextNode("Name:"));
  title.appendChild(span);

  const spanName = document.createElement("span");
  spanName.className = "span-name";
  spanName.appendChild(document.createTextNode(players[i].name));
  title.appendChild(spanName);
  div.appendChild(title);

  const p = document.createElement("p");
  p.appendChild(document.createTextNode(players[i].p));
  div.appendChild(p);

  const a = document.createElement("a");
  a.href = "#";
  a.appendChild(document.createTextNode(players[i].a));
  div.appendChild(a);

  playersDiv.appendChild(div);
}
// End Players
//======================================================================

// Start Footer
const footerData = [
  "Company Name",
  "Steet Name & Number",
  "Town",
  "Postal Code",
  "Tel: 012012012012",
  "Fax: 012012012012",
  "Email:",
];

for (let i = 0; i < footerData.length; i++) {
  const li = document.createElement("li");
  if (footerData[i] === "Email:") {
    const span = document.createElement("span");
    li.appendChild(document.createTextNode(footerData[i]));
    span.appendChild(document.createTextNode("me@ahmed.com"));
    li.appendChild(span);
    footerUl.appendChild(li);
  } else {
    li.appendChild(document.createTextNode(footerData[i]));
    footerUl.appendChild(li);
  }
}

const date = new Date();
const year = date.getFullYear();

spanCopy.appendChild(document.createTextNode(year));
// End Footer
