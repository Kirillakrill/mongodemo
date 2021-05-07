import express from 'express';
import bodyParser from 'body-parser';
import dot from 'dotenv';
import fs from 'fs';
import appSrc from './app.js';
import CORS from './CORS.js';

dot.config({ path: './.env' });
const { URL } = process.env;
const app = appSrc(express, bodyParser, fs, CORS);

app.listen(process.env.PORT ?? 4321, () => console.log('Server running...'));