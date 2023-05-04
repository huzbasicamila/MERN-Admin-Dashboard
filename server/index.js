import express from 'express';
import bodyParser from 'body-parser';
import mongoose from 'mongoose';
import cors from 'cors';
import dontenv from 'dotenv';
import helmet from 'helmet';
import morgan from 'morgan';

import clientRoutes from './routes/client.js';
import generalRoutes from './routes/general.js';
import menagmentRoutes from './routes/menagment.js';
import salesRoutes from './routes/sales.js';

//CONGIG

dontenv.config();
const app = express();
app.use(express.json());
app.use(helmet());
app.use(helmet.crossOriginResourcePolicy({ policy: 'cross-origin'}));
app.use(morgan('common'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false}));
app.use(cors());

// routes
app.use("/client", clientRoutes);
app.use("/general", generalRoutes);
app.use("/menagment", menagmentRoutes);
app.use("/sales", salesRoutes);

//mongoose setup

const PORT=process.env.PORT || 9000;
mongoose.connect(process.env.MONGO_URL, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
}).then(()=> {
    app.listen(PORT, () => console.log(`Server port: ${PORT}` ))
}).catch((error)=> console.log(`${error} did not connect` ));
