import React from 'react'
import { faArrowUpRightFromSquare, } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

// styles
import './m-unEuroEtCPF.css'
import './d-unEuroEtCPF.css'

const UnEuroEtCPF = () => {

    return (
        <section id='title-container' className='unEuroEtCPF__filtre'>
            <br/>
            <div className='underline under2'></div>
            <br/>
            <div id='unEuroEtCPF'>
                <article>
                    <h2 className='Title'><span>PERMIS À 1 EURO</span><br/> par jour</h2>
                    <p id='paragraphUnEuro' className='paragraph'>Notre établissement labellisé <br/>« QUALITE DES FORMATIONS AU SEIN DES &#201;COLES DE CONDUITE  » bénéficie de la garantie financière, qui permet d’assurer la formation du PERMIS 1 € PAR JOUR.</p>
                    <br/><br/><br/>
                </article>
                <div className='docs__container docs__container--padding'>
                    <a 
                        href='https://www.securite-routiere.gouv.fr/passer-son-permis-de-conduire/financement-du-permis-de-conduire/permis-1-eu-par-jour/definition-du' 
                        target='_blank'
                        rel='noopener noreferrer'
                        id='buttonUnEuro'
                        className='paragraph docs__container__item'
                    >
                        En savoir plus <FontAwesomeIcon icon={faArrowUpRightFromSquare}/>
                    </a>
                </div>
                <br/><br/>
            </div>
            <br/>
            <div className='underline under2'></div>
            <div id='CPF'>
                <article>
                    <h2 className='Title'><span>FINANCEMENT</span><br/>CPF</h2>
                    <p id='paragraphCPF' className='paragraph'>Notre établissement certifié <br/>« QUALIOPI  » vous permet de financer votre formation par votre Compte Personnel de Formation.</p>
                    <br/><br/><br/>
                </article>
                <div className='docs__container docs__container--padding'>
                    <a 
                        href='https://www.moncompteformation.gouv.fr/espace-prive/html/#/' 
                        target='_blank'
                        rel='noopener noreferrer' 
                        id='buttonCPF'
                        className='paragraph docs__container__item'
                    >
                        En savoir plus <FontAwesomeIcon icon={faArrowUpRightFromSquare}/>
                    </a>
                </div>
                <br/><br/><br/>
            </div>
        </section>
    )
}

export default UnEuroEtCPF