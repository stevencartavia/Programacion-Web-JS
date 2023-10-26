function cines() {
    let seleccion = document.getElementById('cines').value;

    switch (seleccion) {
        case 'A':
            Swal.fire({
                icon: 'success',
                title: 'Ciudad del Este',
                text: 'Un momento...',
                timer: 1000
            }).then(() => {
                window.location.href = './CineA/cineA.html'
            });
            return;
        case 'B':
            Swal.fire({
                icon: 'success',
                title: 'Multiplaza Curridabat',
                text: 'Un momento...',
                timer: 1000
            }).then(() => {
                window.location.href = './CineB/cineB.html'
            });
            return;
        case 'C':
            Swal.fire({
                icon: 'success',
                title: 'Multiplaza Escazu',
                text: 'Un momento...',
                timer: 1000
            }).then(() => {
                window.location.href = './CineC/cineC.html'
            });
            return;
    }
}