import { createApp } from 'vue';
import { createPinia } from 'pinia';

import { Quasar } from 'quasar';
import router from './src/router';
import App from './src/App.vue';

const app = createApp(App).use(Quasar);

app.use(createPinia());
app.use(router);

app.mount('#app');
