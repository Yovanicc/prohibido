document.getElementById('pesoForm').addEventListener('submit', function(event) {
    event.preventDefault(); // Evita que el formulario se envíe y la página se recargue
    
    const peso = document.getElementById('peso').value; // Obtiene el valor ingresado
    const resultado = document.getElementById('resultado');
    const imagen = document.getElementById('imagen'); // Div para la imagen

    if (peso > 100) {
        resultado.textContent = 'Prohibido gordas';
        // Mostrar una imagen si el peso es mayor a 100
        imagen.innerHTML = '<img src="img/prohibido.jpg" alt="Prohibido">';
    } else {
        resultado.textContent = `Tu peso es ${peso} Kg.`;
        imagen.innerHTML = ''; // Limpia la imagen si no se cumple la condición
    }
});
