// // // Smooth scroll for navigation links
// // document.querySelectorAll('a[href^="#"]').forEach(anchor => {
// //     anchor.addEventListener('click', function (e) {
// //         e.preventDefault();
// //         document.querySelector(this.getAttribute('href')).scrollIntoView({
// //             behavior: 'smooth'
// //         });
// //     });
// // });

// // // Navbar scroll effect
// // window.addEventListener('scroll', function() {
// //     const navbar = document.querySelector('.navbar');
// //     if (window.scrollY > 50) {
// //         navbar.style.boxShadow = '0 2px 4px rgba(0,0,0,0.1)';
// //     } else {
// //         navbar.style.boxShadow = 'none';
// //     }
// // });

// // Sign up button click handler
// document.querySelector('.sign-up').addEventListener('click', function() {
//     alert('Sign up functionality would go here');
// });

// // Sign in button click handler
// document.querySelector('.sign-in').addEventListener('click', function() {
//     alert('Sign in functionality would go here');
// });

// // // Mobile menu functionality could be added here
// // function toggleMobileMenu() {
// //     const navLinks = document.querySelector('.nav-links');
// //     navLinks.classList.toggle('active');
// // }

document.querySelector('.sign-up').addEventListener('click', async function() {
    const name = prompt("Enter your name:");
    const email = prompt("Enter your email:");
    const password = prompt("Enter your password:");

    if (!name || !email || !password) {
        alert("All fields are required!");
        return;
    }

    try {
        const response = await fetch('http://localhost:5000/api/auth/register', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ name, email, password })
        });

        const data = await response.json();
        if (data.token) {
            localStorage.setItem('token', data.token);
            alert("Registration successful!");
        } else {
            alert(data.msg);
        }
    } catch (error) {
        console.error(error);
        alert("Something went wrong!");
    }
});

// Sign in functionality
document.querySelector('.sign-in').addEventListener('click', async function() {
    const email = prompt("Enter your email:");
    const password = prompt("Enter your password:");

    if (!email || !password) {
        alert("Both fields are required!");
        return;
    }

    try {
        const response = await fetch('http://localhost:5000/api/auth/login', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ email, password })
        });

        const data = await response.json();
        if (data.token) {
            localStorage.setItem('token', data.token);
            alert("Login successful!");
        } else {
            alert(data.msg);
        }
    } catch (error) {
        console.error(error);
        alert("Something went wrong!");
    }
});
