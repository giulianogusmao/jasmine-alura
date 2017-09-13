describe('Consulta', () => {
    var paciente;

    beforeEach(() => {
        paciente = new PacienteBuilder();
    });

    describe('Consultas retorno', () => {
        it('nao deve cobrar nada se for retorno', () => {
            let consulta = new Consulta(paciente, ['raio-x', 'b'], true, true);
            expect(consulta.preco()).toEqual(0);
        });
    });

    describe('Consultas por convênio', () => {
        it('deve cobrar preco expecifico do procedimento', () => {
            let consulta = new Consulta(paciente, ['raio-x'], false, false);
            expect(consulta.preco()).toEqual(55);
        });

        it('deve cobrar 25 por cada procedimento', () => {
            let consulta = new Consulta(paciente, ['a', 'b', 'procedimento n'], false, false);
            expect(consulta.preco()).toEqual(75);
        });
    });

    describe('Consultas Particulares', () => {
        it('deve cobrar o dobro do preco do procedimento', () => {
            let consulta = new Consulta(paciente, ['raio-x'], true, false);
            expect(consulta.preco()).toEqual(110);
        });

        it('deve cobrar 50 por cada procedimento comum', () => {
            let consulta2 = new Consulta(paciente, ['a', 'b'], true, false);
            expect(consulta2.preco()).toEqual(100);
        });
    });
});
