import fastify from 'fastify'

const app = fastify()

app.get('/hello', () => {
  return 'Hello World'
})

app
  .listen({ port: 3333 })
  .then(() => {
    console.log('HTTP Server Running!')
  })
  .catch((err) => {
    console.error('Error starting server:', err)
    process.exit(1)
  })
