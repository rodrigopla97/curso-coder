let horasTrabajadas = prompt("Cuantas horas trabajaste esta semana?");
let profesion = prompt("Eres ingeniero, medico o programador?");
let horasExtras;
const horasJornada = 40;
let pago;

if (profesion === "ingeniero") {
  valorHora = 40;
} else if (profesion === "medico") {
  valorHora = 45;
} else if (profesion === "programador") {
  valorHora = 50;
} else {
  alert("No analizamos tu profesión");
}

if (
  horasTrabajadas > 40 &&
  horasTrabajadas <= 60 &&
  (profesion === "ingeniero" || profesion === "medico")
) {
  horasExtras = horasTrabajadas - horasJornada;
  pago = horasJornada * valorHora + horasExtras * (1.5 * valorHora);
} else if (
  horasTrabajadas > 60 &&
  (profesion === "ingeniero" || profesion === "medico")
) {
  horasExtras = horasTrabajadas - horasJornada;
  pago = horasJornada * valorHora + horasExtras * (2.5 * valorHora);
} else if (
  horasTrabajadas > 40 &&
  horasTrabajadas <= 60 &&
  profesion === "programador"
) {
  horasExtras = horasTrabajadas - horasJornada;
  pago = horasJornada * valorHora + horasExtras * (2 * valorHora);
} else if (horasTrabajadas > 60 && profesion === "programador") {
  horasExtras = horasTrabajadas - horasJornada;
  pago = horasJornada * valorHora + horasExtras * (3 * valorHora);
} else {
  pago = horasTrabajadas * valorHora;
}

//Pero es mas simple acá :

if (horasTrabajadas > 40 && horasTrabajadas <= 60) {
  horasExtras = horasTrabajadas - horasJornada;
  if (profesion === "ingeniero" || profesion === "medico") {
    pago = horasJornada * valorHora + horasExtras * (1.5 * valorHora);
  } else {
    pago = horasJornada * valorHora + horasExtras * (2 * valorHora);
  }
} else if (horasTrabajadas > 60) {
  horasExtras = horasTrabajadas - horasJornada;
  if (profesion === "ingeniero" || profesion === "medico") {
    pago = horasJornada * valorHora + horasExtras * (2.5 * valorHora);
  } else {
    pago = horasJornada * valorHora + horasExtras * (3 * valorHora);
  }
} else {
  pago = horasTrabajadas * valorHora;
}
