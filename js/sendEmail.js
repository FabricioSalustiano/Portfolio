(function() {
  emailjs.init("G09hT4rKAEqoEwGJL"); 
})();

document.getElementById("contactForm").addEventListener("submit", function(event) {
  event.preventDefault();

  const form = event.target;

  if (!form.checkValidity()) {
    form.reportValidity();
    return;
  }

  const name = document.getElementById("name").value;
  const email = document.getElementById("email").value;
  const message = document.getElementById("message").value;

  emailjs.send("service_4d23aeq", "template_oxvpukh", {
    name: name,
    email: email,
    message: message,
    time: new Date().toLocaleString()
  })
  .then(() => {
    alert("Mensagem enviada com sucesso!");
    form.reset();
  })
  .catch((err) => {
    console.error("Erro ao enviar", err);
    alert("Erro ao enviar a mensagem.");
  });
});
