import express from 'express';
import bodyParser from 'body-parser';
import swaggerUi from 'swagger-ui-express';

import swaggerDocs from './swagger.json';
import router from './router';

const app = express();

const port = process.env.PORT || 5000;

app.use(bodyParser.json());

app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerDocs));

app.use(router)

app.listen(port, () => {
  console.log(`Server is listening on port ${port}.`);
});
