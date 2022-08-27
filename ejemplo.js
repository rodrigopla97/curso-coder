let totalCompra = 0;
// let nombreCliente
let productoSeleccionado = parseInt(
  prompt(
    "Ingrese el numero del producto a cargar en el carrito: 1.Iphone - 2.TV - 3.Ipad - 4.Computadora:"
  )
);
let seguirComprando = true;
let decision;

while (seguirComprando === true) {
  if (productoSeleccionado === 1) {
    totalCompra = totalCompra + 700;
  } else if (productoSeleccionado === 2) {
    totalCompra = totalCompra + 400;
  } else if (productoSeleccionado === 3) {
    totalCompra = totalCompra + 250;
  } else if (productoSeleccionado === 4) {
    totalCompra = totalCompra + 1500;
  } else {
    let productoSeleccionado = parseInt(
      prompt(
        "Ingrese producto válido a cargar en el carrito: 1.Iphone - 2.TV - 3.Ipad - 4.Computadora:"
      )
    );
    continue;
  }

  let decision = parseInt(
    prompt("1.Seguir comprando - 2.Finalizar compra - 3.Cancelar compra")
  );
  if (decision === 1) {
    let productoSeleccionado = parseInt(
      prompt(
        "Ingrese el numero del producto a cargar en el carrito: 1.Iphone - 2.TV - 3.Ipad - 4.Computadora:"
      )
    );
  } else if (decision === 2) {
    seguirComprando = false;
  } else if (decision === 3) {
    alert("Que lastima! Te esperamos la proxima!");
    decision = false;
    totalCompra = 0;
    break;
  } else {
    alert("no ingresaste una opcion valida");
    continue;
  }
}
if (totalCompra != 0) {
  alert("El valor total sin descuento ni inpuestos es: " + totalCompra);
}
