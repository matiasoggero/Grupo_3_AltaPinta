window.addEventListener("load", function () {
    const form = document.getElementById('formDetail');
    const errorContainer = document.getElementById('error-container');

    form.addEventListener('submit', function (event) {
        event.preventDefault(); 

        errorContainer.innerHTML = ''; 
        
        const hamburgerType = document.querySelector('input[name="hamburgerType"]:checked');
        const breadType = document.querySelector('input[name="breadType"]:checked');
        const checkboxes = document.querySelectorAll('input[type="checkbox"]:checked');

        if (!hamburgerType) {
            displayError('-Por favor, selecciona un tipo de hamburguesa.');
            return;
        }

        if (!breadType) {
            displayError('-Por favor, selecciona un tipo de pan.');
            return;
        }

        if (checkboxes.length === 0) {
            displayError('-Por favor, selecciona al menos un aderezo.');
            return;
        }

        form.submit();
    });

    function displayError(message) {
        const errorItem = document.createElement('div');
        errorItem.classList.add('error-message');
        errorItem.textContent = message;
        errorContainer.appendChild(errorItem);
    }
});
