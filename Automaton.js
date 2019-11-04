function Automation () {
    this.states = [];
    this.initialState = undefined;
}
Automation.prototype.setState = (id, final = false, action = undefined) => {
    this.state.push(new State(id, final, action));
}

Automation.prototype.getState = (id) => {
        for (let s in this.states) {
            if (s.id === id) return s;
        }
        return undefined;
    }

Automation.prototype.setTransition = (origin, alphabet, destination, direction = undefined, action = undefined) => {
    if (typeof(origin) === typeof("")) origin = this.state(origin);
    if (typeof(destination) === typeof("")) destination = this.state(destination);
    origin.transition(alphabet, destination, direction, action);
}

Automation.prototype.check = function (word, state = this.initialState) {}