// Seleziona il modulo di login tramite l'ID
const LogForm = document.getElementById('loginForm');

// Seleziona i campi email e password tramite i rispettivi ID
const Email = document.getElementById('email');
const Password = document.getElementById('password');

// Seleziona gli span che mostreranno gli errori, uno per l'email e uno per la password
const Sp1 = document.querySelector('.sp1'); // Span per il campo email
const Sp2 = document.querySelector('.sp2'); // Span per il campo password

// Seleziona il pulsante di login tramite l'ID
const LoginButton = document.getElementById('loginButton');

// Aggiunge un event listener sul form per l'evento 'submit'
LogForm.addEventListener('submit', (e) => {
    // Previene il comportamento predefinito di invio del form (per evitare il reload della pagina)
    e.preventDefault();
    
    // Aggiunge la classe 'e' per evidenziare l'input
    Email.classList.add('e');
    Password.classList.add('e');
    
    // Rimuove eventuali classi di errore precedenti dagli input
    Email.classList.remove('error');
    Password.classList.remove('error');
    
    // Flag per tenere traccia degli errori
    let error = false;

    // Verifica se i campi email e password sono vuoti
    if (Email.value === '' || Password.value === '') {
        error = true;  // Se è vuoto, imposta il flag di errore a true
        
        // Aggiunge la classe 'error' per evidenziare l'input email
        Email.classList.add('error');
        Email.classList.remove('e');
        Sp1.innerHTML = 'Inserisci email (area obbligatoria)';  // Mostra un messaggio di errore
        Sp1.style.color = 'red';  // Colore del testo dell'errore
        
        // Aggiunge la classe 'error' per evidenziare l'input password
        Password.classList.add('error');
        Password.classList.remove('e');
        Sp2.innerHTML = 'Inserisci password (area obbligatoria)';  // Mostra un messaggio di errore
        Sp2.style.color = 'red';  // Colore del testo dell'errore
    } else {
        // Se non ci sono errori, ripristina gli stati di input e messaggi
        error = false;  // Nessun errore, quindi imposta il flag a false
        
        // Rimuove la classe 'error' dall'input email e password
        Email.classList.remove('error');
        Password.classList.remove('error');
        
        // Aggiunge la classe 'e' agli input per confermare l'input valido
        Email.classList.add('e');
        Password.classList.add('e');
        
        // Cancella eventuali messaggi di errore
        Sp1.innerHTML = '';
        Sp2.innerHTML = '';
    }

    // Verifica se non ci sono errori e se entrambi i campi sono riempiti correttamente
    if (!error && Email.value !== '' && Password.value !== '') {
        alert('Login effettuato!');  // Mostra un messaggio di login effettuato
        LogForm.submit();  // Invia il form
    }
});

// Aggiunge un event listener per il campo email, che viene attivato quando l'utente perde il focus (blur)
Email.addEventListener('blur', () => {
    // Se il campo email è vuoto, mostra l'errore
    if (Email.value === '') {
        Email.classList.add('error');  // Aggiunge la classe 'error' per evidenziare l'input email
        Email.classList.remove('e');
        Sp1.innerHTML = 'Inserisci email (area obbligatoria)';  // Messaggio di errore
        Sp1.style.color = 'red';  // Colore del testo dell'errore
    } else {
        // Se il campo è compilato correttamente, rimuove l'errore
        Email.classList.remove('error');
        Email.classList.add('e');
        Sp1.innerHTML = '';  // Cancella il messaggio di errore
    }
});

// Aggiunge un event listener per il campo password, attivato quando l'utente perde il focus (blur)
Password.addEventListener('blur', () => {
    // Se il campo password è vuoto, mostra l'errore
    if (Password.value === '') {
        Password.classList.add('error');  // Aggiunge la classe 'error' per evidenziare l'input password
        Password.classList.remove('e');
        Sp2.innerHTML = 'Inserisci password (area obbligatoria)';  // Messaggio di errore
        Sp2.style.color = 'red';  // Colore del testo dell'errore
    } else {
        // Se il campo è compilato correttamente, rimuove l'errore
        Password.classList.remove('error');
        Password.classList.add('e');
        Sp2.innerHTML = '';  // Cancella il messaggio di errore
    }
});
// Aggiunge un event listener per l'input della password, che viene attivato ad ogni modifica del campo (input)
Password.addEventListener('input', () => {
    // Definisce una regex per consentire solo lettere e numeri nella password
    const validazionePassword = /^[a-zA-Z0-9]*$/;
    
    // Se il valore del campo password non corrisponde alla regex, rimuove i caratteri non validi
    if (!validazionePassword.test(Password.value)) {
        Password.value = Password.value.replace(/[^a-zA-Z0-9]/g, '');  // Rimuove i caratteri non validi
        alert('Sono consentiti solo lettere e numeri.');  // Mostra un messaggio di avviso
    }
});


