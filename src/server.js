import {createServer} from 'miragejs';
import {sales, subscriptions} from './mocks';

export function makeServer({environment = 'development'}) {
  return createServer({
    environment,

    routes() {
      this.namespace = 'api';

      this.get('/totals', () => [...sales, ...subscriptions]);
      this.get('/sales', () => sales);
      this.get('/subscriptions', () => subscriptions);
    }
  });
}
