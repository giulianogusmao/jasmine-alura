class Consulta {
    constructor (paciente, procedimentos, particular, retorno) {
        this.paciente = paciente;
        this.procedimentos = procedimentos;
        this.particular = particular;
        this.retorno = retorno;
    }

    preco () {
        let total = 0;

        if (this.retorno) return total;

        this.procedimentos.forEach(procedimento => {
            switch(procedimento) {
                case 'raio-x': 
                    total += 55;
                    break;
                case 'gesso': 
                    total += 32;
                    break;
                default:
                    total += 25;
            }
        });
        
        return this.particular ? total * 2 : total;
    }
}