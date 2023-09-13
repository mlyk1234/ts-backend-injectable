import express, { Application } from 'express'
import cors, { CorsOptions } from 'cors'
import cookieParser from 'cookie-parser'
import bodyParser from 'body-parser';
import { Arbitrage } from './services/arbitrage';
import { ServiceLoader } from './services';

export class Server {
    public app: Application
    public port: string | number

    constructor({controllers, services, port}: {controllers: any[], services: ServiceLoader[], port: string | number}) {
        this.app = express()
        this.port = port
        this.initialMiddlewares()
        this.initialServices(services)
        this.initialControllers(controllers)
    }

    private initialMiddlewares() {
        const corsOptions: CorsOptions = {
            origin: '*',
        }
        this.app.use(cors(corsOptions))
        this.app.use(cookieParser())
        this.app.use(bodyParser.json())
        this.app.use(bodyParser.urlencoded({ 
            extended: true,
        }))
    }

    private initialServices(services: ServiceLoader[]) {
        services.forEach((_svs) => {
            console.log('[Dispatched]', _svs.name)
            _svs.dispatch().eagerLoad()
        })
    }

    private initialControllers(controllers: any[]) {
        controllers.forEach((_ctr) => {
            this.app.use('/', _ctr.router)
        })
    }

    public async listen() {
        this.app.listen(this.port, () => {
            console.log(`App listening on the port ${this.port}`);
        })
    }
}

export default Server