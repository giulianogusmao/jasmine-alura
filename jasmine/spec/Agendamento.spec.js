describe('Agendamento', () => {
    var paciente;
    var consulta;
    var agenda;
    var novaConsulta;

    beforeEach(() => {
        paciente = new PacienteBuilder();
        agenda = new Agenda();
        consulta = new Consulta(paciente, ['raio-x', 'b'], true, false, new Date(2017, 1, 1));
        novaConsulta = agenda.retorno(consulta);
    });
    
    it('Deve agendar como retorno', () => {
        expect(consulta.isRetorno()).not.toBe(true);
        expect(novaConsulta.isRetorno()).toBe(true);
    });

    it('Deve agendar para 20 dias depois', () => {
        expect(novaConsulta.getData().toString()).toEqual(new Date(2017, 1, 21).toString());
    });

    it('Deve pular fins de semana', () => {        
        consulta = new Consulta(paciente, ['raio-x', 'b'], true, true, new Date(2017, 8, 3));
        novaConsulta = agenda.retorno(consulta);
        expect(novaConsulta.getData().toString()).toEqual(new Date(2017,8,25).toString());
    });
});