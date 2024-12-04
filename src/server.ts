import fastify from 'fastify'
import { env } from './env'
import { transactionsRoutes } from './routes/transactions'

const app = fastify()

app.register(transactionsRoutes, { prefix: 'transactions' })

app
  .listen({ port: env.PORT })
  .then(() => {
    console.log('HTTP Server Running!')
  })
  .catch((err) => {
    console.error('Error starting server:', err)
    process.exit(1)
  })
