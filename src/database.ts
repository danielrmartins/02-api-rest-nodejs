import 'dotenv/config'
import { Knex, knex as setupKnex } from 'knex'

if (!process.env.DATABASE_URL) {
  throw new Error('DATABASE_URL is not set, using default database')
}

export const config: Knex.Config = {
  client: 'sqlite',
  connection: {
    filename: process.env.DATABASE_URL,
  },
  useNullAsDefault: true,
  migrations: {
    extension: 'ts',
    directory: './db/migrations',
  },
}

export const knex = setupKnex(config)
