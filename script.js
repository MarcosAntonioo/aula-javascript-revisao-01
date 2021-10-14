//primeira questão
function nrm (_numero){
    if(_numero < 0){
        return 'O valor número é um Número negativo.'
    } else{
        return 'O valor número é um Número positivo.'
    }
}

//segunda questão
function valores (valora, valorb, valorc){

    if((valora + valorb) >= valorb){
      return `os valores ${valora} e ${valorc} é maior que ${valorb} `
    }
    else {
      return `os valores ${valora} e ${valorc} é igual a ${valorb} `
    }
  }

  // 3 questão
  function aluno(matutino, vespertino, noturno, horario) {

    if (matutino = 8) {
        return "Bom dia!"
    }

    else if (vespertino = 12) {
        return "Boa tarde!"
    }

    else if (noturno = 18) {
        return "Boa noite!"
    }

    else { return "Valor inválido!"}
}