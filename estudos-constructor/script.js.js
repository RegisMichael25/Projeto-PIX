    class ContaBancaria{
        constructor (nome, valorNaConta)
        {
            this.nome = nome
            this.valorNaConta = valorNaConta
            this.data = new Date();
            this.data.ano = `${this.data.getFullYear()}/${this.data.getMonth() + 1}/${this.data.getDate()}`
            this.data.horas = `${this.data.getHours()}:${this.data.getMinutes()}:${this.data.getSeconds()}`
        }

        transferenciaPix(valorEnviado, beneficiario)
        {
            if(beneficiario === this.nome)
            {
                console.log('Você não consegue enviar um valor para mesma titularidade.')
                return 0
            }
            else
            {
                if(valorEnviado > this.valorNaConta)
                    {
                        console.log('Valor enviado maior que o que você possui em conta!')
                        valorEnviado = 0
                        return parseFloat(valorEnviado.toFixed(2))
                    }
                    else
                    {
                        console.log(`Você enviou uma transferência para ${beneficiario} de R$ ${valorEnviado.toFixed(2)}`);
                        this.valorNaConta -= valorEnviado  
                        console.log(`Seu saldo na conta atual é de ${this.valorNaConta.toFixed(2)}`)
                        console.log(`Pix enviado com sucesso! ${this.data.ano} - ${this.data.horas}`)
                        return parseFloat(valorEnviado.toFixed(2))
                    }
            }
        }
        
        recebimentoPix(valorRecebido,remetente)
        {
            if(valorRecebido <= 0)
            {
                console.log('Nenhum envio.')
            }
            else
            {
                this.valorNaConta += valorRecebido
                console.log('Total na conta do recebedor: ', this.valorNaConta.toFixed(2))
                return console.log(`Você recebeu uma transferência de ${remetente} no valor de R$ ${valorRecebido.toFixed(2)}`);
            }
        }
    }


    let regis = new ContaBancaria('Regis Michael', 400.00);
    let joao = new ContaBancaria('João Silas', 590.00);

    
    joao.recebimentoPix(joao.transferenciaPix(200.00, joao.nome), joao.nome);
    // regis.recebimentoPix(joao.transferenciaPix(400.00, regis.nome), joao.nome);s
