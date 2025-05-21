document.querySelector('#name-input').addEventListener('input', function(event) {
    const name = event.target.value.trim();
    const output = document.querySelector('#name-output');

    console.log("Введене ім'я: ", name);
    

    if (name === '') {
        output.textContent = 'Anonymous';

    } else {
        output.textContent = name;
    }
})

