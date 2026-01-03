import React from 'react'
import { useEffect } from 'react'
import pagesHeadersArray from '../../public/datas/pagesHeadersArray.json'
import PagesHeaders from '../../public/components/PagesHeaders'
import { Helmet } from 'react-helmet-async'

const PasserelleBABM = () => {

    useEffect(() => {
        document.documentElement.scrollTo({ top: 0, behavior: 'smooth' })
    }, [])

    const passerelleBABMHeader = pagesHeadersArray.find(el => el.title === '9')
    const passerelleBABMHeaderArray = []
    passerelleBABMHeaderArray.push(passerelleBABMHeader)

    return (
        <>
            <Helmet>
                <title>safbuddy.com - programme - passerelle boîte auto vers manuelle</title>
                <meta 
                    name='description'
                    content='Page personnalisée du programme passerelle boîte auto vers manuelle du site safbuddy.com' 
                />
                <link rel='canonical' href='https://www.safbuddy.com/PasserelleBABM' />
            </Helmet>
            <section id='passerelleBABM' className='passerelleBABM title-container-background'>
                {passerelleBABMHeaderArray.map((item, index) => (
                    <PagesHeaders 
                        key={index}
                        titleCol1={item.titleCol1}
                        titleCol2={item.titleCol2}
                        subTitle1={item.subTitle1}
                        text1={item.text1 && 
                            <>
                                <div className='programme-containt'>
                                    <section className='programme'>
                                        <p className='mb-3l'>
                                        Candidat détenteur du permis B boîte automatique souhaitant conduire une voiture à boîte manuelle.
                                        </p>

                                        <h3>Objectif pédagogique</h3>
                                        <p className='mb-3l'>
                                        À l’issue de la formation, le stagiaire sera capable de conduire en autonomie et en sécurité un véhicule
                                        de la catégorie B avec une boîte de vitesses manuelle.
                                        </p>

                                        <h3>Pré-requis</h3>
                                        <p className='mb-3l'>Être titulaire du permis de conduire de la catégorie B (boîte automatique).</p>

                                        <h3>Modalités d’inscription</h3>
                                        <p className='mb-3l'>En agence ou préinscription sur notre site internet.</p>

                                        <h3>Lieu de la formation</h3>
                                        <p className='mb-3l'>32 Rue François Rabelais, 69120 Vaulx-en-Velin</p>

                                        <h3>Profil des intervenants</h3>
                                        <p className='mb-3l'>
                                        Formateurs professionnels diplômés du BEPECASER et/ou du Titre Professionnel ECSR,
                                        avec autorisation d’enseigner en cours de validité.
                                        </p>

                                        <h3>Moyens et supports pédagogiques</h3>
                                        <ul className='list mb-3l'>
                                        <li>Une voiture équipée d’une boîte de vitesses manuelle</li>
                                        </ul>

                                        <h3>Modalités d’évaluation des compétences</h3>
                                        <p>Acquisition par évaluations formatives :</p>
                                        <ul className='list mb-3l'>
                                        <li>Mises en situation en autonomie durant la formation</li>
                                        </ul>

                                        <h3>Sanction de la formation</h3>
                                        <p className='mb-3l'>Attestation de réalisation.</p>

                                        <h3>Tarif</h3>
                                        <p className='mb-3l'>442&nbsp;€ TTC — pour plus d’informations, contacter l’auto-école.</p>

                                        <h3>Amplitude horaire</h3>
                                        <p>
                                        <strong>Horaires du bureau&nbsp;:</strong> lundi 14&nbsp;h–19&nbsp;h ; mardi–vendredi 9&nbsp;h–12&nbsp;h et 14&nbsp;h–19&nbsp;h ;
                                        samedi 10&nbsp;h–12&nbsp;h
                                        </p>
                                        <p className='mb-3l'>
                                        <strong>Leçons de conduite (voiture)&nbsp;:</strong> lundi–vendredi 8&nbsp;h–20&nbsp;h ; samedi 8&nbsp;h–14&nbsp;h
                                        </p>

                                        <h3>Déroulement de la formation</h3>
                                        <p>Durée totale : 7&nbsp;heures, en 2 étapes :</p>
                                        <ul className='list mb-3l'>
                                        <li>1&nbsp;h : appréhension de la psychomotricité de la boîte de vitesses manuelle</li>
                                        <li>6&nbsp;h : conduite en trafic nul ou faible</li>
                                        </ul>

                                        <h3>Contenus de la formation</h3>
                                        <p><strong>Maniement sur véhicule</strong> — 1&nbsp;heure</p>
                                        <p><strong>Compétences</strong></p>
                                        <ul className='list mb-3l'>
                                        <li>Comprendre le point de patinage de l’embrayage et le mettre en œuvre</li>
                                        <li>Réaliser un démarrage en côte en toute sécurité</li>
                                        </ul>

                                        <p><strong>Trafic nul ou faible + conditions variées</strong> — 6&nbsp;heures</p>
                                        <p><strong>Compétences</strong></p>
                                        <ul className='list mb-3l'>
                                        <li>Utiliser la boîte manuelle de façon rationnelle et sûre (éco-conduite incluse)</li>
                                        <li>Diriger le véhicule en adaptant allure et trajectoire à l’environnement</li>
                                        </ul>

                                        <h3>Accessibilités aux personnes handicapées</h3>
                                        <p>
                                        Les personnes en situation de handicap sont invitées à nous contacter pour étudier les possibilités ;
                                        l’établissement respecte les normes ERP en vigueur.
                                        </p>
                                        <p className='mb-3l'>
                                        Notre référent handicap est formé pour vous accueillir : écrivez-nous à
                                        {' '}
                                        <a href='mailto:aecaravelle.vaulx@gmail.com'>aecaravelle.vaulx@gmail.com</a>.
                                        </p>

                                        <h3>Modalités d’accès</h3>
                                        <p className='mb-3l'>
                                        Public en situation de handicap : formations accessibles. Pour toute information,
                                        contactez notre référent handicap en agence.
                                        </p>

                                        <p className='note'>
                                        <em>Contenu : selon la disponibilité des plannings des enseignants.</em>
                                        </p>
                                    </section>
                                </div>
                            </>
                        }
                    />
                ))}
            </section>
        </>
    )
}

export default PasserelleBABM