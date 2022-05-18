import express, { json, urlencoded, Request, Response, NextFunction, } from 'express';
import 'dotenv/config';
import helmet from 'helmet';
import cors from 'cors';
import { connect as connectDatabase } from './models';
import { logger, errorLogger } from './middlewares/logger';
import router from './routes';
import Validator from 'validatorjs';
import {default as initRules} from './middlewares/requests/customValidation';


// Monto el app en express
const app = express();

// Middlewares
app.use(json()); // Habilito el parseo de las peticiones en json
app.use(urlencoded({ extended: true })); // Habilito el parseo de x-url-encoded-form de manera extendida
app.use(helmet()); // Protección de cabeceras
app.use(cors()); // CORS
app.use(logger);
app.use(errorLogger);
Validator.useLang('es');

app.use(router);


initRules();
connectDatabase();


app.use((err: any, req: Request, res: Response, next: NextFunction) => {
    console.error(err);
    return res.status(500).send();
})
app.listen(process.env.PORT || 8001, () => {
    console.log('Server Running...');
});


export default app;

