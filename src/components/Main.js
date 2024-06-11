import React, { useState } from 'react'
import CountdownTimer from './CountdownTimer'

const Main = () => {

    return (
        <div>
            <main className='main'>
                <div className='pista' id='pista-uno'>
                    <p>1#</p>
                    <div className='pista-contenido'>
                        <h1>¡Es algo que hiciste muchás veces en tu vida!</h1>
                        <h2>Y te encanta hacerlo...</h2>
                    </div>

                </div>
                <div className='pista' id='pista-dos'>
                    <p>2#</p>
                    <div className='pista-contenido'>
                        <h1>Quer&iacute;as hacerlo conmigo apenas se pudiese as&iacute; que...</h1>
                        <h2>¡Reserv&eacute; para hacerlo juntos este viernes!</h2>
                    </div>
                </div>
                <div className='pista' id='pista-tres'>
                    <p>3#</p>
                    <div className='pista-contenido'>
                        <h1>Les couleurs</h1>
                        <h2>Ils ne mentent jamais...</h2>
                    </div>
                </div>
                <div className='pista' id='pista-tres'>
                    <p>4#</p>
                    <div className='pista-contenido'>
                        <h1>¿7+6?</h1>
                        <h2>¿3+3?</h2>
                    </div>
                </div>
                <div className='pista' id='pista-cuatro'>
                    <p>5#</p>
                    <div className='pista-contenido'>
                        <CountdownTimer targetDay={4} />
                    </div>
                </div>
                <div className='pista' id='pista-cuatro'>
                    <p>5#</p>
                    <div className='pista-contenido'>
                        <CountdownTimer targetDay={5} />
                    </div>
                </div>
                {/* <ul className='pistas-adicionales'>
                    <li>Increiblemente</li>
                    <li>No puedo definir el</li>
                    <li>Tanto amor que te tengo</li>
                    <li>Es por eso que</li>
                    <li>Nunca me reh&uacute;so a demostr&aacute;rtelo</li>
                    <li>Sab&iacute;as qu&eacute;...</li>
                    <li>Antes de conocerte</li>
                    <li>Mi vida no ten&iacute;a tanto sentido</li>
                    <li>Entonces, estoy agradecido.</li>
                    <li>Nunca me faltes porque vos</li>
                    <li>Transformas el motor en rebeld&iacute;a</li>
                    <li>Enamor&aacute;ndome tuyo cada d&iacute;a..</li>
                </ul> */}
            </main>
        </div>
    )
}

export default Main