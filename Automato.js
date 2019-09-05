import {State} from './State';

export class Automation {
    constructor () {
        this.states = [];
        this.initialState = undefined;
    }
    set state (id, final = false) {
        this.state.push(new State(id, final));
    }

    get state (id) {
        for (let s in this.states) {
            if (s.id === id) return s;
        }
        return undefined;
    }

    set transition (origin, alphabet, destination, direction = undefined, action = undefined) {
        if (typeof(origin) === typeof("")) origin = this.state(origin);
        if (typeof(destination) === typeof("")) destination = this.state(destination);
        origin.transition(alphabet, destination, direction, action);
    }
}