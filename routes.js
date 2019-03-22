const routes = require('next-routes');

module.exports = routes()
  .add('card', '/card/:id', 'card');
