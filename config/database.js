module.exports = ({ env }) => ({
  connection: {
    client: 'postgres',
    connection: {
      host: env('DATABASE_HOST', 'dpg-cf8r2r9a6gdpabcda170-a'),
      port: env.int('DATABASE_PORT', 5432),
      database: env('DATABASE_NAME', 'portfolio_database_5m75'),
      user: env('DATABASE_USERNAME', 'portfolio'),
      password: env('DATABASE_PASSWORD', '5bNwCd3SftEEx3P1ZkXMITNLEw9AGc4p'),
      ssl: env.bool('DATABASE_SSL', true),
    },
  },
});
