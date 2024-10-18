    class ContaBancaria{
        constructor (nome, valorNaConta, data, hora)
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

    let dataAtual = new Date();

    let ano = dataAtual.getFullYear();
    let mes = dataAtual.getMonth() + 1;
    let dia = dataAtual.getDate();

    let horas = dataAtual.getHours();
    let minutos = dataAtual.getMinutes();
    let segundos = dataAtual.getSeconds();

    let data = `${dia}/${mes}/${ano}`
    let tempo = `${horas}:${minutos}:${segundos}`

    console.log(data);
    console.log(tempo);

    // let regis = new ContaBancaria('Regis Michael', 400.00);
    // let joao = new ContaBancaria('João Silas', 590.00);

    
    // joao.recebimentoPix(regis.transferenciaPix(200.00, joao.nome), regis.nome);
    // regis.recebimentoPix(joao.transferenciaPix(400.00, regis.nome), joao.nome);
