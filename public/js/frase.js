$("#botao-frase").click(fraseAleatoria);

function fraseAleatoria() {
  $.get("http://localhost:3000/frases", trocaFraseAleatoria); 

}

/*Quando usamos $.get precisamos passar como primeiro parâmetro 
o endereço do que desejamos consumir via Ajax. O segundo parâmetro
é aquela função que será chamada automaticamente por $.get assim 
que os dados retornarem do servidor. Esse retorno pode demorar um 
ou mais segundos, nunca sabemos quando ela será terminada, por isso 
dizemos que $.get executa um código assíncrono.

Contudo, temos a certeza que, assim que $.get terminar o próprio
jQuery chamará por debaixo dos panos a função que passamos como 
segundo parâmetro em $.get. Ele não apenas a chamará, mas também 
passará para esta função os dados que vieram do servidor. É por 
isso que a função passada para $.get recebe um parâmetro, aliás, 
poderia ser qualquer nome, no caso foi escolhido o nome retorno. 
O importante é que tenha um parâmetro seja lá qual nome for para 
que tenhamos acesso ao valor retornado por $.get.

O servidor retorna um array que possui várias frases. Então, se 
quisermos pegar uma frase de retorno precisamos fazer retorno[0] 
indicando que queremos pegar o primeiro item do array. Como cada 
item é um objeto que possui a propriedade texto podemos fazer 
retorno[0].texto para saber o texto da frase. */

function trocaFraseAleatoria(data){
    /*Para a função trocaFraseAleatoria ter acesso aos dados 
    retornados pela requisição, é disponibilizado um argumento
    para a função com o próprio retorno da requisição, esse
    argumento é o data: */
    var frase = $(".frase");
    var numeroAleatorio = Math.floor(Math.random() * data.length);
    /*O retorno dessa função é sempre um número aleatório entre
    0 e 1. Mas nós queremos um número de 0 a 9, que é o tamanho 
    do nosso array. Para obter esse número, basta multiplicar o 
    número gerado pelo próprio tamanho do array: 
    Mesmo o número já estando na faixa que queremos, ele ainda 
    possui muitas casas decimais, precisamos arrendondá-lo. E o
    JavaScript também nos auxilia nisso, através da função 
    Math.floor, que arredonda o número para baixo*/
    frase.text(data[numeroAleatorio].texto);
    atualizaTamanhoFrase();
    atualizaTempoInicial(data[numeroAleatorio].tempo);
}

/*O AJAX nos permite carregar apenas uma parte do conteúdo 
da página, fazendo com que o site do usuário fique mais leve ,
 e por consequência mais rápido na hora de carregar.
 
 Com o AJAX também conseguimos enviar dados para o servidor 
 sem depender de um form do HTML.

 Com requisições AJAX conseguimos trazer novos dados para 
 o usuário sem que ele precise trocar de página
 
 Com AJAX, conseguimos realizar requisições HTTP paralelamente 
 ao nosso Javascript, sem interromper seu funcionamento, 
 visto que estas requisições são assíncronas.
 
 O AJAX nos permite criar aplicações como Chat's e notificações,
pois não precisamos recarregar a página para trocar dados.

Com AJAX conseguimos atualizar os dados da página com novas
 informações mesmo após o usuário já ter carregado a página.*/