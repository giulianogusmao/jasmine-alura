describe('Paciente', () => {
    var paciente;

    beforeEach(() => {
        paciente = new PacienteBuilder();
    });
    
    it('deve imprimir o nome e a idade', () => {
        expect(paciente.imprime()).toContain(paciente.nome);
        expect(paciente.imprime()).toMatch(/\d{1,3}/);
    });
    
    it('deve calcular o imc', () => {
        expect(paciente.imc()).toEqual(paciente.peso / (paciente.altura * paciente.altura));
    });

    it('deve calcular os batimentos cardiacos', () => {
        expect(paciente.batimentos()).toEqual(paciente.idade *  365 * 24 * 60 * 80);
    });
});