import { createApp } from 'vue';
import App from './App.vue';
import router from './router';
import store from './store/index';
import './assets/main.css';

import BaseButton from './components/ui/BaseButton.vue';
import BaseCard from './components/ui/BaseCard.vue';
import BaseCardDesktop from './components/ui/BaseCardDesktop.vue';
import BaseCurrentDate from './components/ui/BaseCurrentDate.vue';
import BaseBadge from './components/ui/BaseBadge.vue';
import BaseDialog from './components/ui/BaseDialog.vue';

const app = createApp(App);

app.use(router);
app.use(store);

app.component('BaseButton', BaseButton);
app.component('BaseCard', BaseCard);
app.component('BaseCardDesktop', BaseCardDesktop);
app.component('BaseCurrentDate', BaseCurrentDate);
app.component('BaseBadge', BaseBadge);
app.component('BaseDialog', BaseDialog);

app.mount('#app');
