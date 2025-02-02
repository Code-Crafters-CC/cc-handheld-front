<script setup>
// example components
import DefaultInfoCard from "../../../../examples/cards/infoCards/DefaultInfoCard.vue";
import { useAppStore } from "@/stores/index";
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
              description="Recepciona los pedidos"
            />
            <router-link :to="{ name: '' }">
              <button
                type="button"
                class="btn btn-dark btn-sm"
                style="width: 200px; height: 50px"
              >
                Recibir
              </button>
            </router-link>
            <DefaultInfoCard
              color="info"
              icon="people"
              title="TRASLADO"
              description="Traslada productos entre bodegas"
            />
            <router-link :to="{ name: 'controlForm' }">
              <button
                type="button"
                class="btn btn-dark btn-sm"
                style="width: 200px; height: 50px"
              >
                Crear traslado
              </button>
            </router-link>
          </div>
        </div>
        <div class="col-lg-4 ms-auto mt-lg-0 mt-6">
          <div class="row justify-content-start mt-4">
            <DefaultInfoCard
              color="info"
              icon="groups"
              title="PRODUCTO"
              description="Organiza tus productos"
            />
            <router-link :to="{ name: '' }">
              <button
                type="button"
                class="btn btn-dark btn-sm"
                style="width: 200px; height: 50px"
              >
                Ver
              </button>
            </router-link>
            <DefaultInfoCard
              color="info"
              icon="equalizer"
              title="AUDITAR"
              description="Observa las estadisticas de las bodegas y productos"
            />
            <router-link :to="{ name: '' }">
              <button
                type="button"
                class="btn btn-dark btn-sm"
                style="width: 200px; height: 50px"
              >
                Estadisticas
              </button>
            </router-link>
          </div>
        </div>
      </div>
      <div class="row d-flex justify-content-center align-items-center text-center" v-else>
        <DefaultInfoCard
          color="success"
          icon="login"
          title="LOGIN"
          description="Inicia sesión para usar la herramienta"
        />
        <router-link :to="{ name: 'signin-basic' }">
          <button
            type="button"
            class="btn btn-dark btn-sm"
            style="width: 200px; height: 50px"
          >
            Login
          </button>
        </router-link>
      </div>
    </div>
  </section>
</template>
