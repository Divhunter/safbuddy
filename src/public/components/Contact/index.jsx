import React from 'react'
import pagesHeadersArray from '../../datas/pagesHeadersArray.json'
import PagesHeaders from '../../components/PagesHeaders'
import ContactForm from '../../../functions/ContactForm'
import { faClock, faEnvelope, faCar, faArrowUpRightFromSquare, faFilePen} from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

// styles
import './m-contact.css'
import './d-contact.css'

const Contact = () => {

    const contactHeader = pagesHeadersArray.find(el => el.title === '12')
    const contactHeaderArray = []
    contactHeaderArray.push(contactHeader)

	return (
		<section id='contact' className='contact title-container-background'>
            {contactHeaderArray.map((item, index) => (
                <PagesHeaders 
                    key={index}
                    titleCol1={item.titleCol1}
                    titleCol2={item.titleCol2}
                    subTitle1={
                        <>
                            <br/>
                            <a
                                className='sub-title-text link blueLink'
                                href='#contactForm-mark' aria-label="Nous contacter à partir du formulaire de contact">
                                    Formulaire de contact <FontAwesomeIcon icon={faArrowUpRightFromSquare}/><br/>
                            </a>
                            <a 
                                className='sub-title-text link blueLink'
                                href='mailto:aecaravelle.vaulx@gmail.com' 
                                
                            >
                                @safbuddy.com
                            </a>
                            <div className='sub-title-text sub-title-text--margin'>
                                <br/>04 78 80 85 56 - 06 61 67 32 68
                                <br/><br/>
                                <span id='litigeContact'>
                                    Pour tout litige avec l’auto-école, contactez notre médiateur :
                                    <br/>M&#201;DIATION SOLUTION 
                                    <br/>222 Chemin de la Bergerie
                                    <br/>01800 SAINT-JEAN-DE-NIOST
                                    <br/>Téléphone : 04 82 53 93 06
                                </span>
                            </div>
                        </>
                    }
                    text1={item.text1 && 
                        <div id='horaires'>
                            <h1 className='horaires-title'>
                                <span>
                                    <FontAwesomeIcon
                                    icon={faClock} 
                                    />
                                </span>
                                &nbsp; Horaires
                            </h1>
                            <div className='horaires-paragraph'>
                                <dl class='horaires'>
                                <dt>Lundi</dt>
                                <dd>14h00 – 19h00</dd>

                                <dt>Mardi</dt>
                                <dd>
                                    <span>09h00 – 12h00</span>
                                    <span>14h00 – 19h00</span>
                                </dd>

                                <dt>Mercredi</dt>
                                <dd>
                                    <span>09h00 – 12h00</span>
                                    <span>14h00 – 19h00</span>
                                </dd>

                                <dt>Jeudi</dt>
                                <dd>
                                    <span>09h00 – 12h00</span>
                                    <span>14h00 – 19h00</span>
                                </dd>

                                <dt>Vendredi</dt>
                                <dd>
                                    <span>09h00 – 12h00</span>
                                    <span>14h00 – 19h00</span>
                                </dd>

                                <dt>Samedi</dt>
                                <dd>10h00 – 12h00</dd>

                                <dt>Dimanche</dt>
                                <dd>Fermé</dd>
                                </dl>
                                <br/>
                            </div>
                            <br/>
                        </div>
                    }
                    text2={item.text2 &&
                        <div id='adresse'>
                            <h1 className='adresseP-title'>
                                <span>
                                    <FontAwesomeIcon
                                    icon={faEnvelope} 
                                    />
                                </span>
                                &nbsp; Adresse
                            </h1>
                            <p className='adresseP'>
                                AUTO-ÉCOLE CARAVELLE
                                <br/>
                                32 Rue François Rabelais
                                <br/>
                                69120 Vaulx-en-Velin
                                <br/><br/>
                            </p>
                            <br/>
                        </div>
                    }
                    text3={item.text3 &&
                        <div id='local'>
                            <h1 className='itinéraire-title'>
                                <span>
                                    <FontAwesomeIcon
                                    icon={faCar} 
                                    />
                                </span>
                                &nbsp; Itinéraire
                            </h1>
                            <iframe 
                                className='contact__map'
                                src='https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2782.6738625353014!2d4.914332076159862!3d45.77772597108093!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47f4c1f04629582d%3A0xb3c0ef3976fbb113!2sAuto-%C3%A9cole%20Caravelle%20permis%20Auto%20Moto%20Vaulx-en-V%C3%A9lin!5e0!3m2!1sfr!2sfr!4v1756384633848!5m2!1sfr!2sfr' 
                                title='Carte Google Maps de notre emplacement'
                                allowFullScreen
                                loading='lazy' 
                                frameBorder='0' 
                                referrerPolicy='no-referrer'>
                            </iframe>
                            <div id='contactForm-mark'></div>
                            <br/><br/><br/>
                        </div>
                    }
                    text4={item.text4 &&
                        <div id='formulaire'>
                            <h1 className='contactForm-title'>
                                <span>
                                    <FontAwesomeIcon
                                    icon={faFilePen} 
                                    />
                                </span>
                                &nbsp; Formulaire de contact
                            </h1>
                            <ContactForm/>
                            <br/>
                        </div>
                    }
                />
            ))}
		</section>
	)
}
 
export default Contact