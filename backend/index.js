import dotenv from 'dotenv';
dotenv.config();

import cors from 'cors';
import express from 'express';
import { expressMiddleware } from '@as-integrations/express5';
import { connectDB } from './src/config/database.js';
import { setupExpressApp } from './src/config/express.js';
import { setupApolloServer } from './src/config/apollo.js';

await connectDB();

const app = setupExpressApp();
const server = setupApolloServer();

await server.start();

app.use(
    "/graphql",
    cors(),
    express.json(),
    expressMiddleware(server)
);

const PORT = process.env.PORT || 4000;
app.listen(PORT, () => {
    console.log(`🚀 Server running on http://localhost:${PORT}/graphql`);
});