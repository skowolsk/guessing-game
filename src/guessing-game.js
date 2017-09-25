class GuessingGame {
    constructor() {
        this._number = null;
        this._numMin = null;
        this._numMax = null;
    }

    setRange(min, max) {
        this._numMin = min;
        this._numMax = max;
        this._number = Math.floor( this._numMin + (this._numMax - this._numMin)/2 );
    }

    guess() {
        this._number = Math.floor( this._numMin + (this._numMax - this._numMin)/2 );
        return this._number;
    }

    lower() {
        this._numMax = this._number;
    }

    greater() {
        this._numMin = this._number;

    }
}

module.exports = GuessingGame;
