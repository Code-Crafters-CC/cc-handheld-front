<script setup>
// example components
import DefaultInfoCard from "../../../../examples/cards/infoCards/DefaultInfoCard.vue";
</script>
<template>
  <section class="py-7">
    <div class="container">
      <div class="row align-items-center">
        <div class="col-lg-6">
          <div class="row justify-content-start">
            <DefaultInfoCard
              color="info"
              icon="public"
              title="Comprometidos con el planeta"
              description="Utilizamos productos amigables con el medio ambiente"
            />
            <DefaultInfoCard
              color="info"
              icon="payments"
              title="Amigable con tu bolcillo"
              description="Tenemos los mejores precios del mercado"
            />
          </div>
        </div>
        <div class="col-lg-4 ms-auto mt-lg-0 mt-6">
          <div class="row justify-content-start mt-4">
            <DefaultInfoCard
              color="info"
              icon="apps"
              title="Bien Organizados"
              description="Con años de experiencia en el mercado, sabemos cómo actuar contra las alimañas"
            />
            <DefaultInfoCard
              color="info"
              icon="3p"
              title="De rápida respuesta"
              description="Nuestros expertos se contactarán contigo en menos tiempo del que te imaginas"
            />
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
