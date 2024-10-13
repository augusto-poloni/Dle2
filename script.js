buscaInicio()

async function buscar() {
    var input = document.getElementById('input')
    var area = document.getElementById('rowCards')
    var res = await fetch(`https://rickandmortyapi.com/api/character/${input.value}`).then(resposta => {return resposta.json()});
    
    console.log(res)

    var aux = area.innerHTML
    area.innerHTML = `<div class="row">
            <div class="col-lg-2">
                <div class="card">
                    <div class="card-body">
                     <img src="${res.image}">
                    </div>
                </div>
            </div>
            <div class="col-lg-2">
                <div class="card">
                    <div class="card-body">
                      ${res.gender}
                    </div>
                </div>
            </div>
            <div class="col-lg-2">
                <div class="card">
                    <div class="card-body">
                    ${res.species}
                    </div>
                </div>
            </div>
            <div class="col-lg-2">
                <div class="card">
                    <div class="card-body">
                    ${res.origin.name}
                    </div>
                </div>
            </div>
            <div class="col-lg-2">
                <div class="card">
                    <div class="card-body">
                    ${res.status}
                    </div>
                </div>
            </div>`

    area.innerHTML += aux
}
async function buscaInicio() {
    var resini = await fetch(`https://rickandmortyapi.com/api/character/`).then(resposta => {return resposta.json()});
    var area = document.getElementById('rowCards')
    for (i = 1; i <= 6; i++){
        var res = await fetch(`https://rickandmortyapi.com/api/character/${i}`).then(resposta => {return resposta.json()});
        
        area.innerHTML += `<div class="row">
            <div class="col-lg-2">
                <div class="card">
                    <div class="card-body">
                     <img src="${res.image}">
                    </div>
                </div>
            </div>
            <div class="col-lg-2">
                <div class="card">
                    <div class="card-body">
                      ${res.gender}
                    </div>
                </div>
            </div>
            <div class="col-lg-2">
                <div class="card">
                    <div class="card-body">
                    ${res.species}
                    </div>
                </div>
            </div>
            <div class="col-lg-2">
                <div class="card">
                    <div class="card-body">
                    ${res.origin.name}
                    </div>
                </div>
            </div>
            <div class="col-lg-2">
                <div class="card">
                    <div class="card-body">
                    ${res.status}
                    </div>
                </div>
            </div>`
    }
}
async function inserirLog(metodo, resultado){
    await fetch(`https://www.piway.com.br/unoesc/api/inserir/log/328401/https://rickandmortyapi.com/api/${metodo}/${resultado}`).then(resposta => {return resposta.json()});
}

async function ExcluirLog(id){
    await fetch(`https://www.piway.com.br/unoesc/api/excluir/log/${id}/aluno/432608`).then(resposta => {return resposta.json()});
    exibirLogs()
}

async function exibirLogs(){
    var res = await fetch(`https://www.piway.com.br/unoesc/api/logs/432608`).then(resposta => {return resposta.json()});
    var modal = document.getElementById('tabela')

    modal.innerHTML = ''
    for(i = 0; i < res.length; i++){
        modal.innerHTML += `<tr class="tr-table">
                          <td>${res[i].idlog}</td>
                          <td>${res[i].log}</td>
                          <td>${res[i].api}</td>
                          <td>${res[i].metodo}</td>
                          <td>${res[i].resultado}</td>
                          <td><button id="btn-table" onclick="ExcluirLog(${res[i].idlog})">Excluir</button></td>
                      </tr>`
    }
}