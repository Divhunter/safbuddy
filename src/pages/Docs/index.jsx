import React from 'react'
import { useEffect } from 'react'
import { faUpload } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import pagesHeadersArray from '../../public/datas/pagesHeadersArray.json'
import PagesHeaders from '../../public/components/PagesHeaders'
import { Helmet } from 'react-helmet-async'

// styles
import './m-docs.css'
import './d-docs.css'

const Docs = () => {

    useEffect(() => {
        document.documentElement.scrollTo({ top: 0, behavior: 'smooth' })
    }, [])

    const docsHeader = pagesHeadersArray.find(el => el.title === '2')
    const docsHeaderArray = []
    docsHeaderArray.push(docsHeader)

    // utils: construit une URL propre (ici nos noms sont déjà 'safe', on garde au cas où)
    const buildURL = (path) => {
    const parts = path.split('/');
    const file = parts.pop();
    return [...parts, encodeURIComponent(file)].join('/');
    };

    const docs = [
    { doc: `${process.env.PUBLIC_URL}/documents/label-qualite/Attestation-Label-Qualite.pdf`, name: 'Attestation Label Qualité' },
    { doc: `${process.env.PUBLIC_URL}/documents/label-qualite/deroulement-et-enjeux-formation-b.pdf`, name: 'Déroulement et enjeux formation B' },
    { doc: `${process.env.PUBLIC_URL}/documents/label-qualite/reglement-interieur-de-l-auto-ecole.pdf`, name: 'Règlement intérieur de l\'auto-école' },
    { doc: `${process.env.PUBLIC_URL}/documents/label-qualite/descriptif-aac-et-cs.pdf`, name: 'Descriptif AAC et CS' },
    { doc: `${process.env.PUBLIC_URL}/documents/label-qualite/programme-de-formation-post-permis.pdf`, name: 'Programme de formation post permis' },
    { doc: `${process.env.PUBLIC_URL}/documents/label-qualite/parcours-de-formation-b.pdf`, name: 'Parcours de formation B' },
    { doc: `${process.env.PUBLIC_URL}/documents/label-qualite/fiche-d-evaluation-de-depart.pdf`, name: 'Fiche d\'évaluation de départ' },
    { doc: `${process.env.PUBLIC_URL}/documents/label-qualite/description-du-procede-d-evaluation-du-projet-professionnelle.pdf`, name: 'Description du procédé d\'évaluation du projet professionnelle' },
    { doc: `${process.env.PUBLIC_URL}/documents/label-qualite/modalite-de-prise-en-compte-des-personnes-en-situation-handicap.pdf`, name: 'Modalité de prise en compte des personnes en situation de handicap' },
    { doc: `${process.env.PUBLIC_URL}/documents/label-qualite/modalite-de-traitement-des-reclamations.pdf`, name: 'Modalité de traitement des réclamations' }/*,
    { doc: `${process.env.PUBLIC_URL}/documents/label-qualite/convention-permis-un-euro.pdf`, name: 'Convention de permis à un euro par jour'}*/
    ].map(d => ({ ...d, href: buildURL(d.doc) }));

    return (
        <>
            <Helmet>
                <title>safbuddy.com - documments annexes</title>
                <meta 
                    name='description'
                    content='Page personnalisée des documments annexes du site safbuddy.com' 
                />
                <link rel='canonical' href='https://www.safbuddy.com/Docs' />
            </Helmet>
            <section id='docs' className='docs title-container-background'>
                {docsHeaderArray.map((item, index) => (
                    <PagesHeaders 
                        key={index}
                        titleCol1={item.titleCol1}
                        titleCol2={item.titleCol2}
                        text1={item.text1 && 
                            <>
                                <div className='docs__container'>
                                    {docs.map((item, idx) => (
                                        <a
                                        key={idx}
                                        className='docs__container__item'
                                        href={item.href}
                                        target='_blank'
                                        rel='noopener noreferrer'
                                        >
                                        {item.name}<><br/>En savoir plus ... <FontAwesomeIcon icon={faUpload} /></>
                                        </a>
                                    ))}
                                </div>
                            </>
                        }
                    />
                ))}
            </section>
        </>
    )
}

export default Docs