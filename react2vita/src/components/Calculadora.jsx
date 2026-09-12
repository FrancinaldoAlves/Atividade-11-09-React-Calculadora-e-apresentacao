import Dividir from "./Divisao"
import Multiplicar from "./Multiplicacao"
import Somar from "./Soma"
import Subtrair from "./Subtracao"



function ExibirCalculadora (){
    return <div>
        <h1>Calculadora</h1>
        <Somar></Somar>
        <Subtrair></Subtrair>
        <Multiplicar></Multiplicar>
        <Dividir></Dividir>
    </div>
}

export default ExibirCalculadora