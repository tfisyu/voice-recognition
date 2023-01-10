function validResult(nome){
    if(nome == 'Adilson Neto'){
    document.body.innerHTML = `
        <p>a mãe desse gemeu o nome dele kkkkkkkkkkkkkkkkkkkkkkk</p>
        <div class="fotos"></div>
        <button id="replay" class="btn-jogar">jogar novamente</button>
        `
        document.querySelector('.fotos').appendChild(imagens[0])
    }
    if(nome == 'Alessandro Barbosa'){
        document.body.innerHTML = `
            <p>volta comigo, eu vou te fazer o homem mais feliz do mundo <3</p>
            <div class="fotos"></div>
            <button id="replay" class="btn-jogar">jogar novamente</button>
        `
        document.querySelector('.fotos').appendChild(imagens[1])
    }
    if(nome == 'Igor Sadoc'){
        document.body.innerHTML = `
            <p>é muito triste ver a degradação de um ser humano: antes batia punheta pra hentai e hoje namora e tem emprego :(</p>
            <div class="fotos"></div>
            <button id="replay" class="btn-jogar">jogar novamente</button>
            `
        document.querySelector('.fotos').appendChild(imagens[2])
    }
    if(nome == 'João Nogueira'){
        document.body.innerHTML = `
            <p>oi joao. @processosjudiciais_joaonogueira</p>
            <div class="fotos"></div>
            <button id="replay" class="btn-jogar">jogar novamente</button>
        `
        document.querySelector('.fotos').appendChild(imagens[3])
    }
    if(nome == 'Lucas gordo'){
        document.body.innerHTML = `
            <p>o famoso 01354! 0 afeto feminino. 1354 horas de jett no low elo</p>
            <div class="fotos"></div>
            <button id="replay" class="btn-jogar">jogar novamente</button>
            `
        document.querySelector('.fotos').appendChild(imagens[4])
    }
    if(nome == 'Ana Ju gatinha'){
        document.body.innerHTML = `
            <p>coisinha mais linda!!!!! pena que é top 1 doente do grupo</p>
            <div class="fotos"></div>
            <button id="replay" class="btn-jogar">jogar novamente</button>
        `
        document.querySelector('.fotos').appendChild(imagens[5])
    }
    if(nome == 'Pedro racista'){
        document.body.innerHTML = `
            <p>tw: ruivo</p>
            <div class="fotos"></div>
            <button id="replay" class="btn-jogar">jogar novamente</button>
        `
        document.querySelector('.fotos').appendChild(imagens[6])
    }
    if(nome == 'Samuel Souza'){
        document.body.innerHTML = `
            <p>chegou a notícia que ninguém queria dar :(</p>
            <div class="fotos"></div>
            <button id="replay" class="btn-jogar">jogar novamente</button>
        `
        document.querySelector('.fotos').appendChild(imagens[7])
    }
    if(nome == 'Wesley bala'){
        document.body.innerHTML = `
            <p>fui eu que denunciei seu esquema de vp</p>
            <div class="fotos"></div>
            <button id="replay" class="btn-jogar">jogar novamente</button>
        `
        document.querySelector('.fotos').appendChild(imagens[8])
    }
    if(nome == 'Yuri gostoso'){
        document.body.innerHTML = `
            <p>se molharam né? não quero saber de vocês, sou fiel ao meu ex.</p>
            <div class="fotos"></div>
            <button id="replay" class="btn-jogar">jogar novamente</button>
        `
        document.querySelector('.fotos').appendChild(imagens[9])
    }
}
document.body.addEventListener('click', e => {
    if(e.target.id == 'replay'){
        window.location.reload()
    }
})
