<script setup>
import { ref, onMounted } from "vue";
import axios from "axios";
//example components
import DefaultNavbar from "@/examples/navbars/NavbarDefault.vue";
import DefaultFooter from "@/examples/footers/FooterDefault.vue";

//image
import image from "@/assets/img/illustrations/illustration-signin.jpg";

//material components
import MaterialInput from "@/components/MaterialInput.vue";
import MaterialTextArea from "@/components/MaterialTextArea.vue";
import MaterialButton from "@/components/MaterialButton.vue";

// material-input
import setMaterialInput from "@/assets/js/material-input";

const listUsers = ref([]);
const fields = ref(['id', 'first_name', 'last_name', 'username', 'email', 'insert_date', ]);

const listarUsuarios = async () => {
  try {
    await axios.get('users/').then(response => {
      listUsers.value = response.data;
      console.log(response);
    });
  } catch (error) {
    console.log(error);
  }
}


onMounted(() => {
  setMaterialInput();
  listarUsuarios();
});
</script>
<template>
  <div class="container position-sticky z-index-sticky top-0">
    <div class="row">
      <div class="col-12">
        <DefaultNavbar :sticky="true" :action="{
          route: 'https://www.creative-tim.com/product/vue-material-kit-pro',
          color: 'bg-gradient-success',
        }" />
      </div>
    </div>
  </div>
  <section>
    <div class="page-header min-vh-100">
      <div class="container">
        <div class="row">
          <div
            class="col-1 d-lg-flex d-none h-100 my-auto pe-0 position-absolute top-0 start-0 text-center justify-content-center flex-column">
            <div class="position-relative h-100 m-9 px-7 border-radius-lg d-flex flex-column justify-content-center"
              :style="{
                backgroundImage: `url(${image})`,
                backgroundSize: 'cover',
              }" loading="lazy"></div>
          </div>
          <div class="mt-3 col-xl-10 col-lg-10 col-md-7 d-flex flex-column ms-auto me-auto ms-lg-auto me-sm-0">
            <div class="card d-flex blur justify-content-center shadow-lg my-sm-0 my-sm-6 mt-8 mb-5">
              <div class="card-header p-0 position-relative mt-n4 mx-3 z-index-2 bg-transparent">
                <div class="bg-gradient-success shadow-success border-radius-lg p-3">
                  <h3 class="text-white text-success mb-0">Usuarios</h3>
                </div>
              </div>
              <!--contenido de historial de consumo-->
              <div class="card-body">
                <div class="table-responsive" style="max-height: 500px; overflow-y:hidden;">
                  <table class="table table-striped " :items="listUsers" :fields="fields">
                    <thead>
                      <tr>
                        <th scope="col">#</th>
                        <th scope="col">Nombre Completo</th>
                        <th scope="col">Username</th>
                        <th scope="col">Correo</th>
                        <th scope="col">Fecha de ingreso</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr v-for="(lU, i) in listUsers" v-bind:key="lU.id">
                        <td>{{ lU.id }}</td>
                        <td>{{lU.first_name}} {{ lU.last_name }}</td>
                        <td>{{ lU.username}}</td>
                        <td>{{lU.email}}</td>
                        <td>{{lU.insert_date}}</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
  <DefaultFooter />
</template>
