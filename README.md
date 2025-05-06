# 🏦 Projeto Sistema PIX

## 📝 Descrição
Sistema de simulação de transferências PIX implementado em JavaScript utilizando conceitos de programação orientada a objetos. Este projeto foi desenvolvido para práticas e estudos de classes, construtores e métodos em JavaScript.

## 💡 Funcionalidades
- Criação de contas bancárias com nome de usuário e saldo inicial
- Transferências PIX entre contas utilizando saldo disponível
- Transferências PIX usando crédito com cálculo de IOF
- Recebimento de transferências com atualização de saldo
- Registro de data e hora das transações
- Validações de transações (saldo suficiente, valor positivo, usuário diferente)

## 🚀 Funcionalidades Implementadas
- ✅ Transferência PIX usando saldo em conta
- ✅ Transferência PIX usando crédito (com IOF)
- ✅ Registro de data e hora das transações no fuso horário brasileiro
- ✅ Validações de segurança para transações

## 🛠️ Tecnologias Utilizadas
- JavaScript ES6+
- Classes e Construtores
- Date API

## 📊 Estrutura do Código

### Classe BankAccount
A classe principal que simula uma conta bancária com as seguintes propriedades:
- `username`: Nome do titular da conta
- `amountInTheAccount`: Saldo disponível na conta
- `transferDate`: Data e hora da transação
- `iofPerMonth`: Valor do IOF mensal calculado

### Métodos Principais
- `calculateIof()`: Calcula o IOF mensal (0.082 * 30)
- `pixTransfer(amountSent, beneficiary, typeTransation)`: Método principal para transferências PIX
- `verifyTransationPix(amountSent, beneficiary)`: Verifica e processa transferências com saldo em conta
- `verifyTransationPixOnCredit(amountSent)`: Verifica e processa transferências usando crédito
- `pixReceipt(amountReceived, sender)`: Processa o recebimento de transferências

## 🔄 Tipos de Transação
- Tipo 1: PIX usando saldo em conta
- Tipo 2: PIX usando crédito (com aplicação de IOF)

## 💻 Como Usar

### Criando Contas
```javascript
let contaRegis = new BankAccount('Regis Michael', 400.00);
let contaJoao = new BankAccount('João Silas', 590.00);
```

### Realizando Transferências
```javascript
// Transferência PIX usando saldo em conta (tipo 1)
let valorTransferido = contaJoao.pixTransfer(400.00, contaRegis.username, 1);

// Registrando o recebimento
contaRegis.pixReceipt(valorTransferido, contaJoao.username);
```

### Transferência no Crédito
```javascript
// Transferência PIX usando crédito (tipo 2)
let valorComIOF = contaJoao.pixTransfer(300.00, contaRegis.username, 2);
```

## 📋 Exemplo de Saída
```
Você enviou uma transferência para Regis Michael de R$ 400.00, 06/05/2025, 14:30:45
Seu saldo na conta atual é de 190.00
Total na conta do recebedor: R$ 397.54
Você recebeu uma transferência de João Silas no valor de R$ 400.00
```

## 📈 Próximos Passos
- Implementar interface gráfica para interação com usuário
- Adicionar histórico de transações
- Implementar persistência de dados
- Adicionar autenticação para transações
- Expandir para outros tipos de transferências bancárias

## 🧪 Testes
O sistema inclui validações para diversos cenários:
- Tentativa de transferência com valor inválido
- Transferência para a mesma conta
- Transferência com saldo insuficiente
- Cálculo correto de IOF para transferências no crédito

## 👨‍💻 Como Contribuir
1. Faça um fork do projeto
2. Crie uma branch para sua feature (`git checkout -b feature/nova-feature`)
3. Commit suas mudanças (`git commit -m 'Adiciona nova feature'`)
4. Push para a branch (`git push origin feature/nova-feature`)
5. Abra um Pull Request

## 📝 Notas de Desenvolvimento
Este projeto foi criado para estudo e prática de conceitos de POO em JavaScript.
As dificuldades encontradas com merge entre repositórios local e remoto foram documentadas para referência futura.

## 📜 Licença
Este projeto está licenciado sob a licença [MIT](LICENSE).
