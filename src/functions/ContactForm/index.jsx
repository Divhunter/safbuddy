import React, { useRef, useState } from 'react'
import emailjs from '@emailjs/browser'

/* ⚙️ Config (remplace par .env en prod) */
const SERVICE_ID = process.env.REACT_APP_EMAILJS_SERVICE_ID || 'service_cwc7qug'
const TEMPLATE_ID = process.env.REACT_APP_EMAILJS_TEMPLATE_ID || 'template_s0hd1p6'
const PUBLIC_KEY  = process.env.REACT_APP_EMAILJS_PUBLIC_KEY  || 'aZO_Qh2q_kOgKxfY'

/* ✅ Regex demandées */
const NAME_RE  = /^[a-zA-ZÀÁÂÆÇÈÉÊËÌÍÎÏÑÒÓÔÕÖÙÚÛÜÝàáâæçèéêëìíîïñòóôõöùúûüý -]+$/
const EMAIL_RE = /^\w+([.\-_]?\w+)*@\w+([.\-_]?\w+)*(\.\w{2,3})+$/
const TEXT_RE  = /^[a-zA-Zéèêîçàôïùû0-9]+(?:['\s\-?,:!%"@;’=°_()&$€.a-zA-Zéèêîçàôïûù0-9]+)*$/
const PHONE_RE = /^[\d\s]+$/
 // chiffres uniquement (champ optionnel)

/* Messages d'erreur */
const MSGS = {
  required: 
  'Ce champ est requis.',
  name: 'Le champs ne correspond pas au format attendu.',
  email: 'L\'adresse électronique n\'est pas valides.',
  text: 'Certains caractères ne sont pas valides.',
  phone: 'Le champs ne correspond pas au format attendu.',
}

export default function ContactForm() {
  const formRef = useRef(null)
  const [status, setStatus] = useState({ loading: false, ok: null, msg: '' })
  const [errors, setErrors] = useState({ name: '', email: '', subject: '', message: '', phone: '' })

  const setFieldError = (field, msg) =>
    setErrors((e) => ({ ...e, [field]: msg || '' }))

  const validateField = (name, value) => {
    const v = value.trim()
    if (!v && ['from_name', 'reply_to', 'subject', 'message'].includes(name)) return MSGS.required

    switch (name) {
      case 'from_name':
        return v && !NAME_RE.test(v) ? MSGS.name : ''
      case 'reply_to':
        return v && !EMAIL_RE.test(v) ? MSGS.email : ''
      case 'subject':
        return v && !TEXT_RE.test(v) ? MSGS.text : ''
      case 'message':
        return v && !TEXT_RE.test(v) ? MSGS.text : ''
      case 'phone':
        return v && !PHONE_RE.test(v) ? MSGS.phone : ''
      default:
        return ''
    }
  }

  // ✅ Valide au BLUR uniquement (perte de focus)
  const handleBlur = (e) => {
    const { name, value } = e.target
    const msg = validateField(name, value)
    if (name === 'from_name') setFieldError('name', msg)
    if (name === 'reply_to') setFieldError('email', msg)
    if (name === 'subject') setFieldError('subject', msg)
    if (name === 'message') setFieldError('message', msg)
    if (name === 'phone') setFieldError('phone', msg)
  }

  // Efface l'erreur dès que l'utilisateur retape (optionnel)
  const handleInput = (e) => {
    const { name } = e.target
    if (name === 'from_name') setFieldError('name', '')
    if (name === 'reply_to') setFieldError('email', '')
    if (name === 'subject') setFieldError('subject', '')
    if (name === 'message') setFieldError('message', '')
    if (name === 'phone') setFieldError('phone', '')
  }

  // Validation globale au submit (empêche l'envoi si une erreur)
  const validateAll = (form) => {
    const values = {
      from_name: form.from_name.value,
      reply_to: form.reply_to.value,
      subject: form.subject.value,
      message: form.message.value,
      phone: form.phone?.value || '',
    }
    const nextErrors = {
      name: validateField('from_name', values.from_name),
      email: validateField('reply_to', values.reply_to),
      subject: validateField('subject', values.subject),
      message: validateField('message', values.message),
      phone: validateField('phone', values.phone),
    }
    setErrors(nextErrors)

    // focus sur le 1er champ en erreur
    const firstErrorKey =
      Object.entries(nextErrors).find(([, msg]) => msg)?.[0] || null
    if (firstErrorKey) {
      const map = { name: 'from_name', email: 'reply_to', subject: 'subject', message: 'message', phone: 'phone' }
      form[map[firstErrorKey]]?.focus()
      return false
    }
    // normalise (trim)
    form.from_name.value = values.from_name.trim()
    form.reply_to.value = values.reply_to.trim()
    form.subject.value = values.subject.trim()
    form.message.value = values.message.trim()
    if (form.phone) form.phone.value = values.phone.trim()

    return true
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    const form = formRef.current
    if (!form) return

    // Honeypot
    if (form.website && form.website.value) return

    // Vars EmailJS ok ?
    if ([SERVICE_ID, TEMPLATE_ID, PUBLIC_KEY].some((v) => !v)) {
      setStatus({ loading: false, ok: false, msg: 'Config EmailJS manquante : SERVICE_ID / TEMPLATE_ID / PUBLIC_KEY.' })
      return
    }

    // ✅ Validation finale (regex) AVANT envoi
    if (!validateAll(form)) return

    setStatus({ loading: true, ok: null, msg: '' })
    try {
      await emailjs.sendForm(SERVICE_ID, TEMPLATE_ID, form, { publicKey: PUBLIC_KEY })
      setStatus({ loading: false, ok: true, msg: 'Message envoyé ✅' })
      form.reset()
      setErrors({ name: '', email: '', subject: '', message: '', phone: '' })
    } catch (err) {
      console.error('EmailJS error:', err)
      setStatus({ loading: false, ok: false, msg: `Oups, l’envoi a échoué. ${err?.text || err?.message || ''}` })
    }
  }

  return (
    <form ref={formRef} onSubmit={handleSubmit} className='contactForm' noValidate>
      {/* Honeypot (doit rester vide) */}
      <input type='text' name='website' style={{ display: 'none' }} aria-hidden='true' />

      {/* Si ton template attend {{to_email}}, décommente : */}
      {/* <input type='hidden' name='to_email' value='contact@tondomaine.fr' /> */}

      <div>
        <label htmlFor='from_name'>Nom*</label>
        <input
          id='from_name'
          name='from_name'
          placeholder='Nom/Prénom*'
          required
          autoComplete='name'
          onBlur={handleBlur}
          onInput={handleInput}
          aria-invalid={!!errors.name}
          aria-describedby={errors.name ? 'err-name' : undefined}
        />
        {errors.name && <small id='err-name' style={{ color: 'crimson' }}>{errors.name}</small>}
      </div>

      <div>
        <label htmlFor='reply_to'>Email*</label>
        <input
          id='reply_to'
          type='email *'
          name='reply_to'
          placeholder='Email*'
          required
          autoComplete='email'
          onBlur={handleBlur}
          onInput={handleInput}
          aria-invalid={!!errors.email}
          aria-describedby={errors.email ? 'err-email' : undefined}
        />
        {errors.email && <small id='err-email' style={{ color: 'crimson' }}>{errors.email}</small>}
      </div>

      <div>
        <label htmlFor='phone'>N° de téléphone</label>
        <input
          id='phone'
          name='phone'
          placeholder='N° de téléphone'
          inputMode='tel'
          autoComplete='tel'
          onBlur={handleBlur}
          onInput={handleInput}
          aria-invalid={!!errors.phone}
          aria-describedby={errors.phone ? 'err-phone' : undefined}
        />
        {errors.phone && <small id='err-phone' style={{ color: 'crimson' }}>{errors.phone}</small>}
      </div>

      <div>
        <label htmlFor='subject'>Sujet*</label>
        <input
          id='subject'
          name='subject'
          placeholder='Sujet de votre message*'
          required
          onBlur={handleBlur}
          onInput={handleInput}
          aria-invalid={!!errors.subject}
          aria-describedby={errors.subject ? 'err-subject' : undefined}
        />
        {errors.subject && <small id='err-subject' style={{ color: 'crimson' }}>{errors.subject}</small>}
      </div>

      <div>
        <label htmlFor='message'>Message*</label>
        <textarea
          id='message'
          name='message'
          rows={5}
          placeholder='Votre message...*'
          required
          onBlur={handleBlur}
          onInput={handleInput}
          aria-invalid={!!errors.message}
          aria-describedby={errors.message ? 'err-message' : undefined}
        />
        {errors.message && <small id='err-message' style={{ color: 'crimson' }}>{errors.message}</small>}
      </div>

      <button
        className='docs__container__item'
        type='submit'
        disabled={status.loading}
        aria-busy={status.loading}
      >
        {status.loading ? 'Envoi...' : 'Envoyer'}
      </button>

      {status.msg && (
        <p aria-live='polite' style={{ marginTop: '.75rem', color: status.ok ? 'green' : 'crimson' }}>
          {status.msg}
        </p>
      )}
    </form>
  )
}