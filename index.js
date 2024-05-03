function contar(){
    var inicio = window.document.querySelector('input#txtinicio')
    var fim = window.document.querySelector('input#txtfim')
    var passo = window.document.querySelector('input#txtpasso')
    var res = window.document.querySelector('div#res')
    var htmlContent = ''

    if(inicio.value.length == 0 || fim.value.length == 0 || passo.value.length == 0){
        window.alert('[ERRO] Faltam dados!')
        htmlContent = 'Impossível Contar!'
    } else{
        htmlContent = `Contando: <br>`
        //Tranformando as minhas caixas de texto em números:
        var i = Number(inicio.value)
        var f = Number(fim.value)
        var p = Number(passo.value)
        if (p <= 0){
            window.alert('Passo inválido! Considerando o PASSO 1!') //Se por acaso o usuário quiser contar ao passo 0, oque é impossível o código vai cosiderar o passo de número 1.
            p = 1
        } 
        if(i < f){
            for (var i = i; i <= f; i += p) {
                htmlContent += i  + ' 👉 '
            }
        } else {
            for (var i = i; i >= f; i -= p ) {
                htmlContent += i + ' 👉 '
            }
        }
    } 
    res.innerHTML = `${htmlContent} 🏴 ` //Isso vai fazer com que o res receba o conteúdo do  htmlContent.
}


