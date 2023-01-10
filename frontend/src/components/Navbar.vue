<template>
  <nav class="navbar navbar-vertical navbar-expand-md pt-0">
    <div>
      <button 
        class="navbar-toggler" 
        type="button"
        data-bs-toggle="collapse" 
        data-bs-target="navbarContent"
      >
        BORGER
      </button>
      <div class="collapse navbar-collapse" id="navbarContent">
        <ul class="navbar-nav flex-column">
          <li class="nav-item">
            <RouterLink to="/novinky" class="nav-link" active-class="active">Novinky</RouterLink>
          </li>
          <li class="nav-item">
            <RouterLink to="/vsechny-produkty" class="nav-link" active-class="active">Všechny produkty</RouterLink>
          </li>
          <li class="nav-item">
            <RouterLink to="/sestavy" class="nav-link" active-class="active">Sestavy</RouterLink>
          </li>
          <li class="nav-item">
            <RouterLink to="/notebooky" class="nav-link" active-class="active">Notebooky</RouterLink>
          </li>
          <li class="nav-item">
            <RouterLink to="/monitory" class="nav-link" active-class="active" >Monitory</RouterLink>
          </li>
          <li class="nav-item">
            <RouterLink to="/klavesnice" class="nav-link" active-class="active">Klávesnice</RouterLink>
          </li>
          <li class="nav-item">
            <RouterLink to="/mysi" class="nav-link" active-class="active">Myši</RouterLink>
          </li>
          <li class="nav-item">
            <RouterLink to="/procesory" class="nav-link" active-class="active">Procesory</RouterLink>
          </li>
          <li class="nav-item">
            <RouterLink to="/graficke-karty" class="nav-link" active-class="active">Grafické Karty</RouterLink>
          </li>
          <li class="nav-item">
            <RouterLink to="/zakladni-desky" class="nav-link" active-class="active">Základní Desky</RouterLink>
          </li>
          <li class="nav-item">
            <RouterLink to="/ram-pameti" class="nav-link" active-class="active">RAM Paměti</RouterLink>
          </li>
          <li class="nav-item">
            <RouterLink to="/disky" class="nav-link" active-class="active">Disky</RouterLink>
          </li>
          <li class="nav-item">
            <RouterLink to="/zdroje" class="nav-link" active-class="active">Zdroje</RouterLink>
          </li>
          <li class="nav-item">
            <RouterLink to="/cd-mechaniky" class="nav-link" active-class="active">CD Mechaniky</RouterLink>
          </li>
          <li class="nav-item">
            <RouterLink to="/disketove-mechaniky" class="nav-link" active-class="active">Disketové Mechaniky</RouterLink>
          </li>
          <li class="nav-item">
            <RouterLink to="/zvukove-karty" class="nav-link" active-class="active">Zvukové Karty</RouterLink>
          </li>
          <li class="nav-item">
            <RouterLink to="/sitove-karty" class="nav-link" active-class="active">Síťové Karty</RouterLink>
          </li>
          <li class="nav-item">
            <RouterLink to="/pc-skrine" class="nav-link" active-class="active">PC Skříně</RouterLink>
          </li>
          <li class="nav-item">
            <RouterLink to="/chladice" class="nav-link" active-class="active">Chladiče</RouterLink>
          </li>
          <li class="nav-item">
            <RouterLink to="/ostatni" class="nav-link" active-class="active">Ostatní</RouterLink>
          </li>
        </ul>
      </div>
    </div>
  </nav>
</template>

<script setup lang="ts">
import { ref } from 'vue';
</script>

<style scoped>
.nav-item .nav-link {
  /* color: var(--foreground-primary-color);
  background-color: #ded9c5ff;
  border-style: solid;
  border-width: 4px;
  border-left-color: #f9f5d7ff;
  border-top-color: #f9f5d7ff;
  border-bottom-color: dimgrey;
  border-right-color: dimgrey;
  font-family: 'Press Start 2P', cursive; */
  /* -webkit-box-shadow: 2px 2px 0px 0px rgba(0,0,0,0.75);
  -moz-box-shadow: 2px 2px 0px 0px rgba(0,0,0,0.75);
  box-shadow: 2px 2px 0px 0px rgba(0,0,0,0.75); */

  position: relative;
  color: var(--foreground-primary-color);
  text-transform: normal;
  background: #C0C0C0;
  letter-spacing: 0;
  font-weight: 400;
  padding: 4px 10px;
  font-family: 'Press Start 2P';
}

.navbar .navbar-nav .nav-link::before {
  content: '';
  display: block;
  width: 100%;
  height: 100%;
  position: absolute;
  top: 0;
  left: 0;
  border-top: 2px solid #FCFCFC;
  border-left: 2px solid #FCFCFC;
  border-bottom: 2px solid #08080E;
  border-right: 2px solid #08080E;
}

.nav-item .nav-link:hover {
  background-color: #d3d1d1;
}

.nav-item .nav-link.active {
  background-color: #b3b3b3;
  color: black;
  border-left-color: dimgrey;
  border-top-color: dimgrey;
  border-bottom-color: white;
  border-right-color: white;
  -webkit-box-shadow: 0px 0px 0px 0px rgba(0,0,0,0.75);
  -moz-box-shadow: 0px 0px 0px 0px rgba(0,0,0,0.75);
  box-shadow: 0px 0px 0px 0px rgba(0,0,0,0.75);
  box-shadow: 0 2px 5px rgba(0, 0, 0, 0.15) inset;
  transform: translateY(1px);
}

.nav-item .nav-link.focus {
  outline: none;
  box-shadow: 0 0 0 2px #5b9dd9, 0 0 2px 2px rgba(30, 140, 190, 0.8);

}
</style>