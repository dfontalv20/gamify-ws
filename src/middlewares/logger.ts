import winston from 'winston';
import expressWinston from 'express-winston';

export const logger = expressWinston.logger({
    transports: [
        new winston.transports.Console()
    ],
    format: winston.format.combine(
        winston.format.timestamp({ format: 'YYYY-MM-DD HH:mm:ss' }),
        winston.format.printf(info => `[${info.timestamp}]  (${info.level}): ${info.message}`)
    ),
    msg: "HTTP {{req.method}} {{req.url}}",
    expressFormat: true,
    colorize: true
});

export const errorLogger = expressWinston.errorLogger({
    transports: [
        new winston.transports.Console()
    ],
    format: winston.format.combine(
        winston.format.colorize(),
        winston.format.json()
    ),
});