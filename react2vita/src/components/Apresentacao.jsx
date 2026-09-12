function ExibirApresentacao (){
    const pessoa = {
        nome: "Francis",
        idade: 20,
        hobby: "jogar"
        
    }

    return <div>
        <h1>Hello World {pessoa.nome}</h1>
        <h2>Tenho {pessoa.idade} anos e gosto de {pessoa.hobby}</h2>
    </div>
}

export default ExibirApresentacao