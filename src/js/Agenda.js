class Agenda {
    _calcRetorno (date) {
        let diasRetorno = 20;
        let novaData = calc(date, diasRetorno);

        // verifica se a nova data caiu no final de semana e joga para o próximo dia útil
        while(novaData.getDay() == 0 || novaData.getDay() == 6) {
            novaData = calc(novaData, 1);
        }

        return novaData;

        function calc (data, dias) {
            let date = new Date(data);
            date.setDate(date.getDate() + dias);
            return date;
        }
    }

    retorno (consulta) {
        let novaData = this._calcRetorno(consulta.getData());

        return new Consulta(
              consulta.paciente
            , consulta.procedimentos
            , consulta.particular
            , true
            , novaData
        )
    }
}