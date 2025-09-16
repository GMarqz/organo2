import Colaborador from '../Colaborador'
import './time.css'
import hexToRgba from 'hex-to-rgba'

const Time = ({ time, colaboradores, aoDeletar, mudarCor }) => {
    return (

        colaboradores.length > 0 && <section className='time' style={{ backgroundImage: 'url(/imagens/fundo.png)', backgroundColor: hexToRgba(time.cor, '0.6') }}>
            <input type='color' value={time.cor} className='input-color' onChange={e => mudarCor(e.target.value, time.id)}/>
            <h3 style={{ borderColor: time.cor }}>{time.nome}</h3>
            <div className='colaboradores'>
                {colaboradores.map((colaborador, indice) => {
                    console.log('Log')
                    return <Colaborador key={indice} colaborador={colaborador} corDeFundo={time.cor} aoDeletar={aoDeletar}/>
                    //Na pros 'colaborador', está sendo passado o valor 'colaborador', que está recebendo todas as propriedades de colaborador, inclusive o id.
                })}
            </div>
        </section>

    )
}

export default Time