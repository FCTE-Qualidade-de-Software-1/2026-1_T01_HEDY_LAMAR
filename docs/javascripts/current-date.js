function updateCurrentBrazilDate() {
  const dateElement = document.getElementById("current-date-br");

  if (!dateElement) {
    return;
  }

  dateElement.textContent = new Intl.DateTimeFormat("pt-BR", {
    day: "2-digit",
    month: "2-digit",
    year: "numeric",
    timeZone: "America/Sao_Paulo",
  }).format(new Date());
}

if (typeof document$ !== "undefined") {
  document$.subscribe(updateCurrentBrazilDate);
} else {
  document.addEventListener("DOMContentLoaded", updateCurrentBrazilDate);
}
