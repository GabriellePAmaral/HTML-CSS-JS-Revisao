function ValidarNumero ()
{

    let numero = document.getElementById("numero").value; //pega o valor digitado pelo usuário no campo de entrada "numero"
    let mensagem = document.getElementById("mensagem").value; //agrega uma mensagem correspondnte a cada desvio condicional

    if (numero == "") //verifica se o campo de entrada está em branco
    {
        mensagem.textContent = "Por favor, insira um número."; //pede para que seja adicionado um valor na caixa de resposta
        mensagem.style.color = "red"; //muda a cor da fonte para vermelho
    }
    else 
    {
        numero = parseInt (numero); //converte o valor digitado para número inteiro
    }

    if (numero > 10) //verifica se o valor da variável número é maior que 10
    {
        mensagem.textContent = "O número é maior que 10."; //exibe a mensagem
        mensagem.style.color = "green"; //muda a cor da fonte para verde
    }
    else
    {
        if (numero > 5) //verifica se o valor da variável número é maior que 5
        {
            mensagem.textContent = "O número é maior que 5, mas menor ou igual a 10."; //exibe a mensagem
            mensagem.style.color = "orange"; //muda a cor da fonte para laranja
        }
        else
        {
            mensagem.textContent = "O número é igual ou menor que 5."; //exibe a mensagem
            mensagem.style.color = "blue" //muda a cor da fonte para azul
        }
    }

}