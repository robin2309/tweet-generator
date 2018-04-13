import Home from 'Containers/Home/Home';
import App from 'Components/App/App';

export default [
  {
    component: App,
    routes: [
      {
        path: '/:country/:retailer',
        component: Home
      },
      {
        path: '/:country',
        component: Home
      }
    ]
  }
];
