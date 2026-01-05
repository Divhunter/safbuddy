import React from 'react'
import { useLayoutEffect, useRef } from 'react'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { ScrollToPlugin } from 'gsap/ScrollToPlugin'
import { HelmetProvider } from 'react-helmet-async'
import { Routes, Route } from 'react-router-dom'
//import Background from './public/components/Background'
//import Header from './public/components/Header'
import Home from './pages/Home'
//import About from './public/components/About'
//import UnEuroEtCPF from './public/components/UnEuroEtCPF'
//import Contact from './public/components/Contact'
//import Docs from './pages/Docs'
//import Programmes from './pages/Programmes'
//import PermisB from './pages/PermisB'
//import PermisBEA from './pages/PermisBEA'
//import CACCetS from './pages/CACCetS'
//import PasserelleBABM from './pages/PasserelleBABM'
//import PostPermis from './pages/PostPermis'
//import Code from './pages/Code'
//import Footer from './public/components/Footer'
//import CGU from './public/components/CGU'
//import Error from './_utils/Error' 
//import ScrollToTop from './functions/ScrollToTop' 

import './styles/m-app.css' 
import './styles/t-d-app.css'

gsap.registerPlugin(ScrollTrigger, ScrollToPlugin)

const App = () => {
  const scope = useRef(null)

  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      const targets = [
        '#textAbout1',
        '#textAbout2',
        '#textAbout3',
        '#paragraphUnEuro',
        '#buttonUnEuro',
        '#paragraphCPF',
        '#buttonCPF',
        '#horaires',
        '#adresse',
        '#local',
        '#formulaire'
      ]

      // 1) État initial (invisible et décalé en haut)
      gsap.set(targets, { autoAlpha: 0, y: -200 })

      // 2) Anim aller/retour par cible
      targets.forEach((sel) => {
        gsap.to(sel, {
          autoAlpha: 1,
          y: 0,
          duration: 1.6,
          ease: 'power2.out',
          scrollTrigger: {
            trigger: sel,
            start: 'top 90%',
            end: 'bottom 0%',
            toggleActions: 'play reverse play reverse',
            onLeaveBack: () => gsap.set(sel, { autoAlpha: 0, y: -100 }),
            // markers: true,
          },
        })
      })

      // Si images/async : recalcul des positions
      ScrollTrigger.refresh()
    }, scope)

    return () => ctx.revert()
  }, [])

  return (
    <div ref={scope}>
      <HelmetProvider>
        {/*<Header/>*/}
        <Routes future={{ v7_relativeSplatPath: true }}>
          <Route exact path='/*' element={<Home />} />
          {/*<Route path='/Docs/*' element={<Docs />} />
          <Route path='/Programmes/*' element={<Programmes />} />
          <Route path='/PermisB/*' element={<PermisB />} />
          <Route path='/PermisBEA/*' element={<PermisBEA />} />
          <Route path='/CACCetS/*' element={<CACCetS />} />
          <Route path='/PasserelleBABM/*' element={<PasserelleBABM />} />
          <Route path='/PostPermis/*' element={<PostPermis />} />
          <Route path='/Code/*' element={<Code />} />
          <Route path='/CGU/*' element={<CGU />} />
          <Route path='/*' element={<Error />} />*/}
        </Routes>
        {/*<About/>
        <UnEuroEtCPF/>
        <Contact/>
        <Footer />
        <Background/>*/}
      </HelmetProvider>
      {/*<ScrollToTop />*/}
    </div>
  )
}

export default App