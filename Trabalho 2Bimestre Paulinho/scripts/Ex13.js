let inputRaio = document.querySelector ("#inputRaio")
let btCalcular = document.querySelector ("#btCalcular")
let h3Resultado = document.querySelector ("#h3Resultado")

function calculaRaio (){
    let raio = Number (inputRaio.value)

    area = 3.14 * (raio**2)

    h3Resultado.textContent = 'A área da pizza é de: '+area+ ' metros quadrados'

}

btCalcular.onclick = function (){
    calculaRaio()
}
