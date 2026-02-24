const params = new URLSearchParams(window.location.search);
const userName = (params.get("name") || "Guest").trim();
const helloEl = document.getElementById("hello");

if (helloEl) {
  helloEl.textContent = `Hello, ${userName}!`;
}
