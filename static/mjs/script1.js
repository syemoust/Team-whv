document.getElementById('contactForm').addEventListener('submit', function(e) {
    e.preventDefault();
    
    let nom = document.getElementById('nom').value;
    let email = document.getElementById('email').value;
    let message = document.getElementById('message').value;

    if (!nom || !email || !message) {
        alert("Veuillez remplir tous les champs.");
        return;
    }

    alert(`Merci ${nom}, votre message a bien été envoyé !`);
    
    document.getElementById('contactForm').reset();
});
