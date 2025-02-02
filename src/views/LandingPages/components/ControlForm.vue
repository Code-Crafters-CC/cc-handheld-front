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

const fieldsCellarsA = ref(["id", "descripcion"]);
const fieldsCellarsB = ref(["id", "descripcion"]);
const fieldsProducts = ref(["id", "descripcion"]);
const fieldsTipo = ref(["id", "tipo_name"]);

const cellarA = ref("");
const cellarB = ref("");
const products = ref("");
const tipo = ref("");
const numero = ref("");

const listCellarA = ref([]);
const listCellarB = ref([]);
const listProducts = ref([]);

const listTipo = ref([
  { id: 1, tipo_name: "Egreso" },
  { id: 2, tipo_name: "Ingreso" }
]);

const clean = async () => {
  cellarA.value = "";
  cellarB.value = "";
  products.value = "";
  tipo.value = "";
  numero.value = "";
};

// Método para crear una fumigación
const createFumigation = async () => {
  try {
    const response = await axios.post("move/createTransfer", {
      empresa: cellarA.value,
      sucursal: cellarB.value,
      tipo: tipo.value,
      codigoProducto: products.value,
      numero: numero.value,
    });
    console.log(response);
    clean();
  } catch (error) {
    console.log(error);
  }
};

// Método para listar plagas
const listarCellars = async () => {
  try {
    const response = await axios.get("/cellar/list");
    listCellarA.value = response.data.data;
    listCellarB.value = response.data.data;
    console.log(listCellarA.value);
    console.log(listCellarB.value);
  } catch (error) {
    console.log(error);
  }
};

// Método para listar productos
const listarProducts = async () => {
  try {
    const response = await axios.get("product/list");
    listProducts.value = response.data.data;
    console.log(listProducts.value);
  } catch (error) {
    console.log(error);
  }
};


onMounted(() => {
  setMaterialInput();
  listarCellars();
  listarProducts();
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
              <div class="col-md-5 d-flex flex-column mx-auto">
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
                        Traslado de Producto
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
                          <div class="mb-4">
                            <!-- Bodega Origen -->
                            <label for="rol" class="form-label"
                              >Selecciona la bodega de origen</label
                            >
                            <select
                              v-model="cellarA"
                              id="cellarA"
                              class="form-select"
                              :items="listCellarA"
                              :fields="fieldsCellarsA"
                            >
                              <option
                                v-for="lp in listCellarA"
                                v-bind:key="lp.id"
                                v-bind:value="lp.id"
                              >
                                {{ lp.descripcion }}
                              </option>
                            </select>
                            
                            <!-- Bodega Destino -->
                            <label for="rol" class="form-label"
                              >Selecciona la bodega de destino</label
                            >
                            <select
                              v-model="cellarB"
                              id="cellarB"
                              class="form-select"
                              :items="listCellarB"
                              :fields="fieldsCellarsB"
                            >
                              <option
                                v-for="lc in listCellarB"
                                v-bind:key="lc.id"
                                v-bind:value="lc.id"
                              >
                                {{ lc.descripcion }}
                              </option>
                            </select>

                            <!-- Producto -->
                            <label for="rol" class="form-label"
                              >Selecciona un producto</label
                            >
                            <select
                              v-model="products"
                              id="products"
                              class="form-select"
                              :items="listProducts"
                              :fields="fieldsProducts"
                            >
                              <option
                                v-for="lprod in listProducts"
                                v-bind:key="lprod.id"
                                v-bind:value="lprod.id"
                              >
                                {{ lprod.descripcion }}
                              </option>
                            </select>
                            <!-- Tipo -->
                            <label for="rol" class="form-label"
                              >Selecciona tipo de Traslado</label
                            >
                            <select
                              v-model="tipo"
                              id="tipo"
                              class="form-select"
                              :items="listTipo"
                              :fields="fieldsTipo"
                            >
                              <option
                                v-for="lt in listTipo"
                                v-bind:key="lt.id"
                                v-bind:value="lt.id"
                              >
                                {{ lt.tipo_name }}
                              </option>
                            </select>

                            <!-- Numero -->
                            <label class="form-label">Número</label>
                            <input
                              v-model="numero"
                              class="form-control"
                              type="text"
                              placeholder="ej. Landris"
                            />

                            <div class="text-center">
                              <MaterialButton
                                class="my-4 mb-2"
                                variant="gradient"
                                color="success"
                                fullWidth
                                @click="createFumigation"
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
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
  <DefaultFooter />
</template>
