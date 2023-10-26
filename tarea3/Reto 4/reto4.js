let seleccionar = document.querySelector('select');
seleccionar.addEventListener('change', elegirPais);

function elegirPais(e) {
    let eleccion = seleccionar.value;
    if (eleccion === '0') {
        imgPais.innerHTML = '';
        descPais.innerHTML = '';
    } else if (eleccion === '1') {
        imgPais.innerHTML = `<img src="./italia.avif" alt="Italia" class="img-fluid rounded img-country">`;
        descPais.innerHTML = `<p>
                Ubicado en Europa mediterránea, Italia es uno de los países europeos de gran importancia turística tanto por su gran cantidad de historia como por su peculiar tradición y gastronomía, convirtiéndolo en uno de los lugares más populares para hacer turismo.
            </p>`
    } else if (eleccion === '2') {
        imgPais.innerHTML = `<img src="./noruega.avif" alt="Noruega" class="img-fluid rounded img-country">`;
        descPais.innerHTML = `<p>
                Noruega es un país del norte de Europa, tiene por capital a la ciudad de Oslo. En este país, la Corriente del Golfo de México provoca que el clima sea más suave de lo que sería normal. Durante los largos meses de invierno, el aire es frío pero seco lo que lo hace más agradable y tónico, que en muchas otras regiones del mundo. Además, es frecuente que el cielo permanezca despejado.
            </p>`
    } else if (eleccion === '3') {
        imgPais.innerHTML = `<img src="./francia.avif" alt="Francia" class="img-fluid rounded img-country">`;
        descPais.innerHTML = `<p>
            Francia es un país de Europa que goza de gran popularidad como sitio turístico, en sus ciudades cuenta con grandes atracciones, siendo París uno de los lugares más visitados, además de ser su ciudad capital.
            </p>`
    } else if (eleccion === '4') {
        imgPais.innerHTML = `<img src="./austria.avif" alt="Austria" class="img-fluid rounded img-country">`;
        descPais.innerHTML = `<p>
            Austria (en alemán: Österreich, literalmente «el reino del este» o «Imperio del Este») es un país alpino sin salida al mar de habla alemana en Europa Central. Limita al oeste con Suiza y Liechtenstein, con Alemania y República Checa al norte, Eslovaquia y Hungría al este y Eslovenia e Italia por el sur.
            </p>`
    } else {
        imgPais.innerHTML = `<img src="./uk.avif" alt="United Kingdom" class="img-fluid rounded img-country">`;
        descPais.innerHTML = `<p>
            El Reino Unido de la Gran Bretaña e Irlanda del Norte, más conocido simplemente como Reino Unido, es un estado soberano que se comprende de Inglaterra, Escocia, Gales e Irlanda del Norte, se encuentra ocupando la isla de Gran Bretaña, en el noroeste de Europa.
            </p>`
    }
}

