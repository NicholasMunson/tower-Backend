# My Bevs Node Backend API

A RESTful API for managing beer and wine collections, built with Node.js, Express, and PostgreSQL.

## Features

- **Beer Management**: Full CRUD operations for beer entries
- **Wine Management**: Full CRUD operations for wine entries
- **Database Integration**: PostgreSQL with Knex.js query builder
- **Environment Support**: Development and production configurations
- **Error Handling**: Comprehensive error handling and logging
- **CORS Enabled**: Cross-origin resource sharing for frontend integration

## Tech Stack

- **Runtime**: Node.js
- **Framework**: Express.js
- **Database**: PostgreSQL
- **Query Builder**: Knex.js
- **Environment**: dotenv
- **Logging**: Morgan
- **CORS**: cors middleware

## API Endpoints

### Beer Endpoints

- `GET /beer` - Get all beers
- `GET /beer/:id` - Get beer by ID
- `POST /beer` - Create new beer
- `PUT /beer/:id` - Update beer by ID
- `DELETE /beer/:id` - Delete beer by ID

### Wine Endpoints

- `GET /wine` - Get all wines
- `GET /wine/:id` - Get wine by ID
- `POST /wine` - Create new wine
- `PUT /wine/:id` - Update wine by ID
- `DELETE /wine/:id` - Delete wine by ID

## Database Schema

### Beer Table

- `id` (increments, primary key)
- `brewery` (string)
- `name` (string)
- `style` (string)
- `ABV` (float)
- `rating` (integer)
- `notes` (string)

### Wine Table

- `id` (increments, primary key)
- `winery` (string)
- `style` (string)
- `region` (string)
- `ABV` (float)
- `rating` (integer)
- `notes` (string)

## Installation

1. **Clone the repository**

   ```bash
   git clone https://github.com/NicholasMunson/my-bevs-node-backend.git
   cd my-bevs-node-backend
   ```

2. **Install dependencies**

   ```bash
   npm install
   ```

3. **Set up environment variables**
   Create a `.env` file in the root directory:

   ```env
   NODE_ENV=development
   PORT=3000
   DATABASE_URL=postgres:///myBevs
   ```

4. **Set up the database**

   ```bash
   # Run migrations
   npm run migrate

   # Seed the database
   npm run seed
   ```

5. **Start the development server**
   ```bash
   npm run dev
   ```

## Scripts

- `npm start` - Run migrations, seed database, and start production server
- `npm run dev` - Start development server with nodemon
- `npm run migrate` - Run database migrations
- `npm run seed` - Seed the database with sample data

## Environment Configuration

### Development

- Database: Local PostgreSQL (`postgres:///myBevs`)
- Port: 3000
- Environment: development

### Production

- Database: External PostgreSQL (via `DATABASE_URL`)
- Port: Environment variable or 3000
- Environment: production

## Deployment

### Render.com Deployment

1. **Create a PostgreSQL database on Render**

   - Go to Render dashboard
   - Create new PostgreSQL database
   - Copy the external database URL

2. **Set environment variables in Render**

   - `NODE_ENV` = `production`
   - `DATABASE_URL` = your PostgreSQL connection string

3. **Deploy your service**
   - Connect your GitHub repository
   - Set build command: `npm run build`
   - Set start command: `npm start`

### Important Notes for Production

- **Database URL**: Use the external database URL from your cloud provider
- **SSL**: Render handles SSL automatically - don't add `?ssl=true`
- **Migrations**: Run automatically on deployment via the start script
- **Seeding**: Runs automatically on deployment via the start script

## API Usage Examples

### Create a Beer

```bash
curl -X POST http://localhost:3000/beer \
  -H "Content-Type: application/json" \
  -d '{
    "brewery": "Sierra Nevada",
    "name": "Pale Ale",
    "style": "American Pale Ale",
    "ABV": 5.6,
    "rating": 8,
    "notes": "Classic American pale ale"
  }'
```

### Get All Wines

```bash
curl http://localhost:3000/wine
```

### Update a Beer

```bash
curl -X PUT http://localhost:3000/beer/1 \
  -H "Content-Type: application/json" \
  -d '{
    "rating": 9,
    "notes": "Updated rating"
  }'
```

### Delete a Wine

```bash
curl -X DELETE http://localhost:3000/wine/1
```

## Error Handling

The API includes comprehensive error handling:

- **404 Not Found**: For non-existent routes
- **500 Internal Server Error**: For server-side errors with detailed logging
- **Database Connection Errors**: Automatic connection validation
- **Validation Errors**: Proper error responses for invalid data

## Database Migrations

Migrations are located in the `migrations/` directory:

- `20180624175916_beer.js` - Creates the beer table
- `20180624175928_wine.js` - Creates the wine table

## Database Seeds

Seed files are located in the `seeds/` directory:

- `01_wineList.js` - Sample wine data
- `02_beerList.js` - Sample beer data

## Troubleshooting

### Common Issues

1. **Database Connection Errors**

   - Ensure PostgreSQL is running locally
   - Check database URL format
   - Verify environment variables

2. **Migration Errors**

   - Run `npm run migrate:rollback` to undo migrations
   - Check migration files for syntax errors

3. **Port Already in Use**
   - Change PORT in `.env` file
   - Kill existing processes on port 3000

### Development Tips

- Use `npm run dev` for development with auto-restart
- Check console logs for detailed error messages
- Use database admin tools to verify data

## Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Test thoroughly
5. Submit a pull request

## License

ISC License

## Author

Nicholas Munson

## Repository

https://github.com/NicholasMunson/my-bevs-node-backend
