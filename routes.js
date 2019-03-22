const routes = require('next-routes');

module.exports = routes()
  .add('card-history', '/card/:id/history', 'card-history')
  .add('card', '/card/:id', 'card');
// card/ec113dbe-c8a0-4b33-a27d-f2ef3f54016c/history