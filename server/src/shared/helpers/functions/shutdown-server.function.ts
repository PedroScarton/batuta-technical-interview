import { Server } from 'http';

import { Logger } from '../classes/logger.class';

export const shutdownServer = (message = '💥 Shutting down...', server: Server, error?: Error) => {
  if (error) {
    Logger.error(message);
    Logger.error(`${error.name} ${error.message}`);
  } else {
    Logger.warning(message);
  }

  server.close(async () => {
    Logger.warning('💥 Process terminated');
    process.exit(error ? 1 : 0);
  });
};
