// import Vue from 'vue';
// import VueI18n from 'vue-i18n'
import us from './lib/us.js';
import axios from 'axios';
// Vue.use(VueI18n);
const loadedLanguages = ['us']; // 我们的预装默认语言

export const i18n = new VueI18n({
    locale: 'us', // 设置语言环境
    fallbackLocale: 'us',  // 回退的默认语言
    messages: {
        us,
    },
});

function setI18nLanguage(lang) {
    i18n.locale = lang;
    axios.defaults.headers.common['Accept-Language'] = lang;
    // axios.defaults.headers.common['Accept-CurLang'] = lang;  // 自定义字段
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
