function inserePlacar() {
    var corpoTabela = $(".placar").find("tbody");
    // vai buscar a table dentro da section placar
    var usuario = "Nathany";
    var numPalavras = $("#contador-palavras").text();
    
    var linha = novaLinha(usuario, numPalavras); // agora é objeto html
    linha.find(".botao-remover").click(removeLinha);
    
    corpoTabela.append(linha);
    //prepend = adicionar antes o conteudo da linha dentro
    // corpo da tabela          
    //appen = adiciona depois, por último dos resultados 

}

//Como não temos o nome do usuário nem o número de 
//palavras nesta função, vamos recebê-los como 
//parâmetros da função e passá-los na inserePlacar():

//Agora com estas informações disponíveis na função novaLinha()

function novaLinha(usuario, Palavras){
    //criar elementos JQuery
    var linha = $("<tr>");
    var colunaUsuario = $("<td>").text(usuario);
    var colunaPalavras = $("<td>").text(Palavras);
    var colunaRemover = $("<td>");
    var link = $("<a>").addClass("botao-remover").attr("href", "#");
    var icone = $("<i>").addClass("small").addClass("material-icons").text("delete"); // todos do botaoRemover

    // Icone dentro do <a>
    link.append(icone);
    // <a> dentro do <td>
    colunaRemover.append(link);
    // Os três <td> dentro do <tr>
    linha.append(colunaUsuario);
    linha.append(colunaPalavras);
    linha.append(colunaRemover);

    return linha;

}

function removeLinha(){
    event.preventDefault();
    $(this).parent().parent().remove();
    // parent(). parent(). = subir dois niveis na árvore
    // foi até o avô
};