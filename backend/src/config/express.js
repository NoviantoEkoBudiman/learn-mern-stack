import express from 'express';
import cors from 'cors';

export const setupExpressApp = () => {
    const app = express();
    
    app.disable('x-powered-by');
    
    app.use(cors());
    app.use(express.json());

    return app;
}