import {fab, faFacebook, faLinkedin, faInstagram, faTiktok } from '@fortawesome/free-brands-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

// styles
import './m-footer.css'
import './d-footer.css'

const Footer = () => {
  return (
    <section id='footer' className='footer'>
      <h1>Suivez-nous</h1>
      <div className='footer__link'>
        <a href='https://www.facebook.com/profile.php?id=61581054267106' aria-label="Nous suivre sur Facebook" rel='noopener noreferrer' target='_blank'>
          <FontAwesomeIcon className='footer__link__icon icon-fb' icon={(fab, faFacebook)} />
        </a>
        <a href='https://www.tiktok.com/@autocaravellevaulx69120?_t=ZN8zll6F1o61W&_r=1' aria-label="Nous suivre sur Tiktok" rel='noopener noreferrer' target='_blank'>
          <FontAwesomeIcon className='footer__link__icon icon-tw' icon={(fab, faTiktok)} />
        </a>
        <a href='https://www.linkedin.com/in/auto-ecole-caravelle-vaulx-en-velin-6090b4385' aria-label="Nous suivre sur Linkedin" rel='noopener noreferrer' target='_blank'>
          <FontAwesomeIcon className='footer__link__icon icon-lk' icon={(fab, faLinkedin)} />
        </a>
        <a href='https://www.instagram.com/autoecolecaravelle69120?utm_source=qr&igsh=eHdmNWI5azNp-Z21y' aria-label="Nous suivre sur Instagram" rel='noopener noreferrer' target='_blank'>
          <FontAwesomeIcon className='footer__link__icon icon-gh' icon={(fab, faInstagram)} />
        </a>
      </div>
      <a href='https://www.safbuddy.com/Home' aria-label="Retour à la page d'accueil">
        <picture>
          <source srcSet={`${process.env.PUBLIC_URL}/assets/brands/logo-caravelle.webp`} type='image/webp' fetchpriority='high' />
          <img 
            className='footer__logo-caravelle' 
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
      <p className='footer__logo-info paragraph'>
        CARAVELLE AUTO-&#201;COLE
        <br/>
        Agrément : École de conduire : E2506900080
        <br/>
        Numéro déclaration d’activité : 84692489069
        <br/>
        32 Rue François Rabelais 69120 Vaulx-En-Velin
        <br/>
        Tél : 04 78 80 85 56
        <br/>
        Mobile : 06 61 67 32 68
        <br/>
        https://www.safbuddy.com/
        <br/>
        SIRET 93976914700017 / APE 8553Z
        <br/>
        <a 
          href='mailto:aecaravelle.vaulx@gmail.com'
          className='mail-link link'
        >
            aecaravelle.vaulx@gmail.com
        </a>
        <br/>
      </p><div className='footer__partenaires'>
        <picture>
          <source srcSet={`${process.env.PUBLIC_URL}/assets/brands/logo-ecq-label.webp`} type='image/webp' fetchpriority='low' />
          <img 
            className='footer__partenaires__logo' 
            src={`${process.env.PUBLIC_URL}/assets/brands/logo-ecq-label.webp`} 
            width='333' 
            height='333'
            loading='lazy' 
            fetchpriority='low' 
            alt='logo-ecq-label' 
            decoding='async'
          />
        </picture>
        <picture>
          <source srcSet={`${process.env.PUBLIC_URL}/assets/brands/logo-qualiopi.webp`} type='image/webp' fetchpriority='low' />
          <img 
            className='footer__partenaires__logo' 
            src={`${process.env.PUBLIC_URL}/assets/brands/logo-qualiopi.webp`} 
            width='634' 
            height='339'
            loading='lazy' 
            fetchpriority='low' 
            alt='logo-qualiopi' 
            decoding='async'
          />
        </picture>
        <picture>
          <source srcSet={`${process.env.PUBLIC_URL}/assets/brands/logo-france-travail.webp`} type='image/webp' fetchpriority='low' />
          <img 
            className='footer__partenaires__logo' 
            src={`${process.env.PUBLIC_URL}/assets/brands/logo-france-travail.webp`} 
            width='1280' 
            height='720'
            loading='lazy' 
            fetchpriority='low' 
            alt='logo-france-travail' 
            decoding='async'
          />
        </picture>
        <picture>
          <source srcSet={`${process.env.PUBLIC_URL}/assets/brands/logo-cpf.webp`} type='image/webp' fetchpriority='low' />
          <img 
            className='footer__partenaires__logo' 
            src={`${process.env.PUBLIC_URL}/assets/brands/logo-cpf.webp`} 
            width='225' 
            height='225'
            loading='lazy' 
            fetchpriority='low' 
            alt='logo-caravelle' 
            decoding='async'
          />
        </picture>
        <picture>
          <source srcSet={`${process.env.PUBLIC_URL}/assets/brands/logo-pass-region.webp`} type='image/webp' fetchpriority='low' />
          <img 
            className='footer__partenaires__logo' 
            src={`${process.env.PUBLIC_URL}/assets/brands/logo-pass-region.webp`} 
            width='981' 
            height='1024'
            loading='lazy' 
            fetchpriority='low' 
            alt='logo-pass-region' 
            decoding='async'
          />
        </picture>
        <picture>
          <source srcSet={`${process.env.PUBLIC_URL}/assets/brands/logo-permis-1-euro-jour.webp`} type='image/webp' fetchpriority='low' />
          <img 
            className='footer__partenaires__logo' 
            src={`${process.env.PUBLIC_URL}/assets/brands/logo-permis-1-euro-jour.webp`} 
            width='981' 
            height='1024'
            loading='lazy' 
            fetchpriority='low' 
            alt='logo-permis-1-euro-jour' 
            decoding='async'
          />
        </picture>
        <picture>
          <source srcSet={`${process.env.PUBLIC_URL}/assets/brands/logo-conduite-accompagnee.webp`} type='image/webp' fetchpriority='low' />
          <img 
            className='footer__partenaires__logo' 
            src={`${process.env.PUBLIC_URL}/assets/brands/logo-conduite-accompagnee.webp`} 
            width='1769' 
            height='1768'
            loading='lazy' 
            fetchpriority='low' 
            alt='logo-conduite-accompagnee' 
            decoding='async'
          />
        </picture>
      </div>
      <div className='footer__copyright'>
          <p>
              © CARAVELLE AUTO-&#201;COLE - Tous droits réservés - <a id="link1" className='footer__copyright__link link' href='https://www.safbuddy.com/CGU' aria-label="En savoir plus sur nos cgu" rel='noopener'>Mentions légales</a> - 2025 - conception web <a id="link2" className='footer__copyright__link link' href='https://www.vowd.fr/' aria-label="En savoir plus sur le concepteur du site" rel='noopener noreferrer' target='_blank'>vowd.fr</a>
          </p>
      </div>	
    </section>
  )
}

export default Footer