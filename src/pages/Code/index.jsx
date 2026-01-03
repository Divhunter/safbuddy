import React from 'react'
import { useEffect } from 'react'
import pagesHeadersArray from '../../public/datas/pagesHeadersArray.json'
import PagesHeaders from '../../public/components/PagesHeaders'
import { Helmet } from 'react-helmet-async'

// styles
// import './m-code.css'
// import './d-code.css'

const Code = () => {

    useEffect(() => {
        document.documentElement.scrollTo({ top: 0, behavior: 'smooth' })
    }, [])

    const codeHeader = pagesHeadersArray.find(el => el.title === '11')
    const codeHeaderArray = []
    codeHeaderArray.push(codeHeader)

    return (
        <>
            <Helmet>
                <title>safbuddy.com - programme - code de la route</title>
                <meta 
                    name='description'
                    content='Page personnalisée du programme code de la route du site safbuddy.com' 
                />
                <link rel='canonical' href='https://www.safbuddy.com/Code' />
            </Helmet>
            <section id='code' className='code title-container-background'>
                {codeHeaderArray.map((item, index) => (
                    <PagesHeaders 
                        key={index}
                        titleCol1={item.titleCol1}
                        titleCol2={item.titleCol2}
                        subTitle1={item.subTitle1}
                        text1={item.text1 && 
                            <>
                                <div className='programme-containt'>
                                    <section className='programme'>
                                        <h3>Objectifs</h3>
                                        <p className='mb-3l'>
                                        Être capable de réussir l’Épreuve Théorique Générale (ETG) du code de la route.
                                        </p>

                                        <h3>Public concerné et prérequis</h3>
                                        <p>Toute personne aspirant à passer un premier permis.</p>
                                        <p className='mb-2l'>Être âgé de 15 ans minimum.</p>

                                        <h3>Modalités d’admission</h3>
                                        <ul className='list'>
                                        <li>Être titulaire de l’ASSR 2 ou de l’ASR</li>
                                        <li>Une e-photo (ANTS)</li>
                                        <li>Pièce d’identité ou carte de séjour</li>
                                        <li>Pièce d’identité d’un parent pour les mineurs</li>
                                        <li>Justificatif de domicile de moins de 6 mois</li>
                                        <li>
                                            Attestation d’hébergement + pièce d’identité de l’hébergeant
                                            (même nom et même prénom sur justificatif, pièce d’identité et attestation)
                                        </li>
                                        <li>
                                            Certificat individuel de participation à la Journée Défense et Citoyenneté (JDC) pour les moins de 25 ans
                                        </li>
                                        <li>Recensement pour les moins de 17 ans</li>
                                        <li>Savoir et comprendre le français</li>
                                        </ul>

                                        <h3>Qualification des intervenants</h3>
                                        <p className='mb-3l'>
                                        Enseignants titulaires du B.E.P.E.C.A.S.E.R. ou du Titre Professionnel
                                        Enseignant de la Conduite et de la Sécurité Routière (ECSR).
                                        </p>

                                        <h3>Moyens pédagogiques et techniques</h3>
                                        <ul className='list mb-2l'>
                                        <li>Salles équipées (multimédia) + support papier fourni</li>
                                        <li>Inscription à une application dédiée sur smartphone</li>
                                        <li>Exposés magistraux par thèmes</li>
                                        </ul>

                                        <h3>Effectifs</h3>
                                        <p className='mb-2l'>
                                        Leçons théoriques présentielles et distancielles (code de la route et sécurité routière)
                                        collectives jusqu’à 7 personnes.
                                        </p>

                                        <h3>Programme de formation</h3>
                                        <ul className='list'>
                                        <li>
                                            <strong>Module 1 : La circulation routière</strong> — signalisation, règles de circulation,
                                            intersections et priorités, limitations de vitesse, feux du véhicule, arrêt et stationnement
                                        </li>
                                        <li>
                                            <strong>Module 2 : Le véhicule</strong> — installation du conducteur et des passagers,
                                            équipements de sécurité, aides à la conduite, mécanique
                                        </li>
                                        <li>
                                            <strong>Module 3 : Le conducteur</strong> — limites (champ visuel, fatigue…),
                                            distances/temps de réaction, freinage, sécurité, comportement envers les autres usagers,
                                            éco-conduite/éco-mobilité, conduite à tenir en cas d’accident
                                        </li>
                                        <li>
                                            <strong>Module 4 : Notions diverses</strong> — catégories de permis, système à points,
                                            documents, chargement, transport de passagers
                                        </li>
                                        <li>
                                            <strong>Module 5 : Évaluations</strong> — entraînements type examens blancs (tests de 40 questions)
                                        </li>
                                        </ul>

                                        <h3>Modalités et délais d’accès</h3>
                                        <p>La formation peut se dérouler, en tout ou partie, via une plateforme dédiée.</p>
                                        <p>Le stagiaire reçoit par mail des identifiants (login + mot de passe) pour se connecter au Prépacode.</p>
                                        <p>La durée d’accès à la plateforme peut varier de 1 à 6 mois.</p>
                                        <p className='mb-3l'>
                                        Elle peut également se dérouler en présentiel en agence, pour une durée pouvant varier de 1 à 6 mois.
                                        </p>

                                        <h3>Modalités d’évaluation des acquis</h3>
                                        <p>Questionnaire oral en début de formation, puis évaluations au fil des séances par le formateur.</p>
                                        <p>Auto-évaluation avec des séries de tests de 40 questions.</p>
                                        <p className='mb-3l'>
                                        Évaluation finale des acquis : après conseil de l’enseignant, passage d’un examen code dans un centre agréé.
                                        </p>

                                        <h3>Sanction visée</h3>
                                        <p className='mb-2l'>Code de la route (si réussite à l’examen).</p>

                                        <h3>Durée de la formation</h3>
                                        <ul className='list'>
                                        <li>Conseillé : 20 h minimum</li>
                                        <li>Temps libre en présentiel, selon horaires d’ouverture de l’agence</li>
                                        <li>
                                            Calendrier de formation défini selon les disponibilités de l’élève et des formateurs
                                        </li>
                                        <li>L’accès (réservation) à la formation collective varie entre 7 et 15 jours</li>
                                        </ul>

                                        <h3>Tarif</h3>
                                        <p className='mb-3l'>300 € TTC — pour plus d’informations, contacter l’auto-école.</p>

                                        <h3>Amplitude horaire</h3>
                                        <p>
                                        <strong>Horaires du bureau :</strong> lundi 14h–19h ; mardi–vendredi 9h–12h et 14h–19h ; samedi 10h–12h
                                        </p>
                                        <p>
                                        <strong>Leçons de conduite (voiture) :</strong> lundi–vendredi 8h–20h ; samedi 8h–14h
                                        </p>
                                        <p className='mb-3l'>
                                        <strong>Lieu de la formation :</strong> 32 Rue François Rabelais, 69120 Vaulx-en-Velin
                                        </p>

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
                                        Public en situation de handicap : toutes nos formations sont accessibles (pour toute information,
                                        contactez notre référent handicap en agence afin de voir les modalités).
                                        </p>

                                        <p className='note' >
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

export default Code