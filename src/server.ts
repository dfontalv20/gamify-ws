import express, { json, urlencoded, Request, Response, NextFunction, } from 'express';
import { default as initRoutes } from './routes';
import 'dotenv/config';
import helmet from 'helmet';
import cors from 'cors';
import { connect as connectDatabase } from './models';
import { logger, errorLogger } from './middlewares/logger';


// Monto el app en express
const app = express();




// Middlewares
app.use(json()); // Habilito el parseo de las peticiones en json
app.use(urlencoded({ extended: true })); // Habilito el parseo de x-url-encoded-form de manera extendida
app.use(helmet()); // Protección de cabeceras
app.use(cors()); // CORS
app.use(logger);
app.use(errorLogger);
initRoutes(app);
connectDatabase();


app.use((err: any, req: Request, res: Response, next: NextFunction) => {
    return res.status(500).send();
})
app.listen(process.env.PORT || 8001, () => {
    console.log('Server Running...');
});


export default app;

