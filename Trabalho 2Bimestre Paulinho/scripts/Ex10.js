let inputDias = document.querySelector ("#inputDias")
let btCalcular = document.querySelector ("#btCalcular")
let h3Resultado = document.querySelector ("#h3Resultado")

function calculaTempo (){
    let dias = Number (inputDias.value)

    mesesSemAcidentes = dias / 30
    anosSemAcidentes = dias / 365

    h3Resultado.innerHTML = 'Estamos há: '+'<br>'+
                            dias+ ' Dias;'+'<br>'+
                            mesesSemAcidentes.toFixed(2)+ ' Meses;'+'<br>'+
                            anosSemAcidentes.toFixed(2)+ ' Anos.'+'<br>'+
                            'Sem acidentes.'
}


btCalcular.onclick = function (){
    calculaTempo()
}