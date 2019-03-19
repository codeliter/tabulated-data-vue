const version = '__VERSION__';
import VueTabulatedData from './components/TabulatedData';

const DEFAULT_TABDATA = 'datatable';

const install = Vue => {
    /*
     * NOTE:
     *   if you need to extend Vue contstructor, you can extend it in here.
     */
    Vue.prototype.$tabulatedData = {};
    Vue.component(DEFAULT_TABDATA, VueTabulatedData);
};

const plugin = {
    install,
    version
};

export default plugin;

if (typeof window !== 'undefined' && window.Vue) {
    window.Vue.use(plugin);
}
