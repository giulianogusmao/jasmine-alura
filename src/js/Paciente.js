class Paciente {
    constructor(nome, idade = 0, peso = 0, altura = 0) {
        this.nome = nome;
        this.idade = idade;
        this.peso = peso;
        this.altura = altura;
    }

    imprime () {
        let msg = `Nome: ${this.nome} tem ${this.idade} anos.`;
        console.log(msg);
        return msg;
    }

    batimentos () {
        return this.idade * 365 * 24 * 60 * 80;
    }

    imc () {
        let imc;

        try {
            imc = this.peso / (this.altura * this.altura);
        } catch (e) {}
        
        return imc;        
    }
}