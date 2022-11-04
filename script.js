"use strict";

const btnMenu = document.querySelector(".btn-mobile-nav");

const header = document.querySelector(".main-header");
const hero = document.querySelector(".section-hero");

btnMenu.addEventListener("click", () => {
  header.classList.toggle("nav-open");
  // document.body.classList.toggle("nav-open");
});

// Smooth scrolling

const menuList = document.querySelector(".nav-list");

menuList.addEventListener("click", (e) => {
  e.preventDefault();
  const href = e.target.getAttribute("href");

  if (href && href !== "/") {
    document.querySelector(href).scrollIntoView({ behavior: "smooth" });
    if (header.classList.contains("nav-open"))
      header.classList.remove("nav-open");
  }
});

// Sticky header

const observer = new IntersectionObserver(
  function ([entry]) {
    if (!entry.isIntersecting) document.body.classList.add("sticky");
    else document.body.classList.remove("sticky");
  },
  { root: null, threshold: 0, rootMargin: "-80px" }
);

observer.observe(hero);
