import icons from '../icons/index';
export default ({ app }) => {
    app.config.globalProperties.$q.iconMapFn = (iconName) => {
        const icon = icons[iconName];
        if (icon !== void 0) {
            return { icon };
        }
    };
};
