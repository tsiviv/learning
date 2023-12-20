# learning
# Node.js Server Assignment



## Installation

To get started, follow these steps:

1. Clone this repository to your local machine.
2. Install the required dependencies by running `npm install`.
3. Create a `.env` file and add your database credentials, as shown below:

```
DB_HOST=your_database_host
DB_PORT=your_database_port
DB_NAME=your_database_name
DB_USERNAME=your_database_username
DB_PASSWORD=your_database_password
```

4. Run the migration to create the database tables by running `npx sequelize-cli db:migrate`.
5. Start the application by running `npm start` or `npm run dev` for development.

## Usage

Once the application is running, you can access it by navigating to `http://localhost:3000` in your web browser. You can modify the application's behavior by editing the files in the `src` directory. 

## Dependencies

This application relies on the following dependencies:

- `dotenv`: For loading environment variables from a `.env` file.
- `express`: For building the web server.
- `fs`: For working with the file system.
- `mysql2`: For connecting to MySQL database.
- `sequelize`: For ORM and database management

