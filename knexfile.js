module.exports = {

  development: { 
    client: 'pg',
    connection:'postgres:///myBevs'
  },

  production: {
    client: 'pg',
    connection: process.env.DATABASE_URL + "?ssl=true"
  }

};
