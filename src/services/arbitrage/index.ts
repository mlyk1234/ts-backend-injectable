import Logger from "../../modules/logger"
import { EagerLoadable } from "../../shared/implementations/eagerload.class"
import { _SUPPORTED_EXCHANGE } from "./supported_exchange"

const DEFAULT_SPEAD = 5

export class Arbitrage implements EagerLoadable {
    public interval: number
    public spread: number = DEFAULT_SPEAD
    public exchange: typeof _SUPPORTED_EXCHANGE[number]['name'] 

    constructor(
        {interval, exchange}: 
        {interval?: number, exchange: string}) 
    {
        this.interval = interval ?? 0
        this.isSupportedExchange(exchange)
        this.exchange = exchange
    }

    public setExchange() {

    }

    public inspectOpportunities() {

    }

    public setSpread(value: number) {
        this.spread = value
    }

    private isSupportedExchange(exchange: string) {
        if (!_SUPPORTED_EXCHANGE.some(supported => supported.name === exchange)) {
            throw new Error('Exchange not supported');
        }
    }

    public eagerLoad() {
        console.log('Eager loading')
    }
}