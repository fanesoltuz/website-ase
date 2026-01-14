// SCHIMBA AICI cu adresa ta reala
const TO_EMAIL = "faneantsol@gmail.com";

document.getElementById("contactForm").addEventListener("submit", function(e){
  e.preventDefault();

  const nume = document.getElementById("nume").value.trim();
  const email = document.getElementById("email").value.trim();
  const subiect = document.getElementById("subiect").value.trim();
  const mesaj = document.getElementById("mesaj").value.trim();

  const subject = encodeURIComponent(`[Website] ${subiect}`);
  const body = encodeURIComponent(
    `Nume: ${nume}\n` +
    `Email: ${email}\n\n` +
    `Mesaj:\n${mesaj}`
  );

  window.location.href = `mailto:${TO_EMAIL}?subject=${subject}&body=${body}`;
});