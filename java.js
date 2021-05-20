let n = document.getElementById('num')
let res = document.getElementById('res')

function verificar(){
    if(n.value.length == 0){
        alert('Digite uma velocidade númerica!')
    }else{
        res.innerHTML = ''
        if(n.value > 100){
            res.innerHTML += `Voce ultrapassou a velocidade permitida.[MULTADO!]`
        }else{
            res.innerHTML += 'Digira sempre com cuidado é usando cinto de segurança.'
        }
    }
}