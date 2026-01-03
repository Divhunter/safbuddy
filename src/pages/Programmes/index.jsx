import React from 'react'
import { useEffect } from 'react'
import { faUpload } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import pagesHeadersArray from '../../public/datas/pagesHeadersArray.json'
import PagesHeaders from '../../public/components/PagesHeaders'
import { Helmet } from 'react-helmet-async'

// styles
import './m-programmes.css'
import './d-programmes.css'

const Programmes = () => {

    useEffect(() => {
        document.documentElement.scrollTo({ top: 0, behavior: 'smooth' })
    }, [])

    const docsHeader = pagesHeadersArray.find(el => el.title === '3')
    const docsHeaderArray = []
    docsHeaderArray.push(docsHeader)

    // utils: construit une URL propre (ici nos noms sont déjà 'safe', on garde au cas où)
    const buildURL = (path) => {
    const parts = path.split('/')
    const file = parts.pop()
    return [...parts, encodeURIComponent(file)].join('/')
    }

    const docs = [
    { doc: `${process.env.PUBLIC_URL}/documents/programmes/programme-code.pdf`, price:'à partir de 300 € TTC', title: 'Code de la route' },
    { doc: `${process.env.PUBLIC_URL}/documents/programmes/programme-permis-b.pdf`, price:'à partir de 1246 € TTC', title: 'Permis B' },
    { doc: `${process.env.PUBLIC_URL}/documents/programmes/programme-aac-cs.pdf`, price:'à partir de 1128 € TTC', title: 'Conduites accompagnée et supervisée' },
    { doc: `${process.env.PUBLIC_URL}/documents/programmes/programme-formation-permis-boite-automatique.pdf`, price:'à partir de 1246 € TTC', title: 'Boîte automatique' },
    { doc: `${process.env.PUBLIC_URL}/documents/programmes/programme-formation-boite-auto-a-manuelle.pdf`, price:'à partir de 442 € TTC', title: 'Boîte automatique vers manuelle' },
    { doc: `${process.env.PUBLIC_URL}/documents/programmes/programme-formation-post-permis.pdf`, price:'à partir de 100 € TTC', title: 'Post permis' }
    ].map(d => ({ ...d, href: buildURL(d.doc) }))

    return (
        <>
            <Helmet>
                <title>safbuddy.com - programmes de formation</title>
                <meta 
                    name='description'
                    content='Page personnalisée des programmes de formation du site safbuddy.com' 
                />
                <link rel='canonical' href='https://www.safbuddy.com/Programmes' />
            </Helmet>
            <section id='programmes' className='docs programmes title-container-background'>
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
                                            <strong>
                                                {item.title}
                                                <br/>
                                            </strong>
                                            {item.price}
                                            <><br/>En savoir plus ... <FontAwesomeIcon icon={faUpload} /></>
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

export default Programmes