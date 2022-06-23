let h1 = document.getElementsByTagName("h1")[0]
let strong = document.getElementsByTagName("strong")[0]
let img = document.getElementById("img")
let div = document.getElementsByTagName("div")[1]

div.addEventListener("mouseover", eyes)
div.addEventListener("mouseout", eyes2)


strong.addEventListener("mouseover", voltar)
strong.addEventListener("mouseout", padrao)
h1.addEventListener("mouseover", voltar)
h1.addEventListener("mouseout", padrao)



function voltar(){
    h1.style = "color: hsl(178, 100%, 50%);"
    strong.style = "color: hsl(178, 100%, 50%);"
}

function padrao(){
    h1.style = "color: hsl(0, 0%, 100%);"
    strong.style = "color: hsl(0, 0%, 100%);"
}

function eyes(){
    img.style = "opacity: 100%"
    div.style = "background-color: rgba(4, 247, 234, 0.5);"
    
}

function eyes2(){
    img.style = "opacity: 0"
    div.style = "opacity: 0"
}
