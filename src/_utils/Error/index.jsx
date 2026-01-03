import React from 'react'
import { useEffect } from 'react'
import { Helmet } from 'react-helmet-async'

// styles
import './m-error.css'
import './d-error.css'

const Error = () => {

    useEffect(() => {
        window.scrollTo(0, 0)
    }, [])

	return (
        <>
            <Helmet>
				<title>safbuddy.com - erreur</title>
				<meta name='description'
					    content='Page erreur personnalisée du site safbuddy.com' />
                <link rel='canonical' href='*' />
			</Helmet>
            <section className='error'>
                <h1 className='error__statut'>404</h1>
                <picture>
                    <source srcSet={`${process.env.PUBLIC_URL}/assets/brands/logo-error.webp`} type='image/webp' fetchpriority='high' />
                    <img 
                        className='error__failled' 
                        src={`${process.env.PUBLIC_URL}/assets/brands/logo-error.webp`} 
                        width='2000' 
                        height='2000'
                        alt='erreur 404'
                        loading='lazy' 
                        fetchpriority='high'
                        decoding='async'
                    />
                </picture>
                <h2 className='error__subheader'>Oups! Une erreur est survenue!</h2>
                <a className='error__link' href='https://www.safbuddy.com' rel='noopener'>
                    <p>
                        Retour au site
                    </p>
                </a>
            </section>
        </>
	)
}
 
export default Error