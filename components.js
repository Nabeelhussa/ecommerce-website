 // components.js

const headerHTML = `
<header class="top-header">
    <div class="container header-container">
        <a href="index.html" class="logo">
            <i class="fa-solid fa-bag-shopping" style="color: #0d6efd;"></i>
            <span style="color: #0d6efd;">Brand</span>
        </a>
        
        <div class="search-bar">
            <input type="text" placeholder="Search">
            <select>
                <option>All Categories</option>
                <option>Tech</option>
                <option>Cloth</option>
            </select>
            <button class="btn-primary" onclick="window.location.href='products.html'">Search</button>
        </div>

        <div class="user-actions">
            <div class="action-item"><i class="fa-regular fa-user"></i><p>Profile</p></div>
            <div class="action-item"><i class="fa-regular fa-message"></i><p>Message</p></div>
            <div class="action-item"><i class="fa-solid fa-box"></i><p>Orders</p></div>
            <div class="action-item">
                <a href="cart.html">
                    <i class="fa-solid fa-cart-shopping"></i>
                    <p>Cart</p>
                </a>
            </div>
        </div>
    </div>
</header>

<nav class="main-nav">
    <div class="container nav-container">
        <div class="nav-links">
            <a href="#"><i class="fa-solid fa-bars"></i> All category</a>
            <a href="#">Hot offers</a>
            <a href="#">Menu item</a>
            <a href="#">Help</a>
        </div>
        
        <div class="nav-dropdowns">
            <div class="dropdown">
                <button class="dropdown-btn" data-dropdown="lang-menu">
                    <i class="fa-solid fa-globe"></i> English - USD
                </button>
                <div id="lang-menu" class="dropdown-content">
                    <a href="#">English</a>
                    <a href="#">Spanish</a>
                    <a href="#">French</a>
                    <hr>
                    <a href="#">USD</a>
                    <a href="#">EUR</a>
                    <a href="#">PKR</a>
                </div>
            </div>

            <div class="dropdown">
                <button class="dropdown-btn" data-dropdown="ship-menu">
                    Ship to
                </button>
                <div id="ship-menu" class="dropdown-content">
                    <a href="#">Australia</a>
                    <a href="#">USA</a>
                    <a href="#">Pakistan</a>
                </div>
            </div>
        </div>
    </div>
</nav>
`;

const footerHTML = `
<footer class="site-footer">
    <div class="newsletter">
        <h4>Subscribe on our newsletter</h4>
        <p style="color:#888; margin-top:5px;">
            Get daily news on upcoming offers from many suppliers all over the world
        </p>
        <div class="newsletter-form">
            <input type="email" placeholder="Email">
            <button class="btn-primary hover-effect">Subscribe</button>
        </div>
    </div>

    <div class="container footer-links">
        <div class="brand-col">
            <div class="logo">
                <i class="fa-solid fa-bag-shopping" style="color: #0d6efd;"></i>
                <span style="color: #0d6efd;">Brand</span>
            </div>
            <p style="color:#888; font-size:14px; margin-top:10px;">
                Best information about the company goes here but now lorem ipsum is
            </p>
        </div>

        <div class="link-col">
            <h4>About</h4>
            <a href="#" class="hover-text">About us</a>
            <a href="#" class="hover-text">Find Store</a>
            <a href="#" class="hover-text">Categories</a>
            <a href="#" class="hover-text">Blogs</a>
        </div>

        <div class="link-col">
            <h4>Partnership</h4>
            <a href="#" class="hover-text">About us</a>
            <a href="#" class="hover-text">Find Store</a>
            <a href="#" class="hover-text">Categories</a>
            <a href="#" class="hover-text">Blogs</a>
        </div>

        <div class="link-col">
            <h4>Information</h4>
            <a href="#" class="hover-text">Help Center</a>
            <a href="#" class="hover-text">Money Refund</a>
            <a href="#" class="hover-text">Shipping</a>
            <a href="#" class="hover-text">Contact us</a>
        </div>

        <div class="link-col">
            <h4>For users</h4>
            <a href="#" class="hover-text">Login</a>
            <a href="#" class="hover-text">Register</a>
            <a href="#" class="hover-text">Settings</a>
            <a href="#" class="hover-text">My Orders</a>
        </div>

        <div class="app-col">
            <h4>Get App</h4>
            <button class="app-btn hover-effect">
                <i class="fa-brands fa-apple"></i> App Store
            </button>
            <button class="app-btn hover-effect">
                <i class="fa-brands fa-google-play"></i> Google Play
            </button>
        </div>
    </div>
</footer>
`;

// Inject HTML & Dropdown logic
document.addEventListener("DOMContentLoaded", () => {
    // Load header/footer
    const header = document.getElementById("header-placeholder");
    const footer = document.getElementById("footer-placeholder");

    if (header) header.innerHTML = headerHTML;
    if (footer) footer.innerHTML = footerHTML;

    // Dropdown logic
    const buttons = document.querySelectorAll(".dropdown-btn");
    const dropdowns = document.querySelectorAll(".dropdown-content");

    buttons.forEach(btn => {
        btn.addEventListener("click", (e) => {
            e.stopPropagation();
            const id = btn.dataset.dropdown;
            const target = document.getElementById(id);

            dropdowns.forEach(d => {
                if (d !== target) d.classList.remove("show");
            });

            if(target) target.classList.toggle("show");
        });
    });

    window.addEventListener("click", () => {
        dropdowns.forEach(d => d.classList.remove("show"));
    });
});