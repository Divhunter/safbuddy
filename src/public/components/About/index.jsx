import React from 'react'
import { useEffect } from 'react'
import pagesHeadersArray from '../../datas/pagesHeadersArray.json'
import PagesHeaders from '../../components/PagesHeaders'

const About = () => {
    
    const aboutHeader = pagesHeadersArray.find(el => el.title === '1')
    const aboutHeaderArray = []
    aboutHeaderArray.push(aboutHeader)

    useEffect(() => {
        document.documentElement.scrollTo({ top: 0, behavior: 'smooth' })
    }, [])

	return (
		<section id='about' className='about title-container-background'>
            {aboutHeaderArray.map((item, index) => (
                <PagesHeaders 
                    key={index}
                    titleCol1={item.titleCol1}
                    titleCol2={item.titleCol2}
                    subTitle1={item.subTitle1 && <p className='sub-title' id='sloganAbout'><i>‘‘ En route vers la liberté ... ’’</i></p>}
                    text1={<div id='textAbout1'>{item.text1}</div>}
                    br1={item.br1 && <><br/></>}
                    text2={<div id='textAbout2'>{item.text2}</div>}
                    br2={item.br2 && <><br/></>}
                    text3={<div id='textAbout3'>{item.text3}</div>}
                />
            ))}
		</section>
	)
}

export default About