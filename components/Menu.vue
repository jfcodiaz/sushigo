<template>
    <div class="menu">
      <div class="grid-container">
        <h1 class="title">{{ data[slug][0] }}</h1>
        
        <!-- Menú lateral -->
        <ul class="menu-list">
          <li v-for="(value, key) in data" :key="key" :class="'option-' + key">
            <NuxtLink :to="`/menu/${key}`">{{ value[0] }}</NuxtLink>
          </li>
        </ul>
  
        <!-- Contenido -->
        <div class="menu-pages">
          <img
            v-for="img in data[slug][1]"
            :key="img"
            class="img-menu-page"
            :src="`/assets/menu/${img}.jpg`"
            alt="Portada"
          />
        </div>
      </div>
    </div>
  </template>
  
  <script setup>
  const data = {
    menu: ["Menú", [1]],
    rollos: ["Rollos", [3, 4, 5, 6]],
    onigiris: ["Onigiris", [7]],
    yakionigiris: ["Yakionigiris", [8]],
    sushiball: ["Sushiball", [9]],
    ramen: ["Ramen", [11, 12, 13]],
    alitas: ["Alitas", [14]],
    boneless: ["Boneless", [15]],
    dumplings: ["Dumplings", [16]],
    paquetes: ["Paquetes", [17]],
  };
  
  defineProps({
    slug: {
      type: String,
      required: false,
      default: "menu",
    },
  });
  </script>
  
  <style scoped lang="scss">
  .menu {
    max-width: 1200px;
    margin: 0 auto;
    padding: 20px;
  }
  
  .grid-container {
    display: grid;
    grid-template-columns: 20% 1fr; 
    grid-template-rows: auto 1fr;
    gap: 20px;
    align-items: start;
  }
  
  .title {
    grid-column: 2 / 2;
    text-align: center;
    font-size: 2rem;
    margin-bottom: 10px;
    color: #474787;
  }
  
  /* Lista de menú */
  .menu-list {
    list-style: none;
    padding: 0;
    margin: 0;
    position: sticky; /* Mantiene el menú fijo */
    top: calc(200px + 10px);
  }
  
  .menu-list li {
    margin-bottom: 10px;
  }
  
  .menu-list a {
    text-decoration: none;
    color: #2e2c55;
    font-weight: bold;
    font-size: 1.1rem;
  }
  
  .menu-list a:hover {
    color: #474787;
  }
  
  .img-menu-page {
    width: 100%; /* Imagen ocupa todo el ancho de su columna */
    height: auto; /* Mantiene la proporción */
    border-radius: 10px;
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  }

  @media (max-width: 540px) {
    .grid-container {
      grid-template-columns: 1fr !important; 
      gap: 5px;
      align-items: self-start;
    }
    div.menu {
      padding: 0;
      
    }
  .menu-list {
    position: auto  !important;
    top: 160px;
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
    background-color: white;
    width: 100%;
    box-shadow: 1px 20px 10px -16px #212121 !important;    
    margin-bottom: 1em;
    padding-top: 1em;
    a {
      font-size: 0.7em;
    }

    li.option-menu {
      display: none;
    }
  }
  .title {
    grid-column: 1 / -1;
    position: sticky; /* Mantiene el menú fijo */
    top: 100px;
    background-color: white;
    padding-top: 0.7em;

  }

  .img-menu-page{
    width: 90%;
  }
  .menu-pages{
    text-align: center;
  }
}
  </style>
  