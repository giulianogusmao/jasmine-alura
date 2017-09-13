class Romanos {
    convert(romano) {
        var n = 0,
            r = romano;

        if (!romano) return n;

        // pré validações
        // ---------------------------------------------------------------------------------
        var preValidators = [
            /III./              // qqr coisa depois de 3 I
            , /I{2,}[^I]/       // mais de 1 I antes de outro algarismo
            , /XXXX/
            , /X{3,}[^XIV]/       // mais de 1 X antes de outro algarismo
            , /V[^I]/];

        for (let i = 0, max = preValidators.length; i < max; i++) {
            let reg = preValidators[i];

            if (reg.test(r))
                return 'inválido';
        };

        
        
        // realiza operacoes
        // ---------------------------------------------------------------------------------
        
        romano += ';' // determina ultimo algarismo

        var comuns = [
              ['V', 5]
            , ['L', 50]
            , ['C', 100]
            , ['D', 500]
            , ['M', 1000]
        ];

        var especiais = [
              ['I', 1]
            , ['X', 10]
        ];

        for (let i = 0, max = romano.length; i < max; i++) {
            let letra = romano.substr(i, 1),
            next = romano.substr(i + 1, 1);
            
            // comuns
            for (let j = 0, max = comuns.length; j < max; j++) {                
                if (new RegExp(comuns[j][0]).test(letra)) {
                    n += comuns[j][1];
                }
            };

            // especiais
            for (let j = 0, max = especiais.length; j < max; j++) {                
                if (new RegExp(especiais[j][0]).test(letra)) {
                    if (new RegExp(`[${especiais[j][0]};]`).test(next))
                        n += especiais[j][1];
                    else
                        n -= especiais[j][1];
                }
            };

            // // especiais
            // if (/I/.test(letra)) {
            //     if (/[I;]/.test(next))
            //         n += 1;
            //     else
            //         n -= 1;
            // }

            // // comuns
            // if (/V/.test(letra))
            //     n += 5;
        }

        return n;
    }
}