// Update with your config settings.

module.exports = {

  development: {
    client: 'mysql',
    connection: {
      host:     'localhost',
      database: 'nodeblog',
      user:     'nodeblog',
      password: 'nodeblog'
    },
    pool: {
      min: 1,
      max: 2
    },
    migrations: {
      tableName: 'migrations',
    }
  },

  staging: {
    client: 'pg',
    connection: {
      host:     process.env.DATABASE_URL,
      database: process.env.DATABASE_DATABASE,
      user:     process.env.DATABASE_USER,
      password: process.env.DATABASE_PASSWORD,
      port:     process.env.DATABASE_PORT,
      ssl:      true
    },
    pool: {
      min: 2,
      max: 10
    },
    migrations: {
      tableName: 'migrations'
    }
  },

  production: {
    client: 'postgresql',
    connection: {
      database: 'my_db',
      user:     'username',
      password: 'password'
    },
    pool: {
      min: 2,
      max: 10
    },
    migrations: {
      tableName: 'knex_migrations'
    }
  }

};
