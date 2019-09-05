import { Transition } from './Transition';

export class State {
    constructor(id,final = false, action = undefined) {
        this.id = id;
        this.final = final;
        this.action = action;
        this.transitions = [];
    }

    set transitions (alphabet, destination, direction = undefined, action = undefined) {
        this.transitions.push(new Transition(alphabet, destination, direction, action));
    }
}