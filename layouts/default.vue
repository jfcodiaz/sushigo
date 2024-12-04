<template>
  <div class="page-container">
    <header>
      <div class="header-bg" :style="{ backgroundImage: `url(${bgHeader})`}">
      </div>
      <div class="menu">
        <div class="section-boxed">
          <div class="image-container">
            <img :src="logo" alt="SushiGo Romita" />
            <h1 class="visually-hidden">SushiGo</h1>
          </div>
          <nav>
            <ul>
              <!-- <li><NuxtLink to="/">Home</NuxtLink></li> -->
              <li><NuxtLink to="/menu">Menú</NuxtLink></li>
              <li style="display: none;"><NuxtLink to="/ubicacion">Ubicación <span class="hide-m-mobile">y horario</span></NuxtLink></li>
              <li class="hide-mobile">
                <a href="https://www.facebook.com/SushiGoRomita/"  title="Facebook" target="_blank">
                  <img :src="fbLogo" alt="Facebook" />
                </a>
              </li>
              <li class="hide-mobile">
                <a href="https://www.instagram.com/sushigo.romita/" title="Instragram" target="_blank">
                  <img :src="igLogo" alt="Instagram"/>
                </a>
              </li>
              <li class="hide-mobile"><a href="#" @click.prevent="whatsapp">
                  <img :src="whatsappLogo" alt="Whatsapp" />
              </a></li>
            </ul>
          </nav>
        </div>
      </div>
    </header>
    <main class="section-boxed">
      <NuxtPage />
    </main>
    <footer>
      <p>&copy; 2024 SushiGo</p>
    </footer>
  </div>
</template>
<script setup>
  import logo from '~/assets/sushigo-logo.png'
  import bgHeader from '~/assets/bg-header/bg1.jpg'
  import fbLogo from '~/assets/social/fb.svg'
  import igLogo from '~/assets/social/insta.svg'
  import whatsappLogo from '~/assets/social/whatsapp.svg'
  const whatsapp = () => {
    const n = 'KzUyNDMyMTE1MTQ0MQ';
    window.open('https://wa.me/'+ atob(n + "=="), '_blank')
  }
</script>
<style>
@import url('https://fonts.googleapis.com/css2?family=Agdasima:wght@400;700&family=Mulish:ital,wght@0,200..1000;1,200..1000&family=Noto+Sans:ital,wght@0,100..900;1,100..900&family=Poppins:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&family=Quicksand:wght@300..700&display=swap');

body {
  background-color: #2e2c55;
  color: #84817a;
  margin: 0;
  padding: 0;
  font-size: 16pt;
  font-family: 'Quicksand';
  height: 100%;
}
html {
  height: 100%;
}
.page-container {
  height: 100%;
}
.section-boxed {
  max-width: 1200px;
  margin: 0 auto;
}
.img-menu-page {
    width: 100%;
}
</style>
<style scoped lang="scss">
  
  .header-bg {
    background-size: cover;
    background-position: center;
    height: 35vh;
  }
  .page-container {
    margin: 0 auto;
    height: 100%;
    display: grid;
  }
  header {
    .menu {
      background-color: rgba(255, 255, 255, 1); 
      box-shadow: 0px 11px 20px 4px #2e2c55c2;
      position: fixed;
      width: 100%;
      top: 0;
      padding: 0.5rem 0;
      .section-boxed {
        display: flex;
        justify-content: flex-start;
        flex-direction: row;
        align-content: space-around;
        align-items: center;
      }
      z-index: 100;
    }
    nav {
      display: flex;
      justify-content:flex-end;
      flex-grow: 1;
      margin-right: 1.5em;
      ul {
        display: flex;
        list-style-type: none;
        padding: 0;
        margin: 0;
        align-items: center;

        li {
          margin-right: 1rem;
          a {
            text-decoration: none;
            color: #2e2c55;
            &:hover {
              text-decoration: underline;
            }
          }
        }
      }
    }
  }
  .image-container {
    width: 150px;
    height: 150px;
    background-color: #2e2c55;
    border-radius: 50%; 
    display: flex;
    justify-content: center;
    align-items: center;
    overflow: hidden;
    margin-left: 1.5em;
    flex-grow: 0;
  }

  .image-container img {
    width: 90%; 
    object-fit: cover;
  }

  .visually-hidden {
  position: absolute; 
  width: 1px;
  height: 1px;
  margin: -1px;
  clip: rect(0, 0, 0, 0);
  overflow: hidden;
  white-space: nowrap;
}

footer {
  background:  #2e2c55;
  color: #fe5252;
  position: fixed;
  bottom: 0;
  width: 100%;
  text-align: center;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.9);
  p {
    padding: 0;
    margin: 0.5em;
    font-size: 0.7em;
  }
}
main {
  background: white;
  width: 80%;
  display: block;
  padding: 1.5rem;
  border-radius: 0 0 0.5rem 0.5rem;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.9);
  padding-top: 0px;
}

@media (max-width: 810px) {
    nav {
      margin-right: 0em !important;
      font-size: 0.9em;
    }
    .image-container {
     
      width: 90px;
      height: 90px;
      margin-left: 0.7em;
     
    }
    .hide-mobile {
      /* display: none; */
    }
  }
@media (max-width: 540px) {
  .hide-m-mobile {
    display: none;
  }
}
</style>