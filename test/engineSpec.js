describe('engine', function () {
    describe('calc screen width for playfield', function () {
        it('should return 1024', function () {
            expect(1024).toEqual(engine.getWidth(1500,1300));
        });
        it('should return 600', function () {
            expect(600).toEqual(engine.getWidth(600,1500));
        });
        it('should return 600', function () {
            expect(600).toEqual(engine.getWidth(1500,600));
        });
        it('should return 1024', function () {
            expect(1024).toEqual(engine.getWidth(1680,1050));
        });
        it('should return 1050', function () {
            expect(1024).toEqual(engine.getWidth(1050,1680));
        });
    });
});