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

const listPlagues = ref([]);
const fieldsPlagues = ref([
  "id",
  "plague_name",
  "insert_date",
  "plague_type"
]);


const plagueName = ref("");
const plagueType = ref("")

const fieldsPlagueType = ref(["id", "plague_type_name"]);
const listPlagueType = ref([]);

const clear = async () => {
    plagueName.value = "";
    plagueType.value = "";
}

// Método para crear una fumigación
const createPlague = async () => {
  try {
    const response = await axios.post("plague/", {
      plague_name: plagueName.value,
      plague_type: plagueType.value
    });
    console.log(response);
    await listPlague();
    clear();
  } catch (error) {
    console.log(error);
  }
};

const listPlague = async () => {
  try {
    await axios.get("plague/").then((response) => {
      listPlagues.value = response.data;
      console.log(response);
    });
  } catch (error) {
    console.log(error);
  }
};

// Método para listar plagas
const listarPlagueType = async () => {
  try {
    const response = await axios.get("plagueType/list/");
    listPlagueType.value = response.data;
    console.log(response);
  } catch (error) {
    console.log(error);
  }
};

onMounted(() => {
  setMaterialInput();
  listPlague();
  listarPlagueType();
});
</script>
<template>
  <div class="container position-sticky z-index-sticky top-0">
    <div class="row">
      <div class="col-12">
        <DefaultNavbar
          :sticky="true"
          :action="{
            route: 'https://www.creative-tim.com/product/vue-material-kit-pro',
            color: 'bg-gradient-success',
          }"
        />
      </div>
    </div>
  </div>
  <section>
    <div class="page-header min-vh-100">
      <div class="container">
        <div class="row">
          <div
            class="col-1 d-lg-flex d-none h-100 my-auto pe-0 position-absolute top-0 start-0 text-center justify-content-center flex-column"
          >
            <div
              class="position-relative h-100 m-9 px-7 border-radius-lg d-flex flex-column justify-content-center"
              :style="{
                backgroundImage: `url(${image})`,
                backgroundSize: 'cover',
              }"
              loading="lazy"
            ></div>
          </div>
          <!-- FUMIGATIONS REGISTER -->
          <div class="container py-4">
            <div class="row justify-content-center">
              <div class="col-md-3 d-flex flex-column mx-auto">
                <div
                  class="card d-flex blur justify-content-center shadow-lg my-sm-0 my-sm-6 mt-8 mb-5"
                >
                  <div
                    class="card-header p-0 position-relative mt-n4 mx-3 z-index-2"
                  >
                    <div
                      class="bg-gradient-success shadow-success border-radius-lg p-3"
                    >
                      <h3
                        class="text-white font-weight-bolder text-center mt-2 mb-0"
                      >
                        Registro de Fumigaciones
                      </h3>
                    </div>
                  </div>
                  <div class="card-body">
                    <form
                      role="form"
                      id="contact-form"
                      method="post"
                      autocomplete="off"
                      @submit.prevent="onsubmit"
                    >
                      <div class="card-body">
                        <div class="row">
                          <div class="col-md-6">
                            <label class="form-label">Nombre de la Plaga</label>
                            <input
                              v-model="plagueName"
                              class="form-control"
                              type="text"
                              placeholder="ej. Cucarachas"
                            />
                          </div>
                          <div class="mb-4">
                            <label for="rol" class="form-label">Selecciona el tipo de plaga</label>
                            <select
                              v-model="plagueType"
                              id="plague"
                              class="form-select"
                              :items="listPlagueType"
                              :fields="fieldsPlagueType"
                            >
                              <option
                                v-for="lpt in listPlagueType"
                                v-bind:key="lpt.id"
                                v-bind:value="lpt.id"
                              >
                                {{ lpt.plague_type_name}}
                              </option>
                            </select>
                            <div class="text-center">
                              <MaterialButton
                                class="my-4 mb-2"
                                variant="gradient"
                                color="success"
                                fullWidth
                                @click="createPlague"
                              >
                                Registrar
                              </MaterialButton>
                            </div>
                          </div>
                        </div>
                      </div>
                    </form>
                  </div>
                </div>
              </div>

              <!-- FUMIGATIONS LIST -->
              <div class="col-md-8 col-xl-7 d-flex flex-column mx-auto mt-4 mt-md-0">
                <div
                  class="card d-flex blur justify-content-center shadow-lg my-sm-0 my-sm-6 mt-8 mb-5"
                  style="margin-top: 60px; margin-left: 30px; padding: 50px 20px 15px 5px; /* arriba, derecha, abajo, izquierda */"
                >
                  <div
                    class="card-header p-0 position-relative mt-n4 mx-3 z-index-2 bg-transparent"
                  >
                    <div
                      class="bg-gradient-success shadow-success border-radius-lg p-3"
                    >
                      <h3 class="text-white text-success mb-0">Fumigaciones</h3>
                    </div>
                  </div>
                  <!-- Listado de fumigaciones-->
                  <div class="card-body">
                    <div
                      class="table-responsive" style="max-height: 200px; overflow-y: auto; margin-top: 10px; margin-left: 15px;"
                    >
                      <table
                        class="table table-striped"
                        :items="listPlagues"
                        :fields="fieldsPlagues"
                      >
                        <thead>
                          <tr>
                            <th scope="col">#</th>
                            <th scope="col">Plaga</th>
                            <th scope="col">Tipo de Plaga</th>
                            <th scope="col">Fecha de creación</th>
                          </tr>
                        </thead>
                        <tbody>
                          <tr v-for="(lP, i) in listPlagues" v-bind:key="lP.id">
                            <td>{{ lP.id }}</td>
                            <td>{{ lP.plague_name }}</td>
                            <td>{{ lP.plague_type['plague_type_name'] }}</td>
                            <td>{{ lP.insert_date }}</td>
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
      </div>
    </div>
  </section>
  <DefaultFooter />
</template>