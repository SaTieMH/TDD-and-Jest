const student = require('./student');

//função que descreve os testes
describe('Testes para alunos', function() {
    //os testes de fato (function)
    it('Deve retornar 10 quando as notas forem 5, 3 e 2', function() {
        const notes = [5, 3, 2];
        expect(student.sum(notes)).toEqual(10);
    });

    test('Deve retornar zero quando uma das notas for zero', function() {
        const notes = [1, 2, 3, 0];
        expect(student.sum(notes)).toEqual(0);
    });
    
    it('Deve dobrar a nota quando o aluno tiver mais de cinco notas', function() {
        const notes = [1, 2, 3, 4, 5, 6, 7, 8];
        expect(student.sum(notes)).toEqual(72);
    });

    it('Deve dobrar a nota caso a soma seja maior que 9', function() {
        const notes = [1, 2, 10];
        expect(student.sum(notes)).toEqual(23);
    })
});