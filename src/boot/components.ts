import MyComponent from '../components/MyComponent.vue';
import MyComponentTwo from '../components/MyComponentTwo.vue';

export default ({ app }: { app: any }) => {
  app
    .component('MyComponent', MyComponent)
    .component('MyComponentTwo', MyComponentTwo)
}

