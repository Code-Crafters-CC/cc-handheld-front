<script setup>
// example components
import DefaultInfoCard from "../../../../examples/cards/infoCards/DefaultInfoCard.vue";
import {useAppStore} from '@/stores/index';
const appStore = useAppStore();
</script>

<template>
  <section class="py-7">
    <div class="container">
      <div class="row align-items-center" v-if="appStore.token">
        <div class="col-lg-6">
          <div class="row justify-content-start">
            <DefaultInfoCard
              color="success"
              icon="hail"
              title="RECEPCIÓN"
              description="Registra y organiza a los jugadores"
            />
            <router-link :to="{ name: '' }">
              <button type="button" class="btn btn-dark btn-sm" style="width: 200px; height: 50px;">Agregar</button>
            </router-link>
            <DefaultInfoCard
              color="info"
              icon="people"
              title="TRASLADO"
              description="Crea y organiza a tus equipos"
            />
            <router-link :to="{ name: '' }">
              <button type="button" class="btn btn-dark btn-sm" style="width: 200px; height: 50px;">Crear</button>
            </router-link>
          </div>
        </div>
        <div class="col-lg-4 ms-auto mt-lg-0 mt-6">
          <div class="row justify-content-start mt-4">
            <DefaultInfoCard
              color="info"
              icon="groups"
              title="PRODUCTO"
              description="Organiza a tus equipos y a sus jugadores"
            />
            <router-link :to="{ name: '' }">
              <button type="button" class="btn btn-dark btn-sm" style="width: 200px; height: 50px;">Ver</button>
            </router-link>
            <DefaultInfoCard
              color="info"
              icon="equalizer"
              title="AUDITAR"
              description="Observa las estadisticas de los partidos"
            />
            <router-link :to="{ name: '' }">
              <button type="button" class="btn btn-dark btn-sm" style="width: 200px; height: 50px;">Estadisicas</button>
            </router-link>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>