import dotenv from 'dotenv';
dotenv.config();

export const config = {
  port: process.env.PORT ?? 8080,
  jwtSecret: process.env.JWT_SECRET ?? 'jwt-example-key',
  mongoUri: process.env.MONGO_URI ?? 'mongodb://rootuser:rootpassword@localhost:27017/landsat-db?authSource=admin',
  privateKeyPath: process.env.PRIVATE_KEY_PATH ?? 'private.pem',
  publicKeyPath: process.env.PUBLIC_KEY_PATH ?? 'public.pem',
  expirationTime: process.env.EXPIRATION_TIME ?? '14d',
  emailAddress: process.env.EMAIL_ADDRESS ?? 'landfinder.noreply@gmail.com',
  emailPassword: process.env.EMAIL_PASSWORD ?? 'landfinder-password',
  frontendUrl: process.env.FRONTEND_URL ?? 'http://localhost:3000',
  dataApiUrl: process.env.DATA_API_URL ?? 'http://localhost:8080',
};
