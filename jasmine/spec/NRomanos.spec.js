describe('Números Romanos', () => {
    var romanos;

    beforeEach(() => {
        romanos = new Romanos();
    });

    describe('soma simples', () => {
        it('0-3', () => {
            expect(romanos.convert('I')).toEqual(1);
            expect(romanos.convert('III')).toEqual(3);
        });

        it('4', () => {
            expect(romanos.convert('IV')).toEqual(4);
        });

        it('5-8', () => {
            expect(romanos.convert('V')).toEqual(5);
            expect(romanos.convert('VII')).toEqual(7);
        });

        it('9', () => {
            expect(romanos.convert('IX')).toEqual(9);
        });

        it('10-40', () => {
            expect(romanos.convert('X')).toEqual(10);
            expect(romanos.convert('XXX')).toEqual(30);
            expect(romanos.convert('XL')).toEqual(40);
        });

        it('50-100', () => {
            expect(romanos.convert('L')).toEqual(50);
            expect(romanos.convert('LX')).toEqual(60);
            expect(romanos.convert('LIX')).toEqual(59);
        });

        it('100-200', () => {
            expect(romanos.convert('C')).toEqual(100);
            expect(romanos.convert('CX')).toEqual(110);
            expect(romanos.convert('CXLVI')).toEqual(146);
            expect(romanos.convert('CLX')).toEqual(160);
            // expect(romanos.convert('CLXXXV')).toEqual(185);
        });
    });

    describe('inválidos', () => {
        it('V...', () => {
            expect(romanos.convert('VX')).toEqual('inválido');
            // expect(romanos.convert('VX')).toThrowError(TypeError);
        });

        it('IIII', () => {
            expect(romanos.convert('IIX')).toEqual('inválido');
        });

        it('IIX', () => {
            expect(romanos.convert('IIX')).toEqual('inválido');
        });

        xit('X...', () => {
            expect(romanos.convert('XXXX')).toEqual('inválido');
            expect(romanos.convert('XXC')).toEqual('inválido');
        });
    });
});