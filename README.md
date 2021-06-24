# Antes de começar os testes
```bash
@teste:~$ npm init

@teste:~$ npm install jest --save

@teste:~$ npx jest

@teste:~$ npx jest --watchAll
```

# TDD and Jest
## O que é TDD
1. Escrever o código (js)
2. Escrever o que deve ser validado em .todo
3. Escrever o teste (jest) que validará o código

*A ideia é que o teste falhe antes de dar certo*

## O que NÃO é TDD

1. Definir o que deve ser validado em .todo

2. Escrever o código (js) que irá retornar o valor esperado (ou não)

3. Escrever teste (jest) que validará o código escrito em 2.

4. Retornar no arquivo .todo e marcar a tarefa como feita (ou cancelada)

### Anotações
npx jest - testa se encontra meu arquivo de teste

npx jest --watchAll - vai ficar sempre escutando o que está contecendo para que não seja necessário ficar chamando várias vezes o teste a cada nova alteração

describe - função que descreve o que quer ser testado

