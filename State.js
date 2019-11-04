import { Transition } from './Transition';

function State (id,final = false, action = undefined) {
    this.id = id;
    this.final = final;
    this.action = action;
    this.transitions = [];
}

State.prototype.setTransitions = (alphabet, destination, direction = undefined, action = undefined) => {
    this.transitions.push(new Transition(alphabet, destination, direction, action));
}