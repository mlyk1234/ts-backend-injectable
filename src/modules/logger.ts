export default class Logger {
    public msg: string | null | undefined
    constructor() {}

    public log(msg: string | null | undefined) {
        console.log(msg);
    }
}