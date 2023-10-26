function mostrarPago() {
    const pagos = document.querySelectorAll('input[name="r"]:checked');
    pagos.forEach(pago => {
        if (pago.value === 'pago1') {
            swal.fire({
                icon: 'info',
                text: 'El metodo de pago seleccionado es: Visa',
                imageUrl: './logos/visa.jpeg',
                imageHeight: 70
            })
        } else if (pago.value === 'pago2') {
            swal.fire({
                icon: 'info',
                text: `El metodo de pago seleccionado es: MasterCard`,
                imageUrl: './logos/mastercard.png',
                imageHeight: 70
            })
        } else if (pago.value === 'pago3') {
            swal.fire({
                icon: 'info',
                text: `El metodo de pago seleccionado es: American Express`,
                imageUrl: './logos/americanexpress.png',
                imageHeight: 70
            })
        } else {
            swal.fire({
                icon: 'info',
                text: `El metodo de pago seleccionado es: Paypal`,
                imageUrl: './logos/paypal.png',
                imageHeight: 70
            })
        }
    });
}