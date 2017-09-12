class MaiorMenor {
    constructor (menor, maior) {
        this._menor = menor;
        this._maior = maior;
    }

    encontra (nums) {
        if (nums)
            [this._menor] = [this._maior] = nums;

        nums.forEach(num => {
            if (num < this._menor) this._menor = num;
            if (num > this._maior) this._maior = num;
        });
    }

    getMenor () {
        return this._menor;
    }

    getMaior () {
        return this._maior;
    }
}