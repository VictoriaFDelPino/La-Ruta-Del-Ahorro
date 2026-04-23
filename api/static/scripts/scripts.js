//================================================
//Function to open the login modal
function abrirLogin() {
    document.getElementById("loginModal").style.display = "block";
    // This function selects the HTML element with the ID "loginModal" and sets its display style to "block", making it visible on the screen. This is typically used to show a modal dialog for user login.
}

//================================================
//Function to open the registration modal
function abrirRegistro() {
    document.getElementById("registroModal").style.display = "block";
    // This function selects the HTML element with the ID "registroModal" and sets its display style to "block", making it visible on the screen. This is typically used to show a modal dialog for user registration.
}

//================================================
//Function to close the registration modal
function cerrarModdal() {
    document.quearySelectorAll(".modal").forEach(function(modal) {
        modal.style.display = "none";
    });
    // This function selects all HTML elements with the class "modal" and sets their display style to "none", effectively hiding any open modals on the screen. The use of querySelectorAll allows it to target multiple modals if they exist.
}

//================================================
//Event listener to close modals when clicking outside of them
window.onclick = function(event) {
    // This event listener is attached to the window object and listens for click events. When a click occurs anywhere in the window, it checks if the clicked target has the class "modal". If it does, it means the user clicked outside of the modal content, and the function will set the display style of that target to "none", closing the modal.
    if (event.target.classList.contains("modal")) {
        event.target.style.display = "none";
        //If the user clicks anywhere outside of the modal content (i.e., on the modal background), this event listener will check if the clicked target has the class "modal". If it does, it will set the display style of that target to "none", closing the modal.
    }
}

//================================================
//Function to drive the login form submission
// This function is a placeholder for handling the login form submission. It prevents the default form submission behavior, which would typically involve sending the form data to a server and refreshing the page. Instead, it allows you to implement custom logic for processing the login credentials, such as validating the input or making an AJAX request to authenticate the user without reloading the page. 
//================================================
function manejarLogin(event) {
    event.preventDefault();
    // This line prevents the default form submission behavior, allowing you to handle the login process with custom logic instead of refreshing the page.
    // Here you can add your logic to validate the login credentials and authenticate the user.

    const email = document.getElementById("loginEmail").value;
    const password = document.getElementById("loginPassword").value;
    // These lines retrieve the values entered by the user in the login form fields for email and password. You can use these values to validate the credentials against your authentication logic.
    
    //Validate input (this is just a simple example, you should implement proper validation in a real application)
    if (email === '' || password === '') {
        alert("Porfavor completar todos los campos");
        return; // This condition checks if either the email or password fields are empty. If so, it displays an alert message prompting the user to complete all fields and then exits the function early using return, preventing further processing of the login attempt.
    }

    //Simulate successful login
    alert('¡Bienvenido! Has iniciado sesión con éxito.');
    cerrarModdal(); // This line simulates a successful login by displaying an alert message and then calling the cerrarModdal function to close the login modal. In a real application, you would replace this with actual authentication logic and handle the response accordingly.
}




//================================================
//Function to drive the registration form submission
// Similar to the manejarLogin function, this function is a placeholder for handling the registration form submission. It prevents the default form submission behavior and allows you to implement custom logic for processing the registration data, such as validating the input or making an AJAX request to create a new user account without reloading the page.
function manejarRegistro(event) {
    event.preventDefault();
    // This line prevents the default form submission behavior, allowing you to handle the registration process with custom logic instead of refreshing the page.
    // Here you can add your logic to validate the registration data and create a new user account.
    
    const nombre = document.getElementById("registroNombre").value;
    const email = document.getElementById("registroEmail").value;
    const password = document.getElementById("registroPassword").value;
    const confirmPassword = document.getElementById("registroConfirmPassword").value;

    if (nombre === '' || email === '' || password === '' || confirmPassword === '') {
        alert("Porfavor completar todos los campos");
        return; // This condition checks if any of the registration fields (name, email, password, confirm password) are empty. If so, it displays an alert message prompting the user to complete all fields and then exits the function early using return, preventing further processing of the registration attempt.
    }

    if (password !== confirmPassword) {
        alert("Las contraseñas no coinciden");
        return; // This condition checks if the password and confirm password fields do not match. If they don't match, it displays an alert message indicating that the passwords do not match and then exits the function early using return, preventing further processing of the registration attempt.
    }

    if (password.length < 6) {
        alert("La contraseña debe tener al menos 6 caracteres");
        return; // This condition checks if the password is less than 6 characters long. If it is, it displays an alert message indicating that the password must be at least 6 characters long and then exits the function early using return, preventing further processing of the registration attempt.
    }

    //Simulate successful registration
    alert('¡Registro exitoso! Ahora puedes iniciar sesión.');
    cerrarModdal(); // This line simulates a successful registration by displaying an alert message and then calling the cerrarModdal function to close the registration modal. In a real application, you would replace this with actual registration logic and handle the response accordingly.
}

//================================================
//PUT EVENT LISTENERS FOR CHARGER THE PAGE
// Conecting the forms with the functions
//================================================
document.addEventListener("DOMContentLoaded", function() {
    //search the form with the id "loginForm" and add an event listener for the "submit" event. When the form is submitted, it will call the manejarLogin function to handle the login process.
    const loginForm = document.getElementById("loginForm");
    if (loginForm) {
        loginForm.addEventListener("submit", manejarLogin);
        //When sendting the form, it will trigger the manejarLogin function, which will handle the login process as described in the function definition.
    }

    //search the form with the id "registroForm" and add an event listener for the "submit" event. When the form is submitted, it will call the manejarRegistro function to handle the registration process.
    const registroForm = document.getElementById("registroForm");
    if (registroForm) {
        registroForm.addEventListener("submit", manejarRegistro);
        //When sendting the form, it will trigger the manejarRegistro function, which will handle the registration process as described in the function definition.
    }

    const closeButtons = document.querySelectorAll(".close");
    closeButtons.forEach(function(btn) {
        btn.addEventListener("click", cerrarModdal);
        //This code selects all elements with the class "close" (which are typically the close buttons for the modals) and adds a click event listener to each of them. When any of these buttons are clicked, it will call the cerrarModdal function to close the corresponding modal.
    });

});