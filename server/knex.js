module.exports = {
  development: {
    client: "mysql",
    connection: {
      host: "localhost",
      user: "",
      password: "rootroot",
      database: "journal_db",
      charset: "utf8",
    },
    migrations: {
      tableName: "knex_migrations",
      directory: "./migrations",
    },
    seeds: {
      directory: "./seeds",
    },
  },
};
