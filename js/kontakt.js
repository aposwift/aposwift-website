(function () {
  var form = document.getElementById("kontaktformular");
  if (!form) return;
  var status = document.getElementById("form-status");

  form.addEventListener("submit", function (event) {
    event.preventDefault();
    var name = (document.getElementById("name").value || "").trim();
    var email = (document.getElementById("email").value || "").trim();
    var message = (document.getElementById("nachricht").value || "").trim();
    var privacy = document.getElementById("privacy");

    if (!email || !message) {
      if (status) status.textContent = "Bitte E-Mail und Nachricht ausfüllen.";
      return;
    }
    if (privacy && !privacy.checked) {
      if (status) status.textContent = "Bitte die Datenschutzerklärung bestätigen.";
      return;
    }

    var body = [];
    if (name) body.push("Name: " + name);
    body.push("E-Mail: " + email);
    body.push("");
    body.push(message);

    var href =
      "mailto:Aposwift.de@gmail.com" +
      "?subject=" +
      encodeURIComponent("Nachricht über aposwift.de") +
      "&body=" +
      encodeURIComponent(body.join("\n"));

    if (status) {
      status.textContent =
        "Dein E-Mail-Programm sollte sich jetzt öffnen. Falls nicht, schreib uns bitte direkt an Aposwift.de@gmail.com.";
    }
    window.location.href = href;
  });
})();
