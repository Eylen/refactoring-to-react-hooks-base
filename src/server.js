import {createServer} from 'miragejs';
import {sales, subscriptions} from './mocks';

export function makeServer({environment = 'development'}) {
  return createServer({
    environment,

    routes() {
      this.namespace = process.env.REACT_APP_BASE_URL;

      this.get('/totals', () => [...sales, ...subscriptions]);
      this.get('/sales', () => sales, {timing: 4000});
      this.get('/subscriptions', () => subscriptions);
    }
  });
}
