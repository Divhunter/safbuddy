import React from 'react'
import { useEffect } from 'react'
//import Banner from '../../public/components/Banner'
import Safinwork from '../../public/components/Safinwork'
import { Helmet } from 'react-helmet-async' 

const Home = () => {

	useEffect(() => {
		document.documentElement.scrollTo({ top: 0, behavior: 'smooth' })
	}, [])

	return (
		<>
			<Helmet>
				<title>safbuddy</title>
				<meta 
					name='description'
					content='safbuddy' 
				/>
				<link rel='canonical' href='https://www.safbuddy.com' />
			</Helmet>
			<main>
				{/*<Banner />*/}
				<Safinwork />
			</main>
		</>
	) 
}
 
export default Home