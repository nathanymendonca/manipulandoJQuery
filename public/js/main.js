var tempoInicial = $("#tempo-digitacao").text();
var campo = $(".campo-digitacao");

//carrega a página para inicializar tudo do zero
$(function() {
    atualizaTamanhoFrase();
    inicializaContadores();
    inicializaCronometro();
    inicializaMarcadores();
    $("#botao-reiniciar").click(reiniciaJogo);
    
    
});

function atualizaTamanhoFrase(){

    var frase = $(".frase").text();
    var numPalavras = frase.split(" ").length;
    var tamanhoFrase = $("#tamanho-frase");
    tamanhoFrase.text(numPalavras);

}


 // pega o conteudo do text-area
 function inicializaContadores(){
        campo.on("input", function(){
            var conteudo = campo.val();
            
            // contador de palavras
            var qtdPalavras = conteudo.split(/\S+/).length -1; 
            $("#contador-palavras").text(qtdPalavras);
            // >> /\S+/ = expressão regular que busca espço vazio
            
            // contador de letras
            var qtdCaracteres = conteudo.length
            $("#contador-caracteres").text(qtdCaracteres);
        });
    };



// contador de segundos
function inicializaCronometro() {
   
    var tempoRestante = $("#tempo-digitacao").text();
        campo.one("focus", function(){
            // one = só funciina uma vez é parecido com o on,
            // mas só habilita na 1ª vez
            var cronometroID = setInterval(function(){
            // setInterval = cronometro 
            tempoRestante--; // diminui o tempo
            $("#tempo-digitacao").text(tempoRestante); 
            if(tempoRestante < 1){
                campo.attr("disabled", true);
            // attr = parecido com textarea, pega e altera o valor
            // neste caso o disabled = desabilitar o campo textearea
            // quando passar os 10 segundos para digitar a palavra
                clearInterval(cronometroID); 
                // trava o cronometro quando chegar no 0
                campo.toggleClass("campo-desativado"); 
                //puxa a estilização do css
            
            }
            },1000);

        });
}


function inicializaMarcadores(){
    var frase = $(".frase").text();
campo.on("input", function(){
    var digitado = campo.val();
    var comparavel = frase.substr(0, digitado.length);
    //compara o que está sendo escrito com a frase da música
    //substr = compara um trecho da string
    if(digitado == comparavel){
      campo.addClass("borda-correto");
      campo.remoceClass("borda-errado");  
    }else{
      campo.addClass("borda-errado");
      campo.remoceClass("borda-correto");    
    }

});
}

//botão para reiniciar o jogo
function reiniciaJogo(){
    campo.attr("disabled", false);
    campo.val("");
    $("#contador-palavras").text("0");
    $("#contador-caracteres").text("0");
    $("#tempo-digitacao").text(tempoInicial);
    inicializaCronometro();
    campo.toggleClass("campo-desativado");
    // estilização do css para retornar o campo em branco
    campo.remoceClass("borda-errado");
    campo.remoceClass("borda-correto");

}



// attr no geral =  como ele não recebe nenhum valor, temos
// que informar isso, "habilitando-o" na função, passando o 
//valor true (verdadeiro) por parâmetro.
// Se queremos tirar o atributo disabled, podemos passar
// o segundo atributo como false

//------------------------------------

//A função .one() funciona de modo semelhante a função .on(),
// ambas podem ser utilizadas em qualquer elemento, recebem 
//qualquer evento como primeiro parâmetro e uma função anônima 
//ou uma função nomeada como segundo parâmetro.

//A diferença entre elas é na hora de escutar os eventos, a função
// .one() escuta o evento apenas uma única vez, diferentemente
// da função on(), que como já vimos fica escutando o evento
// em um elemento do HTML por tempo ilimitado.

// --------------------------------
// As funções .val() e .text() podem manipular os valores de texto
// dos elementos, mas a .val() funciona em elementos de <input>
// que são campos aonde o usuário do site insere dados , como os
// campos de <input>(todos os tipos), <textarea> e <select>.

//Já a função .text() pega o conteúdo de texto de tags HTML que
// tem texto dentro, como as <h1>, <span> e <p>

//Ambas as funções podem atribuir novos valores a determinados 
//elementos, ou apenas pegar os valores deles.