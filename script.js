function scrollToContact() {
  const el = document.getElementById("contact");
  if (el) el.scrollIntoView({ behavior: "smooth" });
}

function sendFake(e) {
  e.preventDefault();
  alert("Thanks! We got your message. We'll reply from admin@edgyloops.com.");
  return false;
}

document.getElementById("year").textContent = new Date().getFullYear();
