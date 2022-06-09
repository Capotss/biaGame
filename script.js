var btn = document.getElementById("btn")
const bscreen = document.getElementById("bscreen")
const inp = document.getElementById("inp")
var cont = document.getElementById("choices")
var btn2 = document.getElementById("btn2")
var go = document.getElementById("gameover")
let goS = 0

onload = () => {
    bscreen.style.visibility = 'visible'
    inp.addEventListener("keypress", function (e) {
        if (e.key === "Enter") {
            e.preventDefault()
            btn.click()
        }
    })
}
function reload() {
    document.location.reload(true)
}
function startgame() {
    if (inp.value == "09102021") {
        bscreen.style.visibility = 'hidden'
        inp.value = ""
    } else {
        inp.style.borderColor = "red"
        setTimeout(() => {
            inp.style.borderColor = ""
        }, 600);
    }
}
function gameover() {
    go.style.visibility = "visible"
}
let p = document.getElementById("p")
let img = document.getElementById("img")
let i = document.getElementById("i")
let h1 = document.getElementById('h1')
let pageCount = 1
let path = 0

function pagePass() {
    pageCount++
    if (goS == 1) {
        gameover()
    }
    if (pageCount == 2) {
        page2()
    }
    if (pageCount == 3) {
        page3()
    }
    if (pageCount == 4) {
        page4()
    }
    if (pageCount == 6) {
        page6()
    }
    if (pageCount == 7 && path == 1) {
        page6p3()
    }
    if (pageCount == 7 && path != 1) {
        page7()
    }
    if (pageCount == 8 ){
        page8()
    }
}
let page2 = () => {
    if (pageCount == 2) {
        p.innerText = "Onde estou?"
        i.innerText = "Apesar de sua confusão, um barulho muito alto pode ser ouvido ao sul."
    }
}
let page3 = () => {
    if (pageCount == 3) {
        h1.innerText = "Apsu"
        p.innerText = "Apsu, sim Apsu... ESQUECI DAS ERVAS GENTE MEU DEUS, ACABEI DORMINDOOO!!!"
        i.innerText = "Você consegue se ver no reflexo de um rio próximo, que foi o gatilho para a recuperação das suas memórias."
        img.src = "./assets/pfp-apsu.png"
    }
}
let page4 = () => {
    if (pageCount == 4) {
        p.innerText = "..."
        i.innerText = "Você se torna na direção de sua vila, mais específicamente para um médico onde você estava levando umas ervas."
        var button = document.createElement("button")
        var button2 = document.createElement("button")
        button.textContent = "Andar com calma."
        button.setAttribute("id", "c1")
        button.style.marginTop = "15px"
        button2.textContent = "Andar rapidamente."
        button2.setAttribute("id", "c2")
        button2.style.marginTop = "15px"
        cont.appendChild(button)
        cont.appendChild(button2)
        var c1 = document.getElementById("c1")
        var c2 = document.getElementById("c2")
        c1.addEventListener("click", page5p1)
        c2.addEventListener("click", page5p2)
        btn2.style.visibility = "hidden"
        img.src = "./assets/floresta2.jpg"

    }
}
let page5p2 = () => {
    if (pageCount == 4) {
        pageCount++
        path = 2
    }
    i.innerText = "O barulho que você ouviu te deixou com muito medo, você decide por ir mais rápido, mas por consequência, vai descuidadamente."
    c1.style.visibility = "hidden"
    c2.style.visibility = "hidden"
    btn2.style.visibility = "visible"

}
let page5p1 = () => {
    if (pageCount == 4) {
        pageCount++
        path = 1
    }
    i.innerText = "Apesar do barulho que ouviu, você decide tomar mais cuidado na sua trilha."
    c1.style.visibility = "hidden"
    c2.style.visibility = "hidden"
    btn2.style.visibility = "visible"
}
let page6 = () => {
    c1.removeEventListener("click", page5p1)
    c2.removeEventListener("click", page5p2)
    if (path == 1) {
        p.innerText = "te amo mofis"
        i.innerText = "Após alguns bons minutos, você chega à sua vila, mas de cara, já vê que as coisas não estão normais, não tem NINGUÉM nas ruas, mas um barulho pode ser ouvido na praça. Você acha uma boa ideia ir verificar, mas por sua cautela vai por um beco para observar."
        img.src = "./assets/vila.jpg"
    }
    if (path == 2) {
        p.innerText = "..."
        i.innerText = "Rapidamente você se encaminha para sua vila, e quando chega ao seu destino, vê uma cena chocante. Seu amigo, Joph (O filho do médico) está chorando desesperadamente e amarrado em uma cerca, enquanto você pode ver o médico (Joffrey) sendo levado por uma figura encapuzada"
        img.src = "./assets/vila.jpg"
        btn2.style.visibility = "hidden"
        c1.innerText = "Seguir a figura encapuzada."
        c2.innerText = "Ir conversar com Joph"
        c1.style.visibility = "visible"
        c2.style.visibility = "visible"
        c1.addEventListener("click", page6p1)
        c2.addEventListener("click", page6p2)
    }

}
let page6p1 = () => {
    c1.style.visibility = "hidden"
    c2.style.visibility = "hidden"
    btn2.style.visibility = "visible"
    let testeF = Math.floor(Math.random() * 20) + 3
    // let testeF = 18
    if (testeF < 18) {
        p.innerText = `Teste de furtividade = ${testeF} (${testeF - 3}+3)`
        i.innerText = "Você rapidamente percebe que não foi uma boa ideia seguí-lo, assim que o encapuzado percebe a sua presença, em poucos instantes, você começa a sentir um frio, e quando vê, há algo pulsante nas mãos do bandido, é o seu coração."
        img.src = "./assets/killua.gif"
        goS = 1
    } else {
        p.innerText = `Teste de furtividade = ${testeF} (${testeF - 3}+3)`
        i.innerText = "Você anda atrás do criminoso com toda a cautela e consegue passar despercebida. O caminho que o bandido faz a leva até a praça local."
    }
}
let page6p2 = () => {
    let testC = Math.floor(Math.random() * 20 + 3)
    p.innerText = `Teste de Carisma = ${testC} (${testC}+3)`
    i.innerText = "Depois de acalmar o garoto, o que te levou alguns minutos, você convence ele a esperar dentro de casa devido ao perigo. Você decide rumar em direção da praça."
    if (testC > 13) {
        i.innerText = "Depois de acalmar o garoto, o que te levou alguns minutos, você convence ele a esperar dentro de casa devido ao perigo. Você decide rumar em direção da praça. Com seu carisma você acalma o garoto rapidamente e ainda tira algumas informações, ele te diz que os bandidos pareciam estar buscando alguém."
    }
    c1.style.visibility = "hidden"
    c2.style.visibility = "hidden"
    btn2.style.visibility = "visible"
}
let page6p3 = () => {
    let testeF = Math.floor(Math.random() * 20) + 3
    // let testeF = 18
    if (testeF < 15) {
        p.innerText = `Teste de furtividade = ${testeF} (${testeF - 3}+3)`
        i.innerText = "Você, apesar de tentar se manter calma, esquece de se atentar ao seu redor de derruba uma lixeira, que faz um grande barulho, no mesmo momento que isso acontece, você sabe que foi percebida e tenta se esconder atrás da lata de lixo. Porém você falha e em poucos instantes, se vê sendo incinerada totalmente por chamas negras."
        img.src = "./assets/chamas.gif"
        goS = 1
    } else {
        p.innerText = `Teste de furtividade = ${testeF} (${testeF - 3}+3)`
        i.innerText = "Você vê uma lata de lixo no caminho no ultimo instante e consegue se desviar para não derrubála e fazer nenhum barulho. E se encaminha para o beco que dá visão para a praça."
        path = 0
        pageCount = 6
    }

}
let page7 = () => {
    img.src = "./assets/praca.jpg"
    img.style.width = "90%"
    p.innerText = "!!!"
    i.innerText = "Você, completamente em choque vê praticamente todos os membros da sua vila amarrados ao redor da grande fonte central. Essa visão perturbadora te deixa sem completamente sem reação por alguns segundos, que você passa observando esses criminosos. Mesmo que você não compreende agora, os criminosos estão perguntando sobre o dragão que está desaparecido."
}
let page8 = () => {
    let button3 = document.createElement("button")
    button3.style.marginTop = "15px"
    button3.setAttribute("id", "c3")
    button3.textContent = "Tentar correr."
    cont.appendChild(button3)
    let c3 = document.getElementById("c3")
    img.src= "./assets/chrollo.jpg"
    img.style.width = ""
    i.innerText = "Com seus sentimentos a flor da pele e o desespero tomando conta do seu corpo, você, sem querer, deixa cair a cesta de ervas que você carrega, chamando toda a atenção para você. Você é percebida e um dos homens, que parece ser o Líder, começa a andar na sua direção com um sorriso no rosto. Ele anda lentamente até você."
    btn2.style.visibility = "hidden"
    c1.style.visibility = "visible"
    c2.style.visibility = "visible"    
    c1.innerText = "Implorar por sua vida."
    c2.innerText = "Gritar com ele."
    c1.removeEventListener("click", page6p1)
    c2.removeEventListener("click", page6p2)
    c1.addEventListener("click", page9c1)
    c2.addEventListener("click", page9c2)
    c3.addEventListener("click", page9c3)
}
let page9c1 = () =>{
    p.innerText = "POR FAVOR NOS DEIXEM EM PAZ!!!"    
    i.innerText = "O líder te olha com desprezo e libera uma energia roxa do seu corpo, infelizmente Apsu, você não tem tempo para reagir ao mesmo tempo que sua cabeça EXPLODE."
    img.src = "./assets/chrollo3.gif"
    goS = 1
    c1.style.visibility = "hidden"
    c2.style.visibility = "hidden"
    c3.style.visibility = "hidden"
    btn2.style.visibility = "visible"

}
let page9c2 = () =>{
    p.innerText = "SEU FILHO DA PUTA!!!"
    i.innerText = "(kkkkk TE AMO MOFISS) Obviamente essa decisão emocionada que você tomou não foi das melhores, em alguns instantes você vê o líder tirando sua bandana e revelando um símbolo enquanto anda na sua direção."
    img.src ="./assets/chrollo2.gif"
    c1.innerText = "Implorar por sua vida"
    c2.innerText = "Gritar mais ainda com ele"
    c2.removeEventListener("click", page9c2)
    c2.addEventListener("click", pag10)
    c3.innerText = "Tentar correr"
}
let page9c3 = () =>{
    p.innerText = "!!!"
    i.innerText = "No desespero de ver uma figura imponente como aquela andando na sua direção você decide correr, ao fazer isso você escuta uma risada e quando olha pra trás se depara com essa cena."
    img.src= "./assets/alukka.gif"
    goS = 1
    c1.style.visibility = "hidden"
    c2.style.visibility = "hidden"
    c3.style.visibility = "hidden"
    btn2.style.visibility = "visible"
}
let pag10 = () =>{
    p.innerText = "!!!"
    i.innerText = "Você pensa em gritar com ele novamente, mas a unica coisa que sai de sua boca é um grande rugido de fúria, uma luz azulada sai de seu olho com uma intensidade JAMAIS vista. Uma energia de completamente outro mundo começa a despertar em seu corpo eu uma centelha de luz enorme começa a ser canalizada por você, sua raiva faz com que toda essa energia exploda em uma enorme area, deixando todos, menos você cegos."
    img.src = "./assets/lux.gif"
}
let pag11 = () =>{
    i.innerText = "Você, com seus instintos de dragão no desespero, decide correr. Mas essa é uma história que ainda não tem fim (heheh, pretendo fazer mais, te amo mt meu amor espero q tenha se divertido um pouquinho pelo menos, fiz de coração e foi facilmente umas 10hrs pra fzr heheh TE AMO TE AMO TE AMO, AHHH testa todas as rotinhas, tem umas coisas legaiss.)"
}