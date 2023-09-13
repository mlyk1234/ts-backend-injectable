import express, { Express, Request, Response } from 'express';
import dotenv from 'dotenv';
import Server from './server';
import { mappedServices } from './services';

dotenv.config();
const PORT = process.env.PORT || 8080

const server = new Server({
    controllers: [],
    services: mappedServices,
    port: PORT,
})

server.listen().catch(err => {
    console.log('Unhandled error: ', err)
})