import { isLoggedIn } from "../utilities/browserFunctions.js"

const topnav = document.getElementById('topnav')

const renderTopNav = () => {
    return  `
    <div class="navbar-center">
        <div class="logo">
            <a title="home" href="index.html"><img src="images/Cast-Right-Vote.png" alt=""></a>
        </div>
        <div class="navbar-links">
            <a href="index.html" class="active-link">Home</a>
            <a href="about.html">About us</a>
            <a href="questions.html">FAQ</a>
            <a href="dashboard.html">Dashboard</a>
            <a href="form.html">Contact Us</a>
        </div>
        <div class="navbar-btns">
        ${
            isLoggedIn() ? 
            `<a href="dashboard.html">Dashboard</a>`:
            `
            <a href="form.html">Register</a>
            <a href="login.html">Log in</a>
            `
        }
        </div>
        <div class="toggle-menu">
            <i class="fa fa-bars"></i>
        </div>
    </div>
    `
}

// console.log(renderTopNav())
topnav.innerHTML = renderTopNav()