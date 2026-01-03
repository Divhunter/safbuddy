import React from 'react'
import { useState, useEffect } from 'react'
import { faBars, faXmark, faPhoneFlip, faLocationDot, faUpload, faArrowUpRightFromSquare } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

// styles
import './m-header.css'
import './d-header.css'

const Header = () => {

	useEffect(() => {
		document.documentElement.scrollTo({ top: 0, behavior: 'smooth' })
	}, [])

	const [isOpen, setIsOpen] = useState(false)

	const isOpenState = () => {
        setIsOpen(!isOpen)
    }

	// téléchargement possible à partir d'un nouvel onglet
	const openDocument = () => {
		const fileURL = `${process.env.PUBLIC_URL}/documents/label/certificat-qualiopi.pdf`
		window.open(fileURL, '_blank')  
	}

	return (
		<nav id='navbar' className={	
			isOpen? 
			'navbar navbar-open':
			'navbar navbar-closed'}>

			<a href='https://www.safbuddy.com/Home' rel='noopener'>
				<picture>
					<source srcSet={`${process.env.PUBLIC_URL}/assets/brands/logo-caravelle.webp`} type='image/webp' fetchpriority='high' />
					<img 
						className='navbar__logo-caravelle' 
						src={`${process.env.PUBLIC_URL}/assets/brands/logo-caravelle.webp`} 
						width='668' 
						height='245'
						loading='eager' 
						fetchpriority='high'
						importance='high' 
						alt='logo-caravelle' 
						decoding='async'
					/>
				</picture>
			</a>	

			<div className={
				isOpen?
				'navbar__onglets onglet-labelisation white-style' : 'navbar__onglets onglet-labelisation gray-style'}
				onClick={openDocument}
				target='_blank'
                rel='noopener noreferrer'
			>
				Certificat Qualiopi &nbsp;
				<FontAwesomeIcon 
					icon={faUpload} 
				/>
			</div>
			
			<a
				href='https://www.safbuddy.com/Docs'
				rel='noopener'
				aria-label='Voir les documents annexes de notre auto-école'
			>
				<div className={
					isOpen?
					'navbar__onglets onglet-docs white-style' : 'navbar__onglets onglet-docs gray-style'}
				>
					Documents annexes
				</div>
			</a>

			<a
				href='https://www.vroomvroom.fr/ratings/widget?school_id=5246e3c624a0390002001ede&positive=ok&last=15&style=carousel-min'
				target='_blank'
				rel='noopener noreferrer'
			>
				<div className={
					isOpen?
					'navbar__onglets onglet-avis white-style' : 'navbar__onglets onglet-avis gray-style'}>
					Avis certifiés &nbsp;
					<FontAwesomeIcon 
						icon={faArrowUpRightFromSquare} 
					/>
				</div>
			</a>

			<a href='#contact' aria-label='En savoir plus pour nous contacter' rel='noopener'>
				<div className={ 
					isOpen?
					'navbar__contact white' : 'navbar__contact gray'}>
					<FontAwesomeIcon 
						icon={faPhoneFlip} 
					/>&nbsp;&nbsp;
					<FontAwesomeIcon 
						icon={faLocationDot} 
					/>
				</div>
			</a>	

			<div 
				className={
					isOpen?
					'navbar__square ferme' : 'navbar__square ouvert'} 
					onClick={isOpenState}>
				<div className='navbar__square__bar bar-1'></div>
				<div className='navbar__square__bar bar-2'></div>
				<div className='navbar__square__bar bar-3'></div>
				<div className='navbar__square__bar bar-4'></div>
			</div>
			
			<div className={
					isOpen?
					'cross ouvert' : 'cross ferme'} 
					onClick={isOpenState}>
				<div className='cross-content'>
					<div className='cross-bar'></div>
					<div className='cross-bar'></div>
				</div>
			</div>

			<FontAwesomeIcon 
				onClick={isOpenState} 
				className={
					isOpen?
					'navbar__button-bars closed':
					'navbar__button-bars open'} 
				icon={faBars} 
			/>
			<FontAwesomeIcon 
				onClick={isOpenState}
				className={
					isOpen?
					'navbar__button-x open':
					'navbar__button-x closed'} 
				icon={faXmark} 
			/>
			<menu className={
				isOpen?
				'navbar__menu navbar__menu-open':
				'navbar__menu navbar__menu-closed'}>
				<a href='https://www.safbuddy.com/Home' rel='noopener'>
					<div	
						// onClick={isOpenState} 
						className='nav__menu__link'>
						Accueil
					</div>
				</a>
				<a href='#about'>
					<div
						onClick={isOpenState}
						className='nav__menu__link'>
						À propos
					</div>
				</a>
				<a 
					href='https://www.safbuddy.com/Programmes'
  					rel='noopener'
				>
					<div
						// onClick={isOpenState}
						className='nav__menu__link'>
						Programmes de formation
					</div>
				</a>
				<a href='#unEuroEtCPF'>
					<div
						onClick={isOpenState}
						className='nav__menu__link'>
						Permis à 1 euro par jour
					</div>
				</a>
				<a href='#CPF'>
					<div
						onClick={isOpenState}
						className='nav__menu__link'>
						Financement CPF
					</div>
				</a>
				<a
					href='https://www.safbuddy.com/Code'
					rel='noopener'
				>
					<div
						// onClick={isOpenState}
						className='nav__menu__link'>
						Code de la route
					</div>
				</a> 
				<a
					href='https://www.safbuddy.com/PermisB'
					rel='noopener'
				>
					<div
						// onClick={isOpenState}
						className='nav__menu__link'>
						Permis B
					</div>
				</a>
				<a
					href='https://www.safbuddy.com/PermisBEA'
					rel='noopener'
				>
					<div
						// onClick={isOpenState}
						className='nav__menu__link'>
						Permis BEA
					</div>
				</a>
				<a
					href='https://www.safbuddy.com/CACCetS'
					rel='noopener'
				>
					<div
						// onClick={isOpenState}
						className='nav__menu__link'>
						Conduites accompagnée et supervisée
					</div>
				</a>
				<a
					href='https://www.safbuddy.com/PasserelleBABM'
					rel='noopener'
				>
					<div
						// onClick={isOpenState}
						className='nav__menu__link'>
						Passerelle boîte auto vers manuelle
					</div>
				</a>
				<a
					href='https://www.safbuddy.com/PostPermis'
					rel='noopener'
				>
					<div
						// onClick={isOpenState}
						className='nav__menu__link'>
						Formation Post-permis
					</div>
				</a>
				<a 
					href='https://www.vroomvroom.fr/ratings/widget?school_id=5246e3c624a0390002001ede&positive=ok&last=15&style=carousel-min'
					target='_blank'
  					rel='noopener noreferrer'
					aria-label='En savoir plus sur nos avis cerifiés'
				>
					<div
						onClick={isOpenState}
						className='nav__menu__link mobile-only'>
						Avis certifiés
					</div>
				</a>
				<div
					onClick={() => { isOpenState(); openDocument(); }}
					className='nav__menu__link mobile-only'>
					Certificat Qualiopi &nbsp;
					<FontAwesomeIcon 
						icon={faUpload} 
					/>
				</div>
				<a
					href='https://www.safbuddy.com/Docs'
					rel='noopener'
					aria-label="Voir les documents annexes de notre auto-école"
				>
					<div
						// onClick={isOpenState}
						className='nav__menu__link mobile-only'>
						Documents annexes
					</div>
				</a>
				<a href='#contact' aria-label="En savoir plus pour nous contacter">
					<div
						onClick={isOpenState}
						className='nav__menu__link'>
						Contact
					</div>
				</a>
			</menu> 
		</nav>
	)
}
 
export default Header