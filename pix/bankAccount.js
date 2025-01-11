    class BankAccount{
        constructor (username, amountInTheAccount)
        {
            this.username = username;
            this.amountInTheAccount = amountInTheAccount;
            this.transferDate = new Date().toLocaleString('pt-BR', {timeZone: 'America/Sao_Paulo'});
            this.iofPerMonth = this.calculateIof();
        }

        calculateIof()
        {
            return 0.082 * 30;
        }

        pixTransfer(amountSent, beneficiary, typeTransation)
            {

                if(amountSent <= 0)
                {
                    console.log('Valor inválido para transferência.');
                    return 0;
                }

                if(beneficiary === this.username)
                {
                    console.log('Você não consegue enviar um valor para mesma titularidade.');
                    return 0;
                }

            if(typeTransation == 1)
            {
                return this.verifyTransationPix(amountSent, beneficiary);
            }
            else if (typeTransation == 2)
            {   
                return this.verifyTransationPixOnCredit(amountSent);
            }
            else
            {
                console.log('Tipo de transação inválida.');
                return 0;
            }
        }

        verifyTransationPix(amountSent, beneficiary)
        {
            if(amountSent > this.amountInTheAccount)
            {
                console.log('Valor enviado maior que o que você possui em conta!');
                return 0;
            }
            this.amountInTheAccount -= amountSent;
            console.log(`Você enviou uma transferência para ${beneficiary} de R$ ${amountSent.toFixed(2)}, ${this.transferDate}`);
            console.log(`Seu saldo na conta atual é de ${this.amountInTheAccount.toFixed(2)}`);
            return amountSent;
        }

        verifyTransationPixOnCredit(amountSent)
        {
            const total = amountSent + this.iofPerMonth;
            console.log(`O valor com os juros IOF fica no total de ${total.toFixed(2)}`);
            return total;
        }

        pixReceipt(amountReceived,sender)
        {
            if(amountReceived <= 0)
            {
                console.log('Nenhum envio.');
                return 0;
            }
            
            this.amountInTheAccount += amountReceived;
            const balanceAfterIof = this.amountInTheAccount - this.iofPerMonth;
            console.log('Total na conta do recebedor: R$ ', balanceAfterIof.toFixed(2));
            return console.log(`Você recebeu uma transferência de ${sender} no valor de R$ ${amountReceived.toFixed(2)}`);
        }
    }

    let regis = new BankAccount('Regis Michael', 400.00);
    let joao = new BankAccount('João Silas', 590.00);

    
    // type 1 -> Pix amount in the account
    // type 2 -> Pix on credit
    
    // joao.pixReceipt(joao.pixTransfer(200.00, regis.username, '1'), joao.username);
    regis.pixReceipt(joao.pixTransfer(400.00, regis.username, '1'), joao.username);