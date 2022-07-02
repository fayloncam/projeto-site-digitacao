const portugues = ['coisa','casa','tempo','dia','ano','vez','homem','senhor','moça', 'bom', 'grande','melhor','pior','certo','último','próprio','ser','ir','estar','ter','haver','fazer','dar','ficar','poder','ver','não','mais','muito','já','quando','mesmo','depois','ainda','um','dois','primeiro','cem','mil','a','o','um','uma','de','em','para','por','com','até','e','mas','ou','também','se','assim','como','porque','que','eu','você','ele','este','esse','isso','sua','teste','digitar','João','Pedro','Marcos','Lucas','Mateus']
let tamanho = portugues.length
let randomiza = (tam) => Math.floor (Math.random() * tam)
const selecionaLeitura = document.querySelector('.leitura') // Cria variavel que recebe o elemento pai
let numTagInicio = 0
let cxPalLid
let palDig = ''
let proTagNum =''
let bsCounter = Number('0')
let cxTagDig = document.getElementById('digitacao')
let txtDig
let txtLid
let carDig
let carLid
let indice = 0
const acentuacao = ['´', '`', '~', '^']

document.addEventListener("keydown", () => cxTagDig.focus())

cxTagDig.addEventListener('keyup',

    function (e) {
        console.log (`Pressionado: ${e.code}`)
        if (e.code === 'Space') {
            if(cxPalLid != null){
            palDig = cxTagDig.value
            palDig == `${cxPalLid.innerText} ` ? cxPalLid.classList.add('correto') : cxPalLid.classList.add('incorreto')
            proTagNum ++
            proTag = `palLer${proTagNum}`
            cxPalLid.classList.remove('ativo')
            cxPalLid = document.getElementById(proTag)
            if (cxPalLid != null) {
                cxPalLid.classList.add('ativo')}
            palDig = ''
            cxTagDig.value = '' 
            indice = 0
            } else {
                window.alert('Acabaram as palavras')
                cxTagDig.value = ''    
            }
        } else if (e.code === 'Backspace') {
            bsCounter ++
            indice--
            cxPalLid.classList.remove('incorreto')
            cxPalLid.classList.add('ativo')
        } else if (!acentuacao.includes(e.code)) { 
                txtDig = document.querySelector('.digitacao')
                carDig = txtDig.value.split('')[indice]
                carLid = cxPalLid.innerText.split('')[indice]
                if (carDig != carLid) {
                    cxPalLid.classList.add('incorreto')
                }
                indice++ 
            }
        
       
       //------------------------
        
        //-----------------------


    }
)

function colocaPalavra(){
    while (numTagInicio <= 10) {
        let colocaSpan = document.createElement('span')// Cria variavel que recebe o tipo de tag a ser criada, na verdade cria o elemento
        colocaSpan.innerText = `${portugues[randomiza(tamanho)]}` // Configura o texto (aqui a palavra) da tag que será criada
        colocaSpan.id = `palLer${numTagInicio}` // Configura o id da tag que será criada
        selecionaLeitura.insertAdjacentElement('beforeend',colocaSpan) // Cria de fato a tag levando em conta o pai (definido na variável) e adiciona-a
        selecionaLeitura.insertAdjacentText('beforeend',' ')
        numTagInicio++
    }
    cxPalLid = document.getElementById('palLer0')
    cxPalLid.classList.add('ativo')
    proTagNum = ''
}

function atualizar() {
    numTagInicio = Number('0')
    while (selecionaLeitura.firstChild){
        selecionaLeitura.removeChild(selecionaLeitura.firstChild)
    }
    cxTagDig.value = ''
    indice = 0
    colocaPalavra()
}




 
