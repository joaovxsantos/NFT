let h1 = document.getElementsByTagName("h1")[0]
let strong = document.getElementsByTagName("strong")[0]
let img = document.getElementsByTagName("img")[0]


img.addEventListener("mouseover", eyes)

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
    
}
