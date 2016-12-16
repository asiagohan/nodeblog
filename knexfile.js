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
