const logOriginal = console.log;

console.log = function(...args) {
    logOriginal.apply(console, args);
    
    const $logsDiv = $('#logs');
    if ($logsDiv.length) {
        const $nuevoLog = $('<div>').addClass('terminal__log-item');
        let texto = args[0];
        
        if (typeof texto === 'string' && texto.startsWith('%c')) {
            texto = texto.replace('%c', '');
            $nuevoLog.css({
                color: '#00ff00',
                fontWeight: 'bold'
            });
            $nuevoLog.text(`> ${texto} ${args.slice(2).join(' ')}`);
        } else {
            $nuevoLog.text(`> ${args.join(' ')}`);
        }
        
        $logsDiv.append($nuevoLog);
        
        const $contenedor = $('#consola-pantalla');
        $contenedor.scrollTop($contenedor[0].scrollHeight);
    }
};

const retos = [
    { nombre: "Reto 1: Cajón de Frutas", archivo: "reto-1.js" },
    { nombre: "Reto 2: Filtrar Números", archivo: "reto-2.js" },
    { nombre: "Reto 3: Gastos y Promedio", archivo: "reto-3.js" },
    { nombre: "Reto 4: Ordenar Edades", archivo: "reto-4.js" },
    { nombre: "Reto 5: Lista de Alumnos", archivo: "reto-5.js" },
    { nombre: "Reto 6: Suma de Matriz", archivo: "reto-6.js" },
    { nombre: "Reto 7: Buscar la Estrella", archivo: "reto-7.js" },
    { nombre: "Reto 8: Rebote de Pelota", archivo: "reto-8.js" },
    { nombre: "Reto 9: Control de Acceso", archivo: "reto-9.js" },
    { nombre: "Liga Final", archivo: "liga-final.js" }
];

let indexActual = 0;

function ejecutarReto(index) {
    if (index < 0 || index >= retos.length) return;
    indexActual = index;
    
    $('#nombre-reto').text(retos[index].nombre);
    $('#nombre-reto-label').text(retos[index].nombre);
    $('#logs').empty();
    $('.dinamico').remove();
    
    const $script = $('<script>')
        .attr('type', 'module')
        .attr('src', `${retos[index].archivo}?t=${Date.now()}`)
        .addClass('dinamico');
        
    $('body').append($script);
}

function siguienteReto() {
    let proximoIndex = (indexActual + 1) % retos.length;
    ejecutarReto(proximoIndex);
}

$(document).ready(function() {
    $('.custom-select__trigger').on('click', function(e) {
        e.stopPropagation();
        $('.custom-select').toggleClass('custom-select--open');
    });

    $(document).on('click', function() {
        $('.custom-select').removeClass('custom-select--open');
    });

    $('.custom-select__option').on('click', function() {
        const valor = Number($(this).data('value'));
        ejecutarReto(valor);
    });

    $('#btn-siguiente').on('click', siguienteReto);
    $('#btn-reejecutar').on('click', function() {
        ejecutarReto(indexActual);
    });

    ejecutarReto(0);
});
