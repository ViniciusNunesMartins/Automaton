var MT = () => Automation.call(this);

MT.prototype.setStateAccept = (state) => {
    if (typeof(state) === typeof(""))
        state = this.state(state);
    this.stateAccept = state;
}

MT.prototype.setStateReject = (state) => {
    if (typeof(state) === typeof(""))
        state = this.state(state);
    this.stateReject = state;
}
    
MT.prototype.check = (word, state = this.initialState, index = 0) => {
    if (index < 0) index = 0;
    if (state === this.stateAccept) return true;
    if (state === this.stateReject) return false;
    for (let t in state.transitions) {
        if (t.alphabet.indexOf(word[index]))
            if (t.action !== undefined) t.action();
            if (t.direction === 'R')
                return this.check(word, t.destination, index++);
            else
                return this.check(word, t.destination, index--);
                
    }
    state.action();
    return false;
}