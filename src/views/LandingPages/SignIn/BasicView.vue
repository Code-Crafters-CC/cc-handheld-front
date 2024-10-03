<script setup>
import { ref, onMounted } from "vue";
import axios from "axios";
import router from "../../../router/index";
// example components
import DefaultNavbar from "@/examples/navbars/NavbarDefault.vue";
import Header from "@/examples/Header.vue";

//Vue Material Kit 2 components
import MaterialInput from "@/components/MaterialInput.vue";
import MaterialSwitch from "@/components/MaterialSwitch.vue";
import MaterialButton from "@/components/MaterialButton.vue";

// material-input
import setMaterialInput from "@/assets/js/material-input";

// Definir las propiedades reactivas utilizando ref()
const fields = ref([
  "id",
  "first_name",
  "last_name",
  "user_name",
  "email",
  "password",
  "rol",
]);

const fieldsRol = ref(["id", "rol_name", "insert_date"]);
const id = ref("");
const first_name = ref("");
const last_name = ref("");
const username = ref("");
const password = ref("");
const rol = ref(0);
const showLogin = ref(true);
const showRegister = ref(false);
const listRol = ref([]);

// Método para crear un usuario
const createUser = async () => {
  try {
    const response = await axios.post("users/", {
      first_name: first_name.value,
      last_name: last_name.value,
      username: username.value,
      password: password.value,
      rol: rol.value,
    }); 
    toggleForms();
    console.log(response);
  } catch (error) {
    console.log(error);
  }
};

// Método para listar roles
const listarRol = async () => {
  try {
    const response = await axios.get("roles/");
    listRol.value = response.data;
    console.log(listRol.value);
  } catch (error) {
    console.log(error);
  }
};

// Función para alternar entre los formularios
const toggleForms = () => {
  showLogin.value = !showLogin.value;
  showRegister.value = !showRegister.value;
};

// Función para manejar el inicio de sesión
const login = () => {
  console.log("Iniciar sesión con:", username.value, password.value);
  // Aquí agregas la lógica real del login
};

// Función para manejar el registro
const register = () => {
  console.log(
    "Registrar usuario:",
    newUsername.value,
    newPassword.value,
    email.value
  );
  // Una vez que el registro es exitoso, volver a mostrar el formulario de login
  showLogin = true;
  showRegister = false;
};

// Ejecutar listarRol cuando se monta el componente
onMounted(() => {
  setMaterialInput();
  listarRol();
});
</script>
<template>
  <DefaultNavbar transparent />
  <Header>
    <div
      class="page-header align-items-start min-vh-100"
      :style="{
        backgroundImage:
          'url(https://images.unsplash.com/photo-1497294815431-9365093b7331?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1950&q=80)',
      }"
      loading="lazy"
    >
      <span class="mask bg-gradient-dark opacity-6"></span>

      <!-- Form Login -->
      <div class="container my-auto" div v-if="showLogin">
        <div class="row">
          <div class="col-lg-4 col-md-8 col-12 mx-auto">
            <div class="card z-index-0 fadeIn3 fadeInBottom">
              <div
                class="card-header p-0 position-relative mt-n4 mx-3 z-index-2"
              >
                <div
                  class="bg-gradient-success shadow-success border-radius-lg py-3 pe-1"
                >
                  <h4
                    class="text-white font-weight-bolder text-center mt-2 mb-0"
                  >
                    Sign in
                  </h4>
                  <div class="row mt-3">
                    <div class="col-2 text-center ms-auto">
                      <a class="btn btn-link px-3" href="javascript:;">
                        <i class="fa fa-facebook text-white text-lg"></i>
                      </a>
                    </div>
                    <div class="col-2 text-center px-1">
                      <a class="btn btn-link px-3" href="javascript:;">
                        <i class="fa fa-github text-white text-lg"></i>
                      </a>
                    </div>
                    <div class="col-2 text-center me-auto">
                      <a class="btn btn-link px-3" href="javascript:;">
                        <i class="fa fa-google text-white text-lg"></i>
                      </a>
                    </div>
                  </div>
                </div>
              </div>
              <div class="card-body">
                <form role="form" class="text-start">
                  <MaterialInput
                    id="email"
                    class="input-group-outline my-3"
                    :label="{ text: 'Email', class: 'form-label' }"
                    type="email"
                  />
                  <MaterialInput
                    id="password"
                    class="input-group-outline mb-3"
                    :label="{ text: 'Password', class: 'form-label' }"
                    type="password"
                  />
                  <MaterialSwitch
                    class="d-flex align-items-center mb-3"
                    id="rememberMe"
                    labelClass="mb-0 ms-3"
                    checked
                    >Remember me</MaterialSwitch
                  >

                  <div class="text-center">
                    <MaterialButton
                      class="my-4 mb-2"
                      variant="gradient"
                      color="success"
                      fullWidth
                      >Sign in</MaterialButton
                    >
                  </div>
                  <p class="mt-4 text-sm text-center">
                    Don't have an account?
                    <a
                      href="#"
                      class="text-success text-gradient font-weight-bold"
                      @click="toggleForms"
                      >Sign up</a
                    >
                  </p>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>

      <!-- Form Sign up -->
      <div class="container py-4" v-if="showRegister">
        <div class="row justify-content-center">
          <div
            class="mt-8 col-xl-5 col-lg-6 col-md-7 d-flex flex-column mx-auto"
          >
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
                    Registro de usuario
                  </h3>
                </div>
              </div>
              <div class="card-body">
                <form
                  role="form"
                  id="contact-form"
                  method="post"
                  autocomplete="off"
                  @submit.prevent = "onsubmit"
                >
                  <div class="card-body">
                    <div class="row">
                      <div class="col-md-6">
                        <MaterialInput
                          class="input-group-static mb-4"
                          label="First Name"
                          type="text"
                          placeholder="eg. Thomas"
                        />
                      </div>
                      <div class="col-md-6 ps-2">
                        <MaterialInput
                          class="input-group-static mb-4"
                          label="Last Name"
                          type="text"
                          placeholder="eg. Shelby"
                        />
                      </div>
                      <div class="col-md-6 ps-2">
                        <MaterialInput
                          class="input-group-static mb-4"
                          label="Username"
                          type="text"
                          placeholder="eg. Some username"
                        />
                      </div>
                      <div class="col-md-6 ps-2">
                        <MaterialInput
                          class="input-group-static mb-4"
                          label="Email Address"
                          type="text"
                          placeholder="eg. email@gmail.com"
                        />
                      </div>
                      <div class="col-md-6 ps-2">
                        <MaterialInput
                          class="input-group-static mb-4"
                          label="Password"
                          type="password"
                        />
                      </div>
                      <div class="mb-4">
                        <label for="rol" class="form-label"
                          >Selecciona un rol de usuario</label
                        >
                        <select
                          id="rol"
                          class="form-select"
                          :items="listRol"
                          :fields="fieldsRol"
                          v-model="rol"
                        >
                          <option
                            v-for="lr in listRol"
                            v-bind:key="lr.id"
                            v-bind:value="lr.id"
                          >
                            {{ lr.rol_name }}
                          </option>
                        </select>
                        <div class="text-center">
                          <MaterialButton
                            class="my-4 mb-2"
                            variant="gradient"
                            color="success"
                            fullWidth
                            @click= "createUser"
                            >Registrar</MaterialButton
                          >
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
      <footer class="footer position-absolute bottom-2 py-2 w-100">
        <div class="container">
          <div class="row align-items-center justify-content-lg-between">
            <div class="col-12 col-md-6 my-auto">
              <div
                class="copyright text-center text-sm text-white text-lg-start"
              >
                © {{ new Date().getFullYear() }}, made with
                <i class="fa fa-heart" aria-hidden="true"></i> by
                <a
                  href="https://www.creative-tim.com"
                  class="font-weight-bold text-white"
                  target="_blank"
                  >Creative Tim</a
                >
                for a better web.
              </div>
            </div>
            <div class="col-12 col-md-6">
              <ul
                class="nav nav-footer justify-content-center justify-content-lg-end"
              >
                <li class="nav-item">
                  <a
                    href="https://www.creative-tim.com"
                    class="nav-link text-white"
                    target="_blank"
                    >Creative Tim</a
                  >
                </li>
                <li class="nav-item">
                  <a
                    href="https://www.creative-tim.com/presentation"
                    class="nav-link text-white"
                    target="_blank"
                    >About Us</a
                  >
                </li>
                <li class="nav-item">
                  <a
                    href="https://www.creative-tim.com/blog"
                    class="nav-link text-white"
                    target="_blank"
                    >Blog</a
                  >
                </li>
                <li class="nav-item">
                  <a
                    href="https://www.creative-tim.com/license"
                    class="nav-link pe-0 text-white"
                    target="_blank"
                    >License</a
                  >
                </li>
              </ul>
            </div>
          </div>
        </div>
      </footer>
    </div>
  </Header>
</template>
