import React from 'react'
import { useEffect } from 'react'
import pagesHeadersArray from '../../public/datas/pagesHeadersArray.json'
import PagesHeaders from '../../public/components/PagesHeaders'
import { Helmet } from 'react-helmet-async'

// styles
// import './m-caccets.css'
// import './d-caccets.css'

const CACCetS = () => {

    useEffect(() => {
        document.documentElement.scrollTo({ top: 0, behavior: 'smooth' })
    }, [])

    const caccetsHeader = pagesHeadersArray.find(el => el.title === '8')
    const caccetsHeaderArray = []
    caccetsHeaderArray.push(caccetsHeader)

    return (
        <>
            <Helmet>
                <title>safbuddy.com - programme - conduites accompagnée et supervisée</title>
                <meta 
                    name='description'
                    content='Page personnalisée des programmes conduites accompagnée et supervisée du site safbuddy.com' 
                />
                <link rel='canonical' href='https://www.safbuddy.com/CACCetS' />
            </Helmet>
            <section id='caccets' className='caccets title-container-background'>
                {caccetsHeaderArray.map((item, index) => (
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
                                        <p className='mb-2l'>
                                        Être capable, en toute sécurité, de conduire et manœuvrer un véhicule de la catégorie B
                                        n’excédant pas 3,5&nbsp;t de PTAC et ne comportant pas, outre le siège conducteur, plus de 8 places assises.
                                        </p>

                                        <h3>Public concerné et prérequis</h3>
                                        <ul className='list mb-2l'>
                                        <li>Avoir 16&nbsp;ans pour le permis B formation et la conduite supervisée</li>
                                        <li>Avoir 15&nbsp;ans pour la formation conduite accompagnée</li>
                                        </ul>

                                        <h3>Modalités d’admission</h3>
                                        <ul className='list'>
                                        <li>Être titulaire de l’ASSR&nbsp;2 ou de l’ASR</li>
                                        <li>Une e-photo (ANTS)</li>
                                        <li>Pièce d’identité ou carte de séjour</li>
                                        <li>Pièce d’identité d’un parent pour les mineurs</li>
                                        <li>Justificatif de domicile de moins de 6&nbsp;mois</li>
                                        <li>
                                            Attestation d’hébergement + pièce d’identité de l’hébergeant
                                            (même nom et même prénom sur justificatif, pièce d’identité et attestation)
                                        </li>
                                        <li>Certificat individuel de participation à la Journée Défense et Citoyenneté (JDC) pour les moins de 25&nbsp;ans</li>
                                        <li>Recensement pour les moins de 17&nbsp;ans</li>
                                        <li>Savoir et comprendre le français</li>
                                        </ul>

                                        <h3>Qualification des intervenants</h3>
                                        <p className='mb-2l'>
                                        Enseignants titulaires du B.E.P.E.C.A.S.E.R. ou du Titre Professionnel
                                        Enseignant de la Conduite et de la Sécurité Routière (ECSR).
                                        </p>

                                        <h3>Moyens pédagogiques et techniques</h3>
                                        <ul className='list mb-2l'>
                                        <li>Salle de cours équipée (multimédia&nbsp;/ vidéo, tableau, fournitures, livret, grille code)</li>
                                        <li>Véhicules de la catégorie B adaptés à l’enseignement</li>
                                        <li>Fiche de suivi et livret d’apprentissage dématérialisés</li>
                                        <li>Accès illimité au code en ligne (disponible en dehors des horaires de formation)</li>
                                        <li>Supports pédagogiques spécifiques&nbsp;: livre et livret de code</li>
                                        <li>Leçons théoriques (présentiel et distanciel) collectives jusqu’à 7 personnes</li>
                                        <li>Leçons pratiques individuelles (conduite)</li>
                                        </ul>

                                        <h3>Programme de formation</h3>
                                        <p className='mb-1l'>
                                        Atteindre et valider les compétences du programme du permis B,
                                        en lien avec le Référentiel pour l’Éducation à une Mobilité Citoyenne (REMC).
                                        </p>
                                        <ul className='list mb-2l'>
                                        <li>Compétence&nbsp;1&nbsp;: maîtriser le maniement du véhicule dans un trafic faible ou nul</li>
                                        <li>Compétence&nbsp;2&nbsp;: appréhender la route et circuler dans des conditions normales</li>
                                        <li>Compétence&nbsp;3&nbsp;: circuler dans des conditions difficiles et partager la route avec les autres usagers</li>
                                        <li>Compétence&nbsp;4&nbsp;: pratiquer une conduite autonome, sûre et économique</li>
                                        </ul>

                                        <h3>Modalités d’évaluation des acquis</h3>
                                        <ul className='list mb-2l'>
                                        <li>Évaluations continues et de synthèse correspondant aux contenus du REMC</li>
                                        <li>Épreuve Théorique Générale (ETG) du permis B (15&nbsp;ans pour AAC, 16&nbsp;ans pour les autres filières)</li>
                                        <li>Épreuve pratique du permis B&nbsp;: à partir de 17&nbsp;ans</li>
                                        </ul>

                                        <h3>Sanction visée</h3>
                                        <p className='mb-2l'>Certificat du permis de conduire de la catégorie B.</p>

                                        <h3>Durée de la formation</h3>
                                        <ul className='list mb-2l'>
                                        <li>Un minimum de 20&nbsp;h de formation théorique et 22&nbsp;h de formation pratique, dont 2&nbsp;h de RDV préalable avec les accompagnateurs (permis B conduite accompagnée)</li>
                                        <li>
                                            Après une phase de conduite accompagnée d’un minimum d’un an et de 3000&nbsp;km et après les 2 RDV pédagogiques
                                            (pas de minimum de durée ou de km pour la conduite supervisée)
                                        </li>
                                        <li>Durée déterminée lors de l’évaluation de départ puis ajustée selon la progression</li>
                                        </ul>

                                        <h3>Tarif</h3>
                                        <p className='mb-3l'>À partir de 1&nbsp;128&nbsp;€ TTC.</p>

                                        <h3>Amplitude horaire</h3>
                                        <p className='mb-2l'>
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
                                        Public en situation de handicap&nbsp;: toutes nos formations sont accessibles (pour toute information,
                                        contactez notre référent handicap en agence afin de voir les modalités).
                                        </p>

                                        <p className='note'>
                                        <em>Contenu&nbsp;: selon la disponibilité des plannings des enseignants.</em>
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

export default CACCetS