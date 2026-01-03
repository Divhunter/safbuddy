import React from 'react'
//import { Link } from 'react-router-dom'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { ScrollToPlugin} from 'gsap/ScrollToPlugin'
import { useState, useEffect } from 'react'
import { faArrowUpRightFromSquare } from '@fortawesome/free-solid-svg-icons'
import { fab, faWhatsapp } from '@fortawesome/free-brands-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

// styles
import './m-banner.css'
import './d-banner.css'

gsap.registerPlugin(ScrollTrigger, ScrollToPlugin)

const Banner = () => {

	const Fx = (elem, delay = 0.5, yDuration = 1.5, opacityDuration = 3.5) => {
		const tl = gsap.timeline({
			delay,
			scrollTrigger: {
			trigger: elem,
			start: 'top center',
			end: 'bottom center'
			}
		})

		// Les deux tweens commencent à t=0 de la timeline
		tl.fromTo(elem, { y: -100 }, { y: 0, duration: yDuration, ease: 'power2.out' }, 0)
		.fromTo(elem, { opacity: 0 }, { opacity: 1, duration: opacityDuration, ease: 'none' }, 0)
	}

	const Fx2 = (elem, delay = 1.5, yDuration = 1.5, opacityDuration = 3.5) => {
		const tl = gsap.timeline({
			delay,
			scrollTrigger: {
			trigger: elem,
			start: 'top center',
			end: 'bottom center'
			}
		})

		// Les deux tweens commencent à t=0 de la timeline
		tl.fromTo(elem, { y: -100 }, { y: 0, duration: yDuration, ease: 'power2.out' }, 0)
		.fromTo(elem, { opacity: 0 }, { opacity: 1, duration: opacityDuration, ease: 'none' }, 0)
	}

	useEffect(() => {
		Fx('#block-1')
	}, [])

	useEffect(() => {
		Fx2('#block-2')
	}, [])

	const phoneNumber = '+33661673268'

	const [currentState, setCurrentState] = useState(0)

	useEffect(()=> {
		const timer = setTimeout(() => {
			if (currentState === 3) {
				setCurrentState(0)
			}
			else {
				setCurrentState(currentState +1)
			}
		}, 6000)
		return () => clearTimeout(timer)
	}, [currentState] )

	const slideArray = [
		{	
			'img': `${process.env.PUBLIC_URL}/assets/pictures/banner-1-mobile.webp`
		},
		{
			'img': `${process.env.PUBLIC_URL}/assets/pictures/banner-2-mobile.webp`
		},
		{
			'img': `${process.env.PUBLIC_URL}/assets/pictures/banner-3-mobile.webp`
		},
		{
			'img': `${process.env.PUBLIC_URL}/assets/pictures/banner-4-mobile.webp`
		}
	]

	const slideArray2 = [
		{	
			'img': `${process.env.PUBLIC_URL}/assets/pictures/banner-1-desktop.webp`
		},
		{
			'img': `${process.env.PUBLIC_URL}/assets/pictures/banner-2-desktop.webp`
		},
		{
			'img': `${process.env.PUBLIC_URL}/assets/pictures/banner-3-desktop.webp`
		},
		{
			'img': `${process.env.PUBLIC_URL}/assets/pictures/banner-4-desktop.webp`
		} 
	]

	return (
		<>	
			<section id='banner' className='banner'>
				<div className='banner-filtre'></div>
				<h1 id='block-1' className='banner__title'>
					<span className='banner__title__CARAVELLE'>CARAVELLE AUTO-&#201;COLE</span>
					<br/>
					<span className='banner__title__Vaulx'>Vaulx-en-Velin</span>
				</h1>
				<p id='block-2' className='banner__liberte'><i>‘‘ En route vers la liberté ... ’’</i></p>
				<a 
					href='https://www.safbuddy.com/Programmes'
					className='banner__programme' rel='noreferrer'
				>
					Programmes de formation <FontAwesomeIcon icon={faArrowUpRightFromSquare}/>
				</a>
				<div 	
					className='banner-icon banner__icons__whatsapp'
					onClick={() => window.location=`https://wa.me/${phoneNumber}`}
				>
					<FontAwesomeIcon 
						icon={(fab, faWhatsapp)} 
					/>
				</div>
				<picture>
					<source srcSet={`${process.env.PUBLIC_URL}/assets/brands/logo-ecq-label.webp`} type='image/webp' loading='lazy' fetchpriority='low' />
					<img 
						className='banner__logo-ecq-label banner__logo-permis'
						src={`${process.env.PUBLIC_URL}/assets/brands/logo-ecq-label.webp`}
						width='333' 
						height='333'  
						fetchpriority='low' 
						alt='logo-ecq-label'
						loading='lazy'
						decoding='async'
					/>
				</picture>
				<picture>
					<source srcSet={`${process.env.PUBLIC_URL}/assets/brands/logo-qualiopi.webp`} type='image/webp' loading='lazy' fetchpriority='low' />
					<img 
						className='banner__logo-qualiopi banner__logo-permis'
						src={`${process.env.PUBLIC_URL}/assets/brands/logo-qualiopi.webp`}
						width='634' 
						height='339'  
						fetchpriority='low' 
						alt='logo-qualiopi'
						loading='lazy'
						decoding='async'
					/>
				</picture>
				<div> 
					{slideArray.map((items, index) => (
						<div key={index}>
							<picture>
								<source srcSet={items.img} type='image/webp' fetchpriority='high' />
								<img 
									className={index === currentState ? 'banner__picture banner__picture--in' : 'banner__picture banner__picture--out'}
									src={items.img}
									width='720' 
									height='1342' 
									fetchpriority='high' 
									alt='slide'
									loading='lazy'
									decoding='async'
								/>
							</picture>
						</div>
					))}
				</div>

				<div> 
					{slideArray2.map((items, index) => (
						<div key={index}>
							<picture>
								<source srcSet={items.img} type='image/webp' fetchpriority='high' />
								<img 
									className={index === currentState ? 'banner__picture2 banner__picture--in' : 'banner__picture2 banner__picture--out'}
									src={items.img}
									width='1351' 
									height='1342'  
									fetchpriority='high' 
									alt='slide'
									loading='lazy'
									decoding='async'
								/>
							</picture>
						</div>
					))}
				</div>
			</section>
		</>
	)
}
 
export default Banner