<template>
  <div id="app">
    <router-view />
  </div>
</template>

<script setup>
// You can use this file for global logic or keep it empty.
</script>

<style>
body {
  background-color: #121212;
  color: #e0e0e0;
  font-family: "Poppins", sans-serif;
}

h3 {
  text-transform: uppercase;
  font-weight: 600;
  color: #ffffff;
  display: inline-block;
  padding-bottom: 5px;
}

.navbar .nav-link {
  color: #e0e0e0 !important;
  font-weight: 500;
  transition: color 0.3s ease-in-out;
}

.navbar .nav-link:hover {
  color: #459c58 !important;
}

/* Button Styles */
.btn-primary {
  background-color: #00c3ff;
  border: none;
  font-weight: 500;
}

.btn-primary:hover {
  background-color: #0099cc;
}

.menu > .nav-link {
  color: #126123;
}

.menu > .nav-link:hover {
  color: #459c58;
}

.menu > .nav-link.disabled {
  color: #8aa08f;
}

.popular {
  background: #1a1a1a;
  padding: 20px;
  margin: 30px;
  border-radius: 8px;
}

.categories {
  background: #1a1a1a;
  padding: 20px;
  margin: 30px;
  border-radius: 8px;
}

.crypto-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 20px;
  margin-top: 15px;
}

.crypto-box {
  background: #2a2a2a;
  padding: 15px;
  border-left: 5px solid #126123;
  border-radius: 5px;
  text-align: left;
  box-shadow: 2px 2px 10px rgba(29, 143, 25, 0.2);
  transition: transform 0.3s ease-in-out;
}

.crypto-box:hover {
  transform: translateY(-5px);
}

.crypto-info {
  margin-bottom: 20px;
}

.crypto-info {
  background: #1a1a1a;
  padding: 20px;
  margin: 30px;
  border-radius: 8px;
}

.crypto-info hr {
  border: 1px solid #fff;
}

.social-container {
  background: #1a1a1a;
  padding: 20px;
  margin: 30px;
  border-radius: 8px;
  color: #e0e0e0;
}

.social-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 20px;
  margin-top: 15px;
}

.social-box {
  background: #2a2a2a;
  padding: 15px;
  border-left: 5px solid #126123;
  border-radius: 5px;
  text-align: left;
  box-shadow: 2px 2px 10px rgba(29, 143, 25, 0.2);
  transition: transform 0.3s ease-in-out;
}

.social-box:hover {
  transform: translateY(-5px);
}



footer {
  background-color: #121212;
  color: #e0e0e0;
  padding: 20px 0;
  border-top: 2px solid #126123;
  margin-top: 40px;
}

.footer .footer-content {
  text-align: center;
}

.footer p {
  margin: 5px 0;
  font-size: 14px;
}

.footer-links {
  margin-top: 10px;
}

.footer-link {
  color: #00c3ff;
  text-decoration: none;
  font-weight: 500;
  margin: 0 10px;
  transition: color 0.3s ease;
}

.footer-link:hover {
  color: #459c58;
}

.footer-link:active {
  color: #126123;
}

</style>
