import React from 'react'

// styles
import './m-background.css'
import './d-background.css'

const Background = () => {

	return (
		<div className='background'>
	
			<picture>
				<source srcSet={`${process.env.PUBLIC_URL}/assets/pictures/background-mobile.webp`} type='image/webp' loading='lazy' fetchpriority='low' />
				<img 
					className='background-mobile' 
					src={`${process.env.PUBLIC_URL}/assets/pictures/background-mobile.webp`} 
					width='720' 
					height='1822' 
					loading='lazy'  
					alt='keyboard'  
					fetchpriority='low'
					decoding='async'
				/>
			</picture>
			
			<picture>
				<source srcSet={`${process.env.PUBLIC_URL}/assets/pictures/background-desktop.webp`} type='image/webp' loading='lazy' fetchpriority='low' />
				<img 
					className='background-desktop' 
					src={`${process.env.PUBLIC_URL}/assets/pictures/background-desktop.webp`} 
					width='1351' 
					height='1342' 
					loading='lazy' 
					alt='keyboard'   
					fetchpriority='low'
					decoding='async'
				/>
			</picture>
		</div>
	)
}
 
export default Background