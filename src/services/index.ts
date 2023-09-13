import { Arbitrage } from "./arbitrage";
import Other from "./others";

export type ServiceLoader = {
    name: string,
    dispatch: () => Arbitrage | Other
}

export const mappedServices: ServiceLoader[] = [
    {
        name: Arbitrage.name,
        dispatch: () => new Arbitrage({
            interval: 0,
            exchange: 'FXTSU'
        })
    }, {
        name: Other.name,
        dispatch: () => new Other
    }
]