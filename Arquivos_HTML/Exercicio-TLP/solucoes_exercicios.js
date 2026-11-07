/*
  RESOLUÇÃO COMPLETA DOS EXERCÍCIOS DE JAVASCRIPT
  Elaborado por: Monitores
*/

// ==========================================
// Exercício 1
// ==========================================
function exercicio1() {
    function ehPrimo(n) {
        if (n <= 1) return false;
        for (let i = 2; i <= Math.sqrt(n); i++) {
            if (n % i === 0) return false;
        }
        return true;
    }

    let primos = 0;
    let neutros = 0;
    let somaNegativos = 0;
    let ultimosNegativos = [];

    while (true) {
        let val = prompt("Exercício 1: Digite um número:");
        if (val === null) break;
        let num = Number(val);
        if (isNaN(num)) continue;

        if (ehPrimo(num)) primos++;
        if (num === 0) neutros++;
        if (num < 0) {
            somaNegativos += num;
            if (ultimosNegativos.length === 0 || ultimosNegativos[ultimosNegativos.length - 1] === num) {
                ultimosNegativos.push(num);
            } else {
                ultimosNegativos = [num];
            }
        } else {
            ultimosNegativos = [];
        }

        if (ultimosNegativos.length === 3) {
            console.log("Parada: 3 números negativos iguais consecutivos (" + num + ").");
            break;
        }
    }

    console.log("Primos:", primos);
    console.log("Quíntuplo dos Neutros (0):", neutros * 5);
    console.log("Soma dos Negativos:", somaNegativos);
}

// ==========================================
// Exercício 2
// ==========================================
// Rotação de 360deg via CSS e JS DOM
function exercicio2(numeroString) {
    // Exemplo de manipulação DOM para o elemento container
    let container = document.getElementById('resultadoEx2');
    if(!container) return;
    container.innerHTML = '';

    for (let char of numeroString) {
        let span = document.createElement('span');
        span.textContent = char;
        if (char === '5') {
            span.style.display = 'inline-block';
            span.style.transition = 'transform 1s ease-in-out';
            span.style.transform = 'rotate(360deg)';
            span.style.color = 'red';
        }
        container.appendChild(span);
    }
}

// ==========================================
// Exercício 3
// ==========================================
function exercicio3() {
    let entrada = prompt("Digite números separados por ponto e vírgula (;):", "10;2;5;3");
    if (!entrada) return;

    let numeros = entrada.split(';').map(n => parseFloat(n.trim())).filter(n => !isNaN(n));
    let soma = numeros.reduce((acc, curr) => acc + curr, 0);

    function fatorial(n) {
        if (n < 0) return "Inexistente";
        if (n === 0 || n === 1) return 1n;
        let res = 1n;
        for (let i = 2n; i <= BigInt(n); i++) res *= i;
        return res.toString();
    }

    let fat = fatorial(soma);
    alert("Soma: " + soma + "\nFatorial da soma: " + fat);
}

// ==========================================
// Exercício 4
// ==========================================
function exercicio4() {
    function somar(a, b) {
        return a + b;
    }

    let n1 = Number(prompt("Digite o primeiro número:"));
    let n2 = Number(prompt("Digite o segundo número:"));
    alert("Resultado da soma: " + somar(n1, n2));
}

// ==========================================
// Exercício 5
// ==========================================
function exercicio5(numerosArray) {
    let pares = [];
    let impares = [];

    numerosArray.forEach(num => {
        if (num % 2 === 0) pares.push(num);
        else impares.push(num);
    });

    return { pares, impares };
}

// ==========================================
// Exercício 6
// ==========================================
function exercicio6() {
    for (let i = 1; i <= 100; i++) {
        if (i % 3 === 0 && i % 5 === 0) console.log("FizzBuzz");
        else if (i % 3 === 0) console.log("Fizz");
        else if (i % 5 === 0) console.log("Buzz");
        else console.log(i);
    }
}

// ==========================================
// Exercício 7
// ==========================================
function exercicio7(palavra) {
    return [
        palavra.toUpperCase(),
        palavra.toLowerCase(),
        palavra.split('').reverse().join(''),
        "Super" + palavra,
        palavra + "JS"
    ];
}

// ==========================================
// Exercício 8
// ==========================================
function exercicio8(frase) {
    return [
        "Afirmação: " + frase + " com certeza!",
        "Pergunta: Será que " + frase.toLowerCase() + "?",
        "Exclamação: Atenção! " + frase + "!",
        "Inversa: " + frase.split(' ').reverse().join(' '),
        "Em maiúsculas: " + frase.toUpperCase()
    ];
}

// ==========================================
// Exercício 9
// ==========================================
function exercicio9() {
    let entrada = prompt("Digite uma palavra ou número:");
    if (!entrada) return;

    let limpo = entrada.toLowerCase().replace(/[^a-z0-9]/g, '');
    let invertido = limpo.split('').reverse().join('');

    alert(limpo === invertido ? "É Palíndromo!" : "Não é Palíndromo.");
}

// ==========================================
// Exercício 10
// ==========================================
function exercicio10(nome) {
    let vogaisRegex = /[aeiouáéíóúâêîôûãõ]/gi;
    let totalVogais = (nome.match(vogaisRegex) || []).length;
    let nomeSublinhado = nome.replace(vogaisRegex, match => `<u>${match}</u>`);

    return { totalVogais, nomeSublinhado };
}

// ==========================================
// Exercício 11
// ==========================================
function exercicio11(fraseMinuscula) {
    let resultado = '';
    let maiuscula = false;

    for (let char of fraseMinuscula) {
        if (char.match(/[a-zà-ú]/i)) {
            resultado += maiuscula ? char.toUpperCase() : char.toLowerCase();
            maiuscula = !maiuscula;
        } else {
            resultado += char;
        }
    }
    return resultado;
}

// ==========================================
// Exercício 12
// ==========================================
function exercicio12() {
    let texto = prompt("Digite um texto:");
    if (!texto) return;

    let palavras = texto.match(/\b[a-zà-ú0-9]+\b/gi) || [];
    palavras.sort((a, b) => a.localeCompare(b, 'pt', { sensitivity: 'base' }));

    alert("Palavras ordenadas:\n" + palavras.join(' '));
}

// ==========================================
// Exercício 13
// ==========================================
function exercicio13() {
    let texto = prompt("Digite um texto:");
    if (!texto) return;

    let invertido = texto.split('').reverse().join('');
    alert("Saída: " + invertido);
}

// ==========================================
// Exercício 14
// ==========================================
function exercicio14() {
    let texto = prompt("Digite um texto:");
    if (!texto) return;

    let semVogais = texto.replace(/[aeiouáéíóúâêîôûãõ]/gi, '');
    alert("Texto sem vogais: " + semVogais);
}

// ==========================================
// Exercício 15
// ==========================================
function exercicio15() {
    let vetor = [];
    for (let i = 0; i < 15; i++) {
        let n = parseInt(prompt(`Digite o ${i + 1}º número inteiro:`)) || 0;
        vetor.push(n);
    }

    let maior = Math.max(...vetor);
    let resultado = vetor.map(el => (el / maior).toFixed(2));

    console.log("Vetor original:", vetor);
    console.log("Maior elemento:", maior);
    console.log("Vetor dividido:", resultado);
}
