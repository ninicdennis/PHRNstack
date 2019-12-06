var knex = require('../knex')

const mainRoutes = [
   // Template:
   // {
   //    method: 'GET',
   //    path: '/path',
   //    handler: (request, h) => {
   //       console.log('Hitting', h.request.url.href, 'with', h.request.route.method, 'request')
   //       arguments with return statement
   //    }
   // },
   {
      method: 'GET',
      path: '/',
      handler: (request, h) => {
         console.log('Hitting', h.request.url.href, 'with', h.request.route.method, 'request')
         response = knex.select().table('test_table')
         console.log(response)
         return response
      }
   }

]

module.exports = mainRoutes