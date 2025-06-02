import 'dotenv/config';

import express from 'express';
import Cors from 'cors';

// Importing middlewares
import Morgan from 'morgan';

// Importing env vars
import { PORT } from '@shared/constants/env';

// Importing routes
import userRoutes from '@services/routes/user.routes';

// Importing utils
import baseMiddleware from '@shared/middleware/basic-middleware';
import { Logger } from '@shared/helpers/classes/logger.class';
import reqLogger from '@shared/helpers/functions/req-logger.function';
import ErrorHandler from '@shared/middleware/error-handler';

// Starting express app
const app = express();

// Set up CORS Access
app.use(Cors({ credentials: true, origin: true }));

// Set up logger
app.use(Morgan(reqLogger));

// Set up event listeners
app.use('/user', baseMiddleware, userRoutes);

app.use(ErrorHandler);

// Port to listen on
app.set('PORT', PORT || 3000);

// Set up server
Logger.info(`** Server is listening on http://localhost:${app.get('PORT')} **`);
