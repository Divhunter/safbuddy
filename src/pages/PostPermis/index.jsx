import React from 'react'
import { useEffect } from 'react'
import pagesHeadersArray from '../../public/datas/pagesHeadersArray.json'
import PagesHeaders from '../../public/components/PagesHeaders'
import { Helmet } from 'react-helmet-async'

const PostPermis = () => {

    useEffect(() => {
        document.documentElement.scrollTo({ top: 0, behavior: 'smooth' })
    }, [])

    const postPermisHeader = pagesHeadersArray.find(el => el.title === '10')
    const postPermisHeaderArray = []
    postPermisHeaderArray.push(postPermisHeader)

    return (
        <>
            <Helmet>
                <title>safbuddy.com - programme - post permis</title>
                <meta 
                    name='description'
                    content='Page personnalisée du programme post permis du site safbuddy.com' 
                />
                <link rel='canonical' href='https://www.safbuddy.com/PostPermis' />
            </Helmet>
            <section id='postPermis' className='postPermis title-container-background'>
                {postPermisHeaderArray.map((item, index) => (
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
                                        Renforcer les compétences acquises par les conducteurs de la catégorie B en période probatoire
                                        par le suivi de l’ensemble de la formation.
                                        </p>

                                        <h3>Public concerné et prérequis</h3>
                                        <p>Premier permis obtenu depuis au moins 6 mois et au plus 12 mois.</p>
                                        <p className='mb-2l'>
                                        Ne pas avoir commis, durant la période probatoire, d’infractions ayant donné lieu à retrait de points
                                        ou à une mesure de restriction ou de suspension du droit à conduire.
                                        </p>

                                        <h3>Modalités d’admission</h3>
                                        <ul className='list'>
                                        <li>Être titulaire du permis de conduire</li>
                                        <li>Une e-photo (ANTS)</li>
                                        <li>Pièce d’identité ou carte de séjour</li>
                                        <li>Pièce d’identité d’un parent pour les mineurs</li>
                                        <li>Justificatif de domicile de moins de 6 mois</li>
                                        <li>
                                            Attestation d’hébergement + pièce d’identité de l’hébergeant
                                            (même nom et même prénom sur justificatif, pièce d’identité et attestation)
                                        </li>
                                        </ul>

                                        <h3>Qualification des intervenants</h3>
                                        <p className='mb-2l'>
                                        Enseignants titulaires du B.E.P.E.C.A.S.E.R. (ou équivalent) et d’une attestation de formation
                                        spécifique prévue par l’arrêté du 2 mai 2019 relatif à la formation requise pour l’animation
                                        de la formation complémentaire prévue à l’article L.223-1 du code de la route,
                                        ou titulaires du Titre Professionnel ECSR.
                                        </p>

                                        <h3>Moyens pédagogiques et techniques</h3>
                                        <ul className='list mb-2l'>
                                        <li>Salle de cours équipée (multimédia / vidéo, tableau, fournitures)</li>
                                        <li>
                                            Cours théoriques en présentiel collectifs — effectif min. 6 personnes, max. 12
                                        </li>
                                        </ul>

                                        <h3>Programme de formation</h3>
                                        <ul className='list mb-2l'>
                                        <li><strong>Module 1 (1&nbsp;h)</strong> : Présentation — objectifs, cadre pédagogique et réglementaire, questionnaire d’entrée, échanges</li>
                                        <li><strong>Module 2 (1&nbsp;h&nbsp;45)</strong> : Se positionner face aux risques — exploitation du questionnaire, auto-évaluation, positionnement</li>
                                        <li><strong>Module 3 (1&nbsp;h&nbsp;15)</strong> : Situations complexes — comprendre et résoudre</li>
                                        <li><strong>Module 4 (1&nbsp;h&nbsp;45)</strong> : Mobilité & thématiques jeunes — situations types, scénarios, dangers potentiels</li>
                                        <li><strong>Module 5 (1&nbsp;h)</strong> : Choix de mobilité — se connaître, sensibilité environnementale</li>
                                        <li><strong>Module 6 (15&nbsp;min)</strong> : Bilan</li>
                                        </ul>

                                        <h3>Sanction visée</h3>
                                        <p>
                                        Attestation de formation définie en annexe de l’arrêté du 2 mai 2019 relatif à la formation requise
                                        pour l’animation de la formation complémentaire prévue à l’article L.223-1 du code de la route.
                                        </p>
                                        <p className='mb-3l'>Attestation d’engagement du participant.</p>

                                        <h3>Durée de la formation</h3>
                                        <p className='mb-2l'>Une journée de 7 heures.</p>

                                        <h3>Modalités d’évaluation des acquis</h3>
                                        <ul className='list mb-2l'>
                                        <li>Questionnaire d’auto-évaluation à l’oral en début de formation</li>
                                        <li>Feuille d’émargement</li>
                                        <li>Attestation d’engagement</li>
                                        </ul>

                                        <h3>Tarif</h3>
                                        <p className='mb-3l'>À partir de 100&nbsp;€ TTC — pour plus d’informations, contacter l’auto-école.</p>

                                        <h3>Amplitude horaire</h3>
                                        <p>
                                        <strong>Horaires du bureau&nbsp;:</strong> lundi 14&nbsp;h–19&nbsp;h ; mardi–vendredi 9&nbsp;h–12&nbsp;h et 14&nbsp;h–19&nbsp;h ;
                                        samedi 10&nbsp;h–12&nbsp;h
                                        </p>
                                        <p className='mb-3l'>
                                        <strong>Leçons de conduite (voiture)&nbsp;:</strong> lundi–vendredi 8&nbsp;h–20&nbsp;h ; samedi 8&nbsp;h–14&nbsp;h
                                        </p>

                                        <h3>Lieu de la formation</h3>
                                        <p className='mb-3l'>32 Rue François Rabelais, 69120 Vaulx-en-Velin</p>

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

export default PostPermis