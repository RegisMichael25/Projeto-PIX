    class ContaBancaria{
        constructor (nome, valorNaConta)
        {
            this.nome = nome
            this.valorNaConta = valorNaConta
        }

        transferenciaPix(valorEnviado, beneficiario)
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
                console.log('Pix enviado com sucesso!')
                console.log('Enviado: ', valorEnviado.toFixed(2))
                return parseFloat(valorEnviado.toFixed(2))
            }
        }
        
        recebimentoPix(valorRecebido,remetente)
        {
            if(valorRecebido == 0 || valorRecebido < 0)
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

    
    joao.recebimentoPix(regis.transferenciaPix(200.00, joao.nome), regis.nome);
