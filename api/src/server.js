const Hapi = require('hapi');

module.exports.start = async (port, host) => {
  const server = Hapi.server({ port, host });

  server.route({
    method: 'GET',
    path: '/hello',
    handler: function (request, h) {
      return 'hello world';
    },
  });

  server.route({
    method: 'GET',
    path: '/{name}',
    handler: function (request, h) {
      return `Hello, ${encodeURIComponent(request.params.name)}!`;
    },
  });

  await server.start();
  return server.info;
};
