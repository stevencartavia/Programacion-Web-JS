window.onload = function() {
    document.getElementById('tipo').onchange = function(e) {
        a = e.target.value;
        if (a === 'Playa') {
            imagen = './imagenes/playa.avif'
        } else if (a === 'Montaña') {
            imagen = './imagenes/montana.avif'
        } else if (a === 'Ciudad') {
            imagen = './imagenes/ciudad.avif'
        }
        document.getElementById('imagen').src = imagen
    }
    document.getElementById('estadia').onchange = function(es) {
        n = es.target.value;
    }
}


function calcular() {
    if (document.getElementById('estadia').value === 'Seleccione un tipo de estadia') {
        swal.fire({
            icon: 'info',
            title: 'Atencion',
            html: '<p>Seleccione el tipo de estadia</p>'
        })
    } else {
        let tarifa = 0;
        if (document.getElementById('tipo').value === 'Seleccione un tipo de hotel') {
            swal.fire({
                icon: 'info',
                title: 'Atencion',
                html: '<p>Seleccione el tipo de hotel</p>'
            })
        } else {
            if (a === 'Playa') {
                if (n === 'Temporada alta') {
                    tarifa = 1000;
                    swal.fire({
                        imageUrl: './imagenes/playa.avif',
                        html: `<p>La cuota por dia para hotel de playa en temporada alta es de $${tarifa}</p>`
                    })
                } else {
                    if (n === 'Temporada baja') {
                        tarifa = 700;
                        swal.fire({
                            imageUrl: './imagenes/playa.avif',
                            html: `<p>La cuota por dia para hotel de playa en temporada baja es de $${tarifa}</p>`
                        })
                    }
                }
            } else if (a === 'Montaña') {
                if (n === 'Temporada alta') {
                    tarifa = 900;
                    swal.fire({
                        imageUrl: './imagenes/montana.avif',
                        html: `<p>La cuota por dia para hotel de montaña en temporada alta es de $${tarifa}</p>`
                    })
                } else {
                    if (n === 'Temporada baja') {
                        tarifa = 600;
                        swal.fire({
                            imageUrl: './imagenes/montana.avif',
                            html: `<p>La cuota por dia para hotel de montaña en temporada baja es de $${tarifa}</p>`
                        })
                    }
                }
            } else if (a === 'Ciudad') {
                if (n === 'Temporada alta') {
                    tarifa = 800;
                    swal.fire({
                        imageUrl: './imagenes/ciudad.avif',
                        html: `<p>La cuota por dia para hotel de ciudad en temporada alta es de $${tarifa}</p>`
                    })
                } else {
                    if (n === 'Temporada baja') {
                        tarifa = 400;
                        swal.fire({
                            imageUrl: './imagenes/ciudad.avif',
                            html: `<p>La cuota por dia para hotel de ciudad en temporada baja es de $${tarifa}</p>`
                        })
                    }
                }
            }
        }
    }
}