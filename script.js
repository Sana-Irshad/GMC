
// .......Burger Menu starts---

document.addEventListener('DOMContentLoaded', () => {
    const burger = document.querySelector('.burger');
    const navLinks = document.querySelector('.nav-links');

    burger.addEventListener('click', () => {
        navLinks.classList.toggle('nav-active');
        burger.classList.toggle('toggle');
    });

    document.querySelectorAll('.nav-links a, .nav-links button').forEach(link => {
        link.addEventListener('click', () => {
            navLinks.classList.remove('nav-active');
            burger.classList.remove('toggle');
        });
    });
});

document.addEventListener('click', (event) => {
    if (!navLinks.contains(event.target) && !burger.contains(event.target)) {
        navLinks.classList.remove('nav-active');
        burger.classList.remove('toggle');
    }
});

// .......Burger Menu ends---



function displayPara() {
    document.getElementById("hidden-para").style.display = "flex";
}


// .......Login Form starts---
document.addEventListener('DOMContentLoaded', function() {
    const loginBtn = document.getElementById('loginbtn');
    const loginContainer = document.getElementById('loginContainer');
    const closeBtn = document.getElementById('closeBtn');
    const loginForm = document.getElementById('loginForm');

    loginBtn.addEventListener('click', function() {
        loginContainer.style.display = 'flex';
    });

    closeBtn.addEventListener('click', function() {
        loginContainer.style.display = 'none';
    });

    loginForm.addEventListener('submit', function(event) {
        event.preventDefault();
        
        alert('Login Successful!'); // 
        loginContainer.style.display = 'none';
    });

    window.addEventListener('click', function(event) {
        if (event.target === loginContainer) {
            loginContainer.style.display = 'none';
        }
    });
});

// .......Login Form ends---


// .......Signup Form starts---

document.addEventListener('DOMContentLoaded', function() {
    const signupBtn = document.getElementById('signupbtn');
    const signupContainer = document.getElementById('signupContainer');
    const closeSignupBtn = document.getElementById('closeSignupBtn');
    const signupForm = document.getElementById('signupForm');

    signupBtn.addEventListener('click', function() {
        signupContainer.style.display = 'block';
    });

    closeSignupBtn.addEventListener('click', function() {
        signupContainer.style.display = 'none';
    });

    signupForm.addEventListener('submit', function(event) {
        event.preventDefault();
        alert('Signup Successful!');
        signupContainer.style.display = 'none';   
    });

    window.addEventListener('click', function(event) {
        if (event.target === signupContainer) {
            signupContainer.style.display = 'none';
        }
    });
});

// .......Signup Form ends---


// ---services read more----
document.addEventListener("DOMContentLoaded", () => {
    const buttons = document.querySelectorAll(".card-btn");

    buttons.forEach(button => {
        button.addEventListener("click", () => {
            const card = button.closest(".card");
            const details = card.querySelector(".hiddendetails");

            if (details.style.display === "none" || !details.style.display) {
                details.style.display = "block";
                button.textContent = "Read Less";
            } else {
                details.style.display = "none";
                button.textContent = "Read More";
            }
        });
    });
});
