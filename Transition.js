function Transition (alphabet, destination, direction = undefined, action = undefined) {
    this.alphabet = alphabet;
    this.destination = destination;
    this.direction = direction;
    if (this.direction !== undefined) {
        this.direction.toUpperCase();
        if (this.direction !== 'R') this.direction = 'L';
    }
    this.action = action;
}