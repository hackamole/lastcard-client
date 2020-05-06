const routes = require('next-routes');

module.exports = routes()
  .add('card-history', '/card/:id/history', 'card-history')
  .add('card', '/card/:id', 'card');
