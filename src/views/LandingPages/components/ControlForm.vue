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

const listFumigations = ref([]);
const fieldsFumigations = ref([
  "id",
  "client_name",
  "client_phone",
  "fumigation_date",
  "destination_place",
]);

const fieldsPlague = ref(["id", "plague_name", "insert_date", "plague_type"]);
const fieldsProducts = ref(["id", "product_name", "stock", "product_type"]);
const fieldsControlMethod = ref(["id", "control_method_name"]);
const fieldsStatus = ref(["id", "status_name"]);

const id = ref("");
const client_name = ref("");
const client_phone = ref("");
const client_dpi = ref("");
const fumigation_date = ref("");
const destination_place = ref("");
const total_products = ref("");
const plague = ref("");
const products = ref("");
const control_method = ref("");
const status = ref("");

const listPlague = ref([]);
const listProducts = ref([]);
const listControlMethod = ref([]);
const listStatus = ref([]);

// Método para crear una fumigación
const createFumigation = async () => {
  try {
    console.log({
      client_name: client_name.value,
      client_phone: client_phone.value,
      client_dpi: client_dpi.value,
      fumigation_date: fumigation_date.value,
      destination_place: destination_place.value,
      total_products: total_products,
      plague: plague.value,
      products: products.value,
      control_method: control_method.value,
      status: status.value,
    });

    const response = await axios.post("controlForm/", {
      client_name: client_name.value,
      client_phone: client_phone.value,
      client_dpi: client_dpi.value,
      fumigation_date: fumigation_date.value,
      destination_place: destination_place.value,
      total_products: total_products.value,
      plague: plague.value,
      products: products.value,
      control_method: control_method.value,
      status: status.value,
    });
    console.log(response);
  } catch (error) {
    console.log(error);
  }
};

const listarFumigaciones = async () => {
  try {
    await axios.get("controlForm/").then((response) => {
      listFumigations.value = response.data;
      console.log(response);
    });
  } catch (error) {
    console.log(error);
  }
};

// Método para listar plagas
const listarPlagues = async () => {
  try {
    const response = await axios.get("plague/");
    listPlague.value = response.data;
    console.log(listPlague.value);
  } catch (error) {
    console.log(error);
  }
};

// Método para listar productos
const listarProducts = async () => {
  try {
    const response = await axios.get("product/");
    listProducts.value = response.data;
    console.log(lisProducts.value);
  } catch (error) {
    console.log(error);
  }
};

// Método para listar métodos de control
const listarControlMethods = async () => {
  try {
    const response = await axios.get("controlMethod/");
    listControlMethod.value = response.data;
    console.log(listControlMethod.value);
  } catch (error) {
    console.log(error);
  }
};

// Método para listar los status
const listarStatus = async () => {
  try {
    const response = await axios.get("status/");
    listStatus.value = response.data;
    console.log(listStatus.value);
  } catch (error) {
    console.log(error);
  }
};

onMounted(() => {
  setMaterialInput();
  listarFumigaciones();
  listarPlagues();
  listarProducts();
  listarControlMethods();
  listarStatus();
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
                            <label class="form-label">Nombre del cliente</label>
                            <input
                              v-model="client_name"
                              class="form-control"
                              type="text"
                              placeholder="ej. Thomas"
                            />
                          </div>
                          <div class="col-md-6 ps-2">
                            <label class="form-label">Teléfono</label>
                            <input
                              v-model="client_phone"
                              class="form-control"
                              type="text"
                              placeholder="ej. 24280000"
                            />
                          </div>
                          <div class="col-md-6 ps-2">
                            <label class="form-label">DPI</label>
                            <input
                              v-model="client_dpi"
                              class="form-control"
                              type="text"
                              placeholder="3015 01852 1212"
                            />
                          </div>
                          <div class="col-md-6 ps-2">
                            <label class="form-label">Fecha de fumigación</label>
                            <input
                              v-model="fumigation_date"
                              class="form-control"
                              type="datetime-local"
                              placeholder="ej. 2024-10-01T10:00"
                            />
                          </div>
                          <div class="col-md-6 ps-2">
                            <label class="form-label">Dirección</label>
                            <input
                              v-model="destination_place"
                              class="form-control"
                              type="text"
                              placeholder="ej. 8va calle, zona 1 San Marcos"
                            />
                          </div>
                          <div class="col-md-6 ps-2">
                            <label class="form-label">Cantidad de producto necesaria</label>
                            <input
                              v-model="total_products"
                              class="form-control"
                              type="text"
                              placeholder="ej. 2"
                            />
                          </div>
                          <div class="mb-4">
                            <label for="rol" class="form-label">Selecciona una plaga a erradicar</label>
                            <select
                              v-model="plague"
                              id="plague"
                              class="form-select"
                              :items="listPlague"
                              :fields="fieldsPlague"
                            >
                              <option
                                v-for="lp in listPlague"
                                v-bind:key="lp.id"
                                v-bind:value="lp.id"
                              >
                                {{ lp.plague_name }}
                              </option>
                            </select>
                            <label for="rol" class="form-label">Selecciona un producto</label>
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
                                {{ lprod.product_name }}
                              </option>
                            </select>
                            <label for="rol" class="form-label">Selecciona un método de control de plaga</label>
                            <select
                              v-model="control_method"
                              id="controlMethod"
                              class="form-select"
                              :items="listControlMethod"
                              :fields="fieldsControlMethod"
                            >
                              <option
                                v-for="lcm in listControlMethod"
                                v-bind:key="lcm.id"
                                v-bind:value="lcm.id"
                              >
                                {{ lcm.control_method_name }}
                              </option>
                            </select>
                            <label for="rol" class="form-label">Selecciona el status de la fumigación</label>
                            <select
                              v-model="status"
                              id="status"
                              class="form-select"
                              :items="listStatus"
                              :fields="fieldsStatus"
                            >
                              <option
                                v-for="ls in listStatus"
                                v-bind:key="ls.id"
                                v-bind:value="ls.id"
                              >
                                {{ ls.status_name }}
                              </option>
                            </select>
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

              <!-- FUMIGATIONS LIST -->
              <div class="col-md-7 d-flex flex-column mx-auto mt-4 mt-md-0">
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
                      class="table-responsive" style="max-height: 600px; overflow-y: auto; margin-top: 10px; margin-left: 15px;"
                    >
                      <table
                        class="table table-striped"
                        :items="listFumigations"
                        :fields="fieldsFumigations"
                      >
                        <thead>
                          <tr>
                            <th scope="col">#</th>
                            <th scope="col">Nombre del cliente</th>
                            <th scope="col">Teléfono</th>
                            <th scope="col">Fecha de fumigación</th>
                            <th scope="col">Dirección</th>
                          </tr>
                        </thead>
                        <tbody>
                          <tr v-for="(lf, i) in listFumigations" v-bind:key="lf.id">
                            <td>{{ lf.id }}</td>
                            <td>{{ lf.client_name }}</td>
                            <td>{{ lf.client_phone }}</td>
                            <td>{{ lf.fumigation_date }}</td>
                            <td>{{ lf.destination_place }}</td>
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

