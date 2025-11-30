document.addEventListener("DOMContentLoaded", function () {
    document.querySelectorAll("nav a").forEach((anchor) => {
        anchor.addEventListener("click", function (e) {
            e.preventDefault();
            const targetId = this.getAttribute("href");
            if(targetId !== "#") {
                const targetElement = document.querySelector(targetId);
                if(targetElement) {
                    targetElement.scrollIntoView({behavior: "smooth", block: "start"});
                }
            }
        });
    });

    const yearElement = document.getElementById("current-year");
    if(yearElement) {
        yearElement.textContent = new Date().getFullYear();
    }

    document.querySelector('.alert-close').addEventListener('click', function() {
        document.getElementById('custom-alert').classList.remove('show');
    });
});

function showCustomAlert(message) {
    const alert = document.getElementById('custom-alert');
    const alertMessage = alert.querySelector('.alert-message');
    alertMessage.textContent = message;
    alert.classList.add('show');
    setTimeout(() => alert.classList.remove('show'), 4000);
}

function sendToGmail() {
    const name = document.getElementById("name").value.trim();
    const email = document.getElementById("email").value.trim();
    const subject = document.getElementById("subject").value.trim();
    const message = document.getElementById("message").value.trim();

    if (!name || !email || !subject || !message) {
        showCustomAlert("Please fill in all fields");
        return;
    }

    const body = `Name: ${name}\nEmail: ${email}\n\nMessage:\n${message}\n\nSent from Abdullah Al Arabi Portfolio`;
    const gmailUrl = `https://mail.google.com/mail/?view=cm&fs=1&to=abdullahalarabix@gmail.com&su=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;

    window.open(gmailUrl, "_blank");
    document.querySelector(".contact-form").reset();
    showCustomAlert("Gmail is opening with your message!");
}