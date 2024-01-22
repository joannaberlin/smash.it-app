import { createApp } from 'vue';
import App from './App.vue';
import router from './router';
import store from './store/index';
import './assets/main.css';
import BaseButton from './components/ui/BaseButton.vue';

const app = createApp(App);

app.use(router);
app.use(store);

app.component('BaseButton', BaseButton);

app.mount('#app');
