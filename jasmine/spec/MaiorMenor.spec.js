describe('Maior e Menor', () => {
    var algoritmo;

    beforeEach(() => {
        algoritmo = new MaiorMenor();
    });

    afterEach(() => {
        expect(algoritmo.getMaior()).toEqual(8);
        expect(algoritmo.getMenor()).toEqual(5);
    });

    it('deve entender numeros em ordem não sequencial', () => {
        algoritmo.encontra([7, 5, 8, 6]);
    });

    it('deve entender numeros em ordem crescente', () => {
        algoritmo.encontra([5, 6, 7, 8]);
    });

    it('deve entender numeros em ordem decrescente', () => {
        algoritmo.encontra([8, 7, 6, 5]);
    });
});

describe('Maior e Menor 1 elemento', () => {    
    it('deve ser o mesmo valor para 1 único numero', () => {
        let algoritmo = new MaiorMenor();
        let n = 8;

        algoritmo.encontra([n]);
        expect(algoritmo.getMaior()).toEqual(n);
        expect(algoritmo.getMenor()).toEqual(n);
        expect(algoritmo.getMaior()).toEqual(algoritmo.getMenor());
    });
});