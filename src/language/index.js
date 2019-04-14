// import Vue from 'vue';
// import VueI18n from 'vue-i18n'
import en from './lib/en.js';
import axios from 'axios';
// Vue.use(VueI18n);
const loadedLanguages = ['en']; // 我们的预装默认语言

export const i18n = new VueI18n({
    locale: 'en', // 设置语言环境
    fallbackLocale: 'en',  // 回退的默认语言
    messages: {
        en,
    },
});

function setI18nLanguage(lang) {
    i18n.locale = lang;
    axios.defaults.headers.common['Accept-Language'] = lang;
    document.querySelector('html').setAttribute('lang', lang);
    return lang;
}

export function loadLanguageAsync(lang) {
    if (i18n.locale !== lang) {
        if (!loadedLanguages.includes(lang)) {
            return import(/* webpackChunkName: "lang-[request]" */ `@/language/lib/${lang}.js`).then(msgs => {
                i18n.setLocaleMessage(lang, msgs.default);
                loadedLanguages.push(lang);
                return setI18nLanguage(lang);
            });
        }
        return Promise.resolve(setI18nLanguage(lang));
    }
    return Promise.resolve(lang);
}
