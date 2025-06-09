const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
        console.log(entry)
        if (entry.isIntersecting){
            entry.target.classList.add("show");
        }
    })
})

const textElements = document.querySelectorAll(".text");
textElements.forEach((el) => observer.observe(el));

const pubKey = "TK3wxxKCpJUa8Vgjb";
const serviceId = "service_ic0dr4j";
const templateId = "template_beerc5n"

emailjs.init({
  publicKey: pubKey,
});

document.addEventListener("DOMContentLoaded", () => {
  const form = document.getElementById("contact-form");
  if (form) {
    form.addEventListener("submit", function (e) {
      e.preventDefault();
      emailjs.sendForm(serviceId, templateId, this)
        .then(() => {
          alert('Message sent!');
          location.reload();
        })
        .catch(error => alert('Failed to send email ' + JSON.stringify(error)));
    });
  }
});
