(() => {
  const form = document.getElementById("nwb-contact-form");
  const popup = document.getElementById("nwb-success");

  if (!form || !popup) return;

  // Evita que nombre y mensaje acepten únicamente espacios.
  const textFields = [
    form.elements.namedItem("nombre"),
    form.elements.namedItem("mensaje")
  ];

  for (const field of textFields) {
    field.addEventListener("input", () => {
      field.setCustomValidity(
        field.value.trim() ? "" : "Completá este campo."
      );
    });
  }

  form.addEventListener("submit", (event) => {
    event.preventDefault();

    for (const field of textFields) {
      field.setCustomValidity(
        field.value.trim() ? "" : "Completá este campo."
      );
    }

    if (!form.reportValidity()) return;

    // Simulación visual. Conectar el envío real antes de publicar.
    form.reset();
    popup.showModal();
  });
})();