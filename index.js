//print()  METODO PARA IMPRIMIR LA PANTALLA POR PDF

// Obtener el monto total de la cuenta
// Obtener el porcentaje de propina deseado
// Calcular la propina (monto total * porcentaje de propina)
// Calcular el total a pagar (monto total + propina)
// Mostrar el total a pagar al usuario
// NOTA: Podes añadir una interfaz simple para que el usuario pueda ingresar el monto y ver el resultado.

/** ============ CALCULADORA DE PROPINAS =============== */


function calcularCuenta(){
    const  cuenta = parseInt(document.getElementById('cuenta').value);
    const porcentajeProp = parseInt(document.getElementById('propina').value);
   
    
    // Verificar si las variables son válidas
    if (isNaN(cuenta) || isNaN(porcentajeProp)) {
        document.getElementById("resultado").innerText = "Por favor, ingrese números válidos.";
        /* resultado.innerText = "";
        totalpagar.innerText = ""; */
    } else {
        // Realizar el cálculo 
        const resultadoPropina = (cuenta * porcentajeProp) / 100
        const totalPago = (cuenta + resultadoPropina);

        // Mostrar el resultado en la página
        document.getElementById("resultado").innerText = "Propina:  $ " + resultadoPropina;
        document.getElementById("totalpagar").innerText = "Total a pagar: $ " + totalPago;   
        
       
    }
}
const miBoton = document.getElementById('miBoton');
 // se limpian los campos al hacer click
miBoton.addEventListener('click', () => {
    cuenta.value = "";
    propina.value = "";
})

