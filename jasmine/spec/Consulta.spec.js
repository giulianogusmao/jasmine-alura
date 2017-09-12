describe('Consulta', () => {
    var paciente;

    beforeEach(() => {
        paciente = new Paciente("Fulano", 28, 72, 1.82);
    });

    it('nao deve cobrar nada se for retorno', () => {
        let consulta = new Consulta(paciente, ['raio-x', 'b'], true, true);
        expect(consulta.preco()).toEqual(0);
    });
    
    it('deve cobrar preco expecifico do procedimento', () => {
        let consulta = new Consulta(paciente, ['raio-x'], false, false);
        expect(consulta.preco()).toEqual(55);
    });
    
    it('deve cobrar 25 por cada procedimento comum', () => {
        let consulta2 = new Consulta(paciente, ['a', 'b', 'procedimento n'], false, false);
        expect(consulta2.preco()).toEqual(75);
    });
    
    it('deve cobrar 50 por cada procedimento comum particular', () => {
        let consulta2 = new Consulta(paciente, ['a', 'b'], true, false);
        expect(consulta2.preco()).toEqual(100);
    });
});