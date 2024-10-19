    class BankAccount{
        constructor (username, amountInTheAccount)
        {
            this.username = username
            this.amountInTheAccount = amountInTheAccount
            this.transferDate = new Date();
            this.transferDate.year = `${this.transferDate.getFullYear()}/${this.transferDate.getMonth() + 1}/${this.transferDate.getDate()}`
            this.transferDate.hours = `${this.transferDate.getHours()}:${this.transferDate.getMinutes()}:${this.transferDate.getSeconds()}`
        }

        pixTransfer(amountSent, beneficiary)
        {
            if(beneficiary === this.username)
            {
                console.log('Você não consegue enviar um valor para mesma titularidade.')
                return 0
            }
            else
            {
                if(amountSent > this.amountInTheAccount)
                    {
                        console.log('Valor enviado maior que o que você possui em conta!')
                        amountSent = 0
                        return parseFloat(amountSent.toFixed(2))
                    }
                    else
                    {
                        console.log(`Você enviou uma transferência para ${beneficiary} de R$ ${amountSent.toFixed(2)}`);
                        this.amountInTheAccount -= amountSent  
                        console.log(`Seu saldo na conta atual é de ${this.amountInTheAccount.toFixed(2)}`)
                        console.log(`Pix enviado com sucesso! ${this.transferDate.ano} - ${this.transferDate.horas}`)
                        return parseFloat(amountSent.toFixed(2))
                    }
            }
        }
        
        pixReceipt(amountReceived,sender)
        {
            if(amountReceived <= 0)
            {
                console.log('Nenhum envio.')
            }
            else
            {
                this.amountInTheAccount += amountReceived
                console.log('Total na conta do recebedor: ', this.amountInTheAccount.toFixed(2))
                return console.log(`Você recebeu uma transferência de ${sender} no valor de R$ ${amountReceived.toFixed(2)}`);
            }
        }
    }


    let regis = new BankAccount('Regis Michael', 400.00);
    let joao = new BankAccount('João Silas', 590.00);

    
    joao.pixReceipt(joao.pixTransfer(200.00, joao.username), joao.username);
    // regis.pixReceipt(joao.pixTransfer(400.00, regis.username), joao.username);
