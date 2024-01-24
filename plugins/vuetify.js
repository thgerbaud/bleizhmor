import { createVuetify } from 'vuetify';
import * as components from 'vuetify/components';
import * as directives from 'vuetify/directives';
import { aliases, mdi } from 'vuetify/iconsets/mdi';

export default defineNuxtPlugin(nuxtApp => {
    const vuetify = createVuetify({
        ssr: true,
        components,
        directives,
        icons: {
            defaultSet: 'mdi',
            aliases,
            sets: {
                mdi,
            },
        },
        theme: {
            defaultTheme: 'theme',
            themes: {
                theme: {
                    dark: false,
                    colors: {
                        background: '#ffffff',
                        surface: '#FFFFFF',
                        primary: '#080705',
                        'primary-lighten-1': '#1d1d1d',
                        secondary: '#fb8b51',
                        'secondary-darken-1': '#c26b3e',
                        'secondary-lighten-1': '#fca073',
                        error: '#931F1D',
                        info: '#2196F3',
                        success: '#4CAF50',
                        warning: '#FB8C00',
                        disabled: '#b7b6bc',
                        text: '#1b1c1e',
                        label: '#2b2b2b'
                    },
                }
            },
        },
    });

    nuxtApp.vueApp.use(vuetify);
});