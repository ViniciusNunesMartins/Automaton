import { Automation } from './Automato';

export class AFD extends Automation {
    set transition (origin, alphabet, destination, direction = undefined, action = undefined) {
        if (typeof(origin) === typeof(''))
            origin = this.state(origin);
        if (typeof(destination) === typeof(''))
            destination = this.state(destination);
        if (alphabet.indexOf('') === -1)
            origin.transition(alphabet, destination, direction, action);
    }

    check(word, state = this.initialState) {
        if (word === "") return state.final;
        for (let t in state.transition) {
            if (t.alphabet.indexOf(word[0]) > -1)
                return this.check(word.substring(1, word.length), t.destination);
        }
        return false;
    }
}