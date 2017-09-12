describe('Paciente', () => {
    var paciente;

    beforeEach(() => {
        paciente = new Paciente("Fulano", 28, 72, 1.82);
    });
    
    it('deve calcular o imc', () => {
        expect(paciente.imc()).toEqual(72 / (1.82 * 1.82));
    });
});