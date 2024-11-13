import './styles/main.scss';
import { createApp } from 'vue';
import { createPinia } from 'pinia';
import App from './App.vue';
import router from './router';
import errorHandler from './plugins/errorHandler';

const app = createApp(App);

// Plugins
const pinia = createPinia();
app.use(pinia);
app.use(router);
app.use(errorHandler);

app.mount('#app');
