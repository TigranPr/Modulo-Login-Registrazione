// Seleziona il modulo di registrazione tramite l'ID
const RegForm = document.getElementById('registrationForm');

// Seleziona i campi del modulo per nome utente, email e password tramite i rispettivi ID
const NomeUtente = document.getElementById('utente');
const CognomeUtente = document.getElementById('cognome');
const Email = document.getElementById('email');
const Password = document.getElementById('password');

// Seleziona gli span che mostreranno gli errori, uno per ciascun campo
const Sp1 = document.querySelector('.sp1'); // Span per nome utente
const Sp2 = document.querySelector('.sp2'); // Span per cognome
const Sp3 = document.querySelector('.sp3'); // Span per email
const Sp4 = document.querySelector('.sp4'); // Span per password

// Seleziona il pulsante di registrazione tramite l'ID
const RegButton = document.getElementById('registrationButton');

// Aggiunge un event listener al modulo di registrazione per intercettare l'invio del form
RegForm.addEventListener('submit', (e) => {
    // Previene l'invio predefinito del form
    e.preventDefault();

    // Aggiunge la classe 'e' (stato predefinito) ai campi nome utente, email e password
    NomeUtente.classList.add('e');
    CognomeUtente.classList.add('e');
    Email.classList.add('e');
    Password.classList.add('e');

    // Rimuove la classe 'errore' da tutti i campi
    NomeUtente.classList.remove('errore');
    CognomeUtente.classList.remove('errore');
    Email.classList.remove('errore');
    Password.classList.remove('errore');

    // Inizializza la variabile di controllo degli errori
    let error = false;

    // Controlla se i campi nome utente, email o password sono vuoti
    if (NomeUtente.value === '' || CognomeUtente.value === '' || Email.value === '' || Password.value === '') {
        // Imposta l'errore a true e aggiunge la classe 'errore' ai campi vuoti
        error = true;
        NomeUtente.classList.add('errore');
        NomeUtente.classList.remove('e');
        Sp1.innerHTML = 'Inserisci nome utente (area obbligatoria)';
        Sp1.style.color = 'red';

        CognomeUtente.classList.add('errore');
        CognomeUtente.classList.remove('e');
        Sp2.innerHTML = 'Inserisci cognome utente (area obbligatoria)';
        Sp2.style.color = 'red';

        Email.classList.add('errore');
        Email.classList.remove('e');
        Sp3.innerHTML = 'Inserisci email (area obbligatoria)';
        Sp3.style.color = 'red';

        Password.classList.add('errore');
        Password.classList.remove('e');
        Sp4.innerHTML = 'Inserisci password (area obbligatoria)';
        Sp4.style.color = 'red';
    } else {
        // Se tutti i campi sono compilati, rimuove i messaggi di errore
        error = false;
        Sp1.innerHTML = '';
        Sp1.style.color = '';
        Sp2.innerHTML = '';
        Sp2.style.color = '';
        Sp3.innerHTML = '';
        Sp3.style.color = '';
        Sp4.innerHTML = '';
        Sp4.style.color = '';
    }

    // Se non ci sono errori, mostra un alert e invia il form
    if (!error && NomeUtente.value !== '' && CognomeUtente.value !== '' && Email.value !== '' && Password.value !== '') {
        fetch("http://localhost:8025/mioUtente/register", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({
                nome: NomeUtente.value,
                cognome: CognomeUtente.value,
                email: Email.value,
                password: Password.value
            })
        })
        .then(response => {
            console.log("Status Code:", response.status);
            return response.text(); // Legge la risposta dal server
        })
        .then(data => {
            console.log("Risposta dal server:", data); // Debug
            alert(data);
            if (data.includes("Register riuscito")) {
                window.location.href = "dashboard.html";
            }
        })
        .catch(error => console.error("Errore nella richiesta:", error));
        
    }
});


// Aggiunge un event listener per il campo cognome quando perde il focus (blur)
CognomeUtente.addEventListener('blur', () => {
    // Controlla se il cognome é vuoto
    if (CognomeUtente.value === '') {
        error = true;
        CognomeUtente.classList.add('errore');
        CognomeUtente.classList.remove('e');
        Sp2.innerHTML = 'Inserisci cognome (area obbligatoria)';
        Sp2.style.color = 'red';
    } else {
        CognomeUtente.classList.remove('errore');
        CognomeUtente.classList.add('e');
        Sp2.innerHTML = '';
    }
});

// Aggiunge un event listener per il campo email quando perde il focus (blur)
Email.addEventListener('blur', () => {
    // Controlla se l'email è vuota
    if (Email.value === '') {
        error = true;
        Email.classList.add('errore');
        Email.classList.remove('e');
        Sp3.innerHTML = 'Inserisci email (area obbligatoria)';
        Sp3.style.color = 'red';
    } else {
        Email.classList.remove('errore');
        Email.classList.add('e');
        Sp3.innerHTML = '';
    }
});

// Aggiunge un event listener per il campo password quando perde il focus (blur)
Password.addEventListener('blur', () => {
    // Controlla se la password è vuota
    if (Password.value === '') {
        error = true;
        Password.classList.add('errore');
        Password.classList.remove('e');
        Sp4.innerHTML = 'Inserisci password (area obbligatoria)';
        Sp4.style.color = 'red';
    } else {
        Password.classList.remove('errore');
        Password.classList.add('e');
        Sp4.innerHTML = '';
    }
});

// Aggiunge un event listener per il campo nome utente quando perde il focus (blur)
NomeUtente.addEventListener('blur', () => {
    // Controlla se il nome utente è vuoto
    if (NomeUtente.value === '') {
        error = true;
        NomeUtente.classList.add('errore');
        NomeUtente.classList.remove('e');
        Sp1.innerHTML = 'Inserisci nome utente (area obbligatoria)';
        Sp1.style.color = 'red';
    } else {
        NomeUtente.classList.remove('errore');
        NomeUtente.classList.add('e');
        Sp1.innerHTML = '';
    }
});

// Aggiunge un event listener al campo password per verificare l'input durante la digitazione
Password.addEventListener('input', () => {
    // Definisce una regex per consentire solo lettere e numeri nella password
    const validazionePassword = /^[a-zA-Z0-9]*$/;
    
    // Se il valore del campo password non corrisponde alla regex, rimuove i caratteri non validi
    if (!validazionePassword.test(Password.value)) {
        Password.value = Password.value.replace(/[^a-zA-Z0-9]/g, '');  // Rimuove i caratteri non validi
        alert('Sono consentiti solo lettere e numeri.');  // Mostra un messaggio di avviso
    }
});
