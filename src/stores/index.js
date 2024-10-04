import bootstrap from "bootstrap/dist/js/bootstrap.min.js";
import { defineStore } from 'pinia'
import router from '../router/index'

export const useAppStore = defineStore('auth', {
  state: () => ({
    bootstrap,
    token: null,
    usuario: null
  }),
  actions: {
    guardarToken(token) {
      this.token = token;
      localStorage.setItem('token', token);
    },
    autoLogin() {
      let token = localStorage.getItem('token');
      if (token) {
        this.token = token;
        router.push({ name: 'HelloWorld' });
      } else {
        router.push({ name: 'Login' });
      }
    },
    salir() {
      this.token = null;
      localStorage.removeItem('token');
    }
  }
});

