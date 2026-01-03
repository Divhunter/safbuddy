import React from 'react'
import { useEffect } from 'react'
import Banner from '../../public/components/Banner'
import { Helmet } from 'react-helmet-async' 

const Home = () => {

	useEffect(() => {
		document.documentElement.scrollTo({ top: 0, behavior: 'smooth' })
	}, [])

	return (
		<>
			<Helmet>
				<title>Caravelle Auto-École — Permis B & stages code à Vaulx-en-Velin</title>
				<meta 
					name='description'
					content='Caravelle Auto-École à Vaulx-en-Velin (32 Rue François Rabelais, 69120). Permis B, conduite accompagnée, conduite supervisée, stages code accéléré et préparation examen à Lyon Est. Téléphone : 04 78 80 85 56.' 
				/>
				<link rel='canonical' href='https://www.safbuddy.com' />
			</Helmet>
			<main>
				<Banner />
			</main>
		</>
	) 
}
 
export default Home