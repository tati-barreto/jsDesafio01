
function multiplos()
{
    const num1 = parseInt(prompt('digite um numero entre 2 e 100'))
    const num2 = parseInt(prompt('digite outro numero menor do que você digitou antes'))


    if (num1 % num2 === 0)
        {alert('o número ' + num1 + ' é multiplo de ' + num2)}

    else 
        {alert('esses numeros não são multiplos')}
    }

    multiplos()