function apertou1() {
    console.log('apertou')

    fetch('db.json').then(resposta => resposta.json()).then(corpo =>{
        console.log(corpo)
        document.getElementById('imagem').innerHTML = corpo.image
        document.getElementById('nome').innerHTML = corpo.name
        document.getElementById('descricao').innerHTML = corpo.describe
        document.getElementById('estilo').innerHTML = corpo.style
        document.getElementById('preco').innerHTML = corpo.price
        document.getElementById('botao').innerHTML = corpo.button
        
    })
}
function apertou2() {
    console.log('apertou2')

    fetch('db.json').then(resposta => resposta.json()).then(corpo =>{
        console.log(corpo)
        document.getElementById('imagem').innerHTML = corpo.image2
        document.getElementById('nome').innerHTML = corpo.name2
        document.getElementById('descricao').innerHTML = corpo.describe2
        document.getElementById('estilo').innerHTML = corpo.style2
        document.getElementById('preco').innerHTML = corpo.price2
        document.getElementById('botao').innerHTML = corpo.button2
    })
}

function apertou3() {
    console.log('apertou3')

    fetch('db.json').then(resposta => resposta.json()).then(corpo =>{
    console.log(corpo)
        document.getElementById('imagem').innerHTML = corpo.image3
        document.getElementById('nome').innerHTML = corpo.name3
        document.getElementById('descricao').innerHTML = corpo.describe3
        document.getElementById('estilo').innerHTML = corpo.style3
        document.getElementById('preco').innerHTML = corpo.price3
        document.getElementById('botao').innerHTML = corpo.button3
    })
}

function apertou4() {
    console.log('apertou2')

    fetch('db.json').then(resposta => resposta.json()).then(corpo =>{
    console.log(corpo)
    document.getElementById('imagem').innerHTML = corpo.image4
    document.getElementById('nome').innerHTML = corpo.name4
            document.getElementById('descricao').innerHTML = corpo.describe4
        document.getElementById('estilo').innerHTML = corpo.style4
        document.getElementById('preco').innerHTML = corpo.price4
    document.getElementById('botao').innerHTML = corpo.button4
    })
}

function apertou5() {
    console.log('apertou5')

    fetch('db.json').then(resposta => resposta.json()).then(corpo =>{
    console.log(corpo)
    document.getElementById('imagem').innerHTML = corpo.image5
    document.getElementById('nome').innerHTML = corpo.name5
            document.getElementById('descricao').innerHTML = corpo.describe5
        document.getElementById('estilo').innerHTML = corpo.style5
        document.getElementById('preco').innerHTML = corpo.price5
    document.getElementById('botao').innerHTML = corpo.button5
    })
}

function apertou6() {
    console.log('apertou6')

    fetch('db.json').then(resposta => resposta.json()).then(corpo =>{
    console.log(corpo)
    document.getElementById('imagem').innerHTML = corpo.image6
    document.getElementById('nome').innerHTML = corpo.name6
            document.getElementById('descricao').innerHTML = corpo.describe6
        document.getElementById('estilo').innerHTML = corpo.style6
        document.getElementById('preco').innerHTML = corpo.price6
    document.getElementById('botao').innerHTML = corpo.button6
    })
}

function apertou7() {
    console.log('apertou7')

    fetch('db.json').then(resposta => resposta.json()).then(corpo =>{
    console.log(corpo)
    document.getElementById('imagem').innerHTML = corpo.image7
    document.getElementById('nome').innerHTML = corpo.name7
            document.getElementById('descricao').innerHTML = corpo.describe7
        document.getElementById('estilo').innerHTML = corpo.style7
        document.getElementById('preco').innerHTML = corpo.price7
    document.getElementById('botao').innerHTML = corpo.button7
    })
}

function apertou8() {
    console.log('apertou8')

    fetch('db.json').then(resposta => resposta.json()).then(corpo =>{
    console.log(corpo)
    document.getElementById('imagem').innerHTML = corpo.image8
    document.getElementById('nome').innerHTML = corpo.name8
            document.getElementById('descricao').innerHTML = corpo.describe8
        document.getElementById('estilo').innerHTML = corpo.style8
        document.getElementById('preco').innerHTML = corpo.price8
    document.getElementById('botao').innerHTML = corpo.button8
    })
}