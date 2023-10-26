// Remember me 
const rmCheck = document.getElementById('rememberMe');
const emailInput = document.getElementById('in-txt-user');
const passwordInput = document.getElementById('in-txt-pass');

if (localStorage.checkbox && localStorage.checkbox !== "") {
    rmCheck.setAttribute("checked", "checked");
    emailInput.value = localStorage.username;
    passwordInput.value = localStorage.password
  } else {
    rmCheck.removeAttribute("checked");
    emailInput.value = "";
    passwordInput.value = "";
  }
  
  function isRememberMe() {
    if (rmCheck.checked && emailInput.value !== "") {
      localStorage.username = emailInput.value;
      localStorage.password = passwordInput.value;
      localStorage.checkbox = rmCheck.value;
    } else {
      localStorage.username = "";
      localStorage.password = "";
      localStorage.checkbox = "";
    }
  }

/*conexion con HTML usando el id btn-login y cargando la funcion llamada login*/
document.getElementById("btn-login").addEventListener("click", login);

/*funcion que valida el login*/
function validation_alert(ptext) {
    swal.fire({
        title: "Verificar la entrada de datos",
        text: ptext,
        confirmButtonText: "Intentar de nuevo",
        confirmButtonColor: "#008383",
        html: '<iframe src="https://lottie.host/?file=92995845-b117-4a4e-840d-44e51df43fd4/MRNIlGlSqF.json"></iframe> <br><p>' + ptext + " </p>",
    });
}

//funcion login
function login() {  
    let user_input = document.getElementById("in-txt-user").value;
    let pass_input = document.getElementById("in-txt-pass").value;
    let username = "cenfo";
    let password = "123";
    //identificadores de los campos username y password
    let input = [user_input, pass_input];
    let input_id = ["in-txt-user", "in-txt-pass"];
    let error_count = 0;
    let text = "";
    //ciclo for que hace un recorrido con la clase llamada error que permite poner la franja roja del error
    for (let i = 0; i < input.length; i++) {
        document.getElementById(input_id[i]).classList.remove("error");
        if (input[i] == "") {
            text = "Los campos requeridos NO pueden estar vacios.";
            validation_alert(text);
            document.getElementById(input_id[i]).classList.add("error");
            error_count++;
        } else {
            document.getElementById(input_id[i]).classList.remove('error')
        }
    }

    //validacion si los campos username y password son iguales
    if (error_count == 0) {
        if (user_input == username && pass_input == password) {
            Swal.fire({
                //icon: "success",
                title: "Credenciales correctas",
                showConfirmButton: false,
                //milisegundos equivalen a 5seg
                timer: 5000,
                html: '<iframe src="https://lottie.host/?file=792afbed-20cd-493d-9e17-4dbb7d8ec8f5/AGLRBqjdd0.json"></iframe> <br><br><p>Un momento!</p>',

            }).then(() => {
                window.location.href = "https://www.ucenfotec.ac.cr", "_blank";
            });
        } else {
            text = "Usuario o contraseña incorrecta.";
            //carga la funcion de arriba
            validation_alert(text);
        }
    }
}