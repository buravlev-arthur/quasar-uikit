import icons from '../icons/index';

export default ({ app }: { app: any }) => {
  app.config.globalProperties.$q.iconMapFn = (iconName: string) => {
    const icon = icons[iconName];
    if (icon !== void 0) {
      return { icon };
    }
  };
}
