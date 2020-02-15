import { EventEmitter } from 'events';



class CountdownStore extends EventEmitter {
    
    constructor(count=5, dispatcher) {
        super();
        this._count = count;
        this.dispatcherIndex = dispatcher.register(
            this.dispatch.bind(this)
        )
    }

    get count() {
        return this._count;
    }

    dispatch(payload) {
        let { type, count } = payload.action; // the error need to use LET
        switch(type) {
            case 'TICK':
                this._count -= 1;
                this.emit('TICK', this._count);
                return true;
            case 'RESET':
                this._count = count;
                this.emit('RESET', this._count);
                return true;
        }
    }
}

export default CountdownStore;