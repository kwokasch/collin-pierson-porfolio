<template>
  <div class="wrapper">
    <div class="nav-content">
      <img alt="logo" class="logo" src="@/assets/logo.svg" width="100" height="100" />
      <nav>
        <RouterLink to="/ux-design" class="button ux-design-button">
          <h6>UX Design</h6>
        </RouterLink>
        <RouterLink to="/graphic-design" class="button graphic-design-button">
          <h6>Graphic Design</h6>
        </RouterLink>
        <RouterLink to="/about" class="button about-button">
          <h6>About</h6>
        </RouterLink>
        <RouterLink to="/contact" class="button contact-button">
          <h6>Contact</h6>
        </RouterLink>
      </nav>
      <div class="social-media-container">
        <a href="https://www.linkedin.com">
          <img alt="linkedin" class="social-media" src="@/assets/linkedin.svg" />
        </a>
        <a href="https://www.instagram.com">
          <img alt="instagram" class="social-media" src="@/assets/instagram.svg" />
        </a>
        <a href="https://www.coffee.com">
          <img alt="coffee" class="social-media" src="@/assets/coffee.svg" />
        </a>
      </div>
      <RouterView />
    </div>
  </div>
</template>

<script setup>
import { RouterLink, RouterView } from 'vue-router'

</script>

<style scoped>
  .wrapper {
    display: flex;
    background-image:url("@/assets/arch.svg");
    background-position:center;
    background-repeat: no-repeat;
    width: 100%;
    height: 100%;
    flex-wrap: wrap;
    justify-content: center;
    align-self: center;
    margin: 0%;
    padding: 0%;
    list-style-type: none;
  }

  .arch {
    filter: drop-shadow(-4px 4px 10px #72716E);
  }

  .nav-content {
    display: flex;
    width: auto;
    height: auto;
    flex-wrap: wrap;
    flex-direction: column;
    align-content: center;
    justify-content: space-evenly;
    list-style-type: none;
    padding-top: 10%;
    padding-bottom: 8%;
  }

  nav {
    display: flex;
    align-items: center;
    text-align: center;
    width: auto;
    flex-direction: column;
    /* justify-content: space-between;
    padding-top: 30%;
    padding-bottom: 30%; */
  }
  .logo {
    width: auto;
  }

  .button {
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    padding: 0px;
    width: 128px;
    height: 36px;
    border-radius: 30px;
  }
  .ux-design-button {
    background: #FFFFFF;
    border: 3px solid #CA9F8C;
  }
  .graphic-design-button {
    background: #FFFFFF;
    border: 3px solid #97A9B6;
  }
  .about-button {
    background: #FFFFFF;
    border: 3px solid #E8DEC1;
  }
  .contact-button {
    background: #FFFFFF;
    border: 3px solid #72716E;
  }

  h6 {
    font-family: 'Open Sans';
    font-style: normal;
    font-weight: 700;
    font-size: 12px;
    text-transform: uppercase;
    color: #000000;
  }

    .social-media {
    width: 45px;
    height: 45px;
    padding: 1%;
  }

  .social-media-container {
    display: flex;
    width: auto;
    justify-content: space-around;
  }
 
  /* nav a.router-link-exact-active {
    color: var(--color-text);
  }

  nav a.router-link-exact-active:hover {
    background-color: transparent;
  } */

  nav a {
    text-decoration: none;
    display: flex;
    text-align: center;
    padding: 0 1rem;
    display: flex;
    align-items: center;
    text-align: center;
  } 

</style>
