'use client'

import { useState } from 'react'
import { useForm } from 'react-hook-form'
import { motion } from 'framer-motion'

type FormValues = {
  nombre: string
  email: string
  empresa: string
  telefono: string
  reto: string
  descripcion?: string
  rgpd: boolean
}

type SubmitState = 'idle' | 'loading' | 'success' | 'error'

export default function ContactForm() {
  const [submitState, setSubmitState] = useState<SubmitState>('idle')
  const [errorMsg, setErrorMsg] = useState('')

  const {
    register,
    handleSubmit,
    reset,
    watch,
    formState: { errors },
  } = useForm<FormValues>()

  const rgpdChecked = watch('rgpd')

  const onSubmit = async (data: FormValues) => {
    setSubmitState('loading')
    setErrorMsg('')

    try {
      const res = await fetch('/api/subscribe', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(data),
      })

      if (!res.ok) {
        const body = await res.json().catch(() => ({}))
        throw new Error(body.message ?? 'Error al enviar el formulario')
      }

      setSubmitState('success')
      reset()
    } catch (err: unknown) {
      setSubmitState('error')
      setErrorMsg(err instanceof Error ? err.message : 'Ha ocurrido un error inesperado.')
    }
  }

  return (
    <section
      id="contacto"
      aria-labelledby="contact-heading"
      className="py-20 sm:py-28 bg-[#12121A]"
    >
      <div className="max-w-2xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="p-8 sm:p-10 rounded-[12px] bg-[#0A0A0F] border border-white/[0.08]"
        >
          <div className="text-center mb-8">
            <h2
              id="contact-heading"
              className="text-2xl sm:text-3xl font-semibold text-white mb-3 tracking-tight"
            >
              Descubre qué puedes automatizar en tu negocio
            </h2>
            <p className="text-white/50 text-sm sm:text-base">
              Solicita tu diagnóstico gratuito — te respondemos en menos de 24 horas.
            </p>
          </div>

          {submitState === 'success' ? (
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              className="text-center py-10"
              role="alert"
              aria-live="polite"
            >
              <div className="w-14 h-14 rounded-full bg-[#7B5CF0]/15 text-[#7B5CF0] flex items-center justify-center mx-auto mb-4">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="w-7 h-7" aria-hidden="true">
                  <path strokeLinecap="round" strokeLinejoin="round" d="m4.5 12.75 6 6 9-13.5" />
                </svg>
              </div>
              <h3 className="text-lg font-medium text-white mb-2">¡Solicitud recibida!</h3>
              <p className="text-white/50 text-sm">
                Nos pondremos en contacto contigo en menos de 24 horas. Revisa tu bandeja de entrada.
              </p>
              <button
                onClick={() => setSubmitState('idle')}
                className="mt-6 text-sm text-[#7B5CF0] hover:text-[#6A4DE0] transition-colors"
              >
                Enviar otra solicitud
              </button>
            </motion.div>
          ) : (
            <form
              onSubmit={handleSubmit(onSubmit)}
              noValidate
              aria-label="Formulario de diagnóstico gratuito"
            >
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-4">
                {/* Nombre */}
                <div>
                  <label htmlFor="nombre" className="block text-sm text-white/70 mb-1.5">
                    Nombre <span className="text-[#7B5CF0]" aria-hidden="true">*</span>
                  </label>
                  <input
                    id="nombre"
                    type="text"
                    autoComplete="given-name"
                    aria-required="true"
                    aria-invalid={!!errors.nombre}
                    aria-describedby={errors.nombre ? 'nombre-error' : undefined}
                    placeholder="Tu nombre"
                    className={`w-full px-3.5 py-2.5 rounded-[8px] bg-[#12121A] border text-white text-sm placeholder:text-white/25 focus:outline-none focus:ring-1 focus:ring-[#7B5CF0] transition-colors ${
                      errors.nombre ? 'border-red-500/60' : 'border-white/[0.08] focus:border-[#7B5CF0]/50'
                    }`}
                    {...register('nombre', { required: 'El nombre es obligatorio', maxLength: { value: 100, message: 'El nombre no puede superar 100 caracteres' } })}
                  />
                  {errors.nombre && (
                    <p id="nombre-error" role="alert" className="mt-1 text-xs text-red-400">
                      {errors.nombre.message}
                    </p>
                  )}
                </div>

                {/* Email */}
                <div>
                  <label htmlFor="email" className="block text-sm text-white/70 mb-1.5">
                    Email <span className="text-[#7B5CF0]" aria-hidden="true">*</span>
                  </label>
                  <input
                    id="email"
                    type="email"
                    autoComplete="email"
                    aria-required="true"
                    aria-invalid={!!errors.email}
                    aria-describedby={errors.email ? 'email-error' : undefined}
                    placeholder="tu@empresa.com"
                    className={`w-full px-3.5 py-2.5 rounded-[8px] bg-[#12121A] border text-white text-sm placeholder:text-white/25 focus:outline-none focus:ring-1 focus:ring-[#7B5CF0] transition-colors ${
                      errors.email ? 'border-red-500/60' : 'border-white/[0.08] focus:border-[#7B5CF0]/50'
                    }`}
                    {...register('email', {
                      required: 'El email es obligatorio',
                      pattern: {
                        value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                        message: 'Introduce un email válido',
                      },
                    })}
                  />
                  {errors.email && (
                    <p id="email-error" role="alert" className="mt-1 text-xs text-red-400">
                      {errors.email.message}
                    </p>
                  )}
                </div>
              </div>

              {/* Empresa + Teléfono */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-4">
                <div>
                  <label htmlFor="empresa" className="block text-sm text-white/70 mb-1.5">
                    Nombre de la empresa <span className="text-[#7B5CF0]" aria-hidden="true">*</span>
                  </label>
                  <input
                    id="empresa"
                    type="text"
                    autoComplete="organization"
                    aria-required="true"
                    aria-invalid={!!errors.empresa}
                    aria-describedby={errors.empresa ? 'empresa-error' : undefined}
                    placeholder="Nombre de tu empresa o negocio"
                    className={`w-full px-3.5 py-2.5 rounded-[8px] bg-[#12121A] border text-white text-sm placeholder:text-white/25 focus:outline-none focus:ring-1 focus:ring-[#7B5CF0] transition-colors ${
                      errors.empresa ? 'border-red-500/60' : 'border-white/[0.08] focus:border-[#7B5CF0]/50'
                    }`}
                    {...register('empresa', { required: 'El nombre de la empresa es obligatorio', maxLength: { value: 200, message: 'El nombre de empresa no puede superar 200 caracteres' } })}
                  />
                  {errors.empresa && (
                    <p id="empresa-error" role="alert" className="mt-1 text-xs text-red-400">
                      {errors.empresa.message}
                    </p>
                  )}
                </div>

                {/* Teléfono */}
                <div>
                  <label htmlFor="telefono" className="block text-sm text-white/70 mb-1.5">
                    Teléfono <span className="text-[#7B5CF0]" aria-hidden="true">*</span>
                  </label>
                  <input
                    id="telefono"
                    type="tel"
                    autoComplete="tel"
                    aria-required="true"
                    aria-invalid={!!errors.telefono}
                    aria-describedby={errors.telefono ? 'telefono-error' : undefined}
                    placeholder="+34 600 000 000"
                    className={`w-full px-3.5 py-2.5 rounded-[8px] bg-[#12121A] border text-white text-sm placeholder:text-white/25 focus:outline-none focus:ring-1 focus:ring-[#7B5CF0] transition-colors ${
                      errors.telefono ? 'border-red-500/60' : 'border-white/[0.08] focus:border-[#7B5CF0]/50'
                    }`}
                    {...register('telefono', {
                      required: 'El teléfono es obligatorio',
                      pattern: {
                        value: /^[+]?[\d\s\-().]{7,20}$/,
                        message: 'Introduce un teléfono válido',
                      },
                    })}
                  />
                  {errors.telefono && (
                    <p id="telefono-error" role="alert" className="mt-1 text-xs text-red-400">
                      {errors.telefono.message}
                    </p>
                  )}
                </div>
              </div>

              {/* Reto */}
              <div className="mb-4">
                <label htmlFor="reto" className="block text-sm text-white/70 mb-1.5">
                  ¿Cuál es tu mayor reto ahora mismo? <span className="text-[#7B5CF0]" aria-hidden="true">*</span>
                </label>
                <select
                  id="reto"
                  aria-required="true"
                  aria-invalid={!!errors.reto}
                  aria-describedby={errors.reto ? 'reto-error' : undefined}
                  className={`w-full px-3.5 py-2.5 rounded-[8px] bg-[#12121A] border text-white text-sm focus:outline-none focus:ring-1 focus:ring-[#7B5CF0] transition-colors appearance-none cursor-pointer ${
                    errors.reto ? 'border-red-500/60' : 'border-white/[0.08] focus:border-[#7B5CF0]/50'
                  }`}
                  style={{ backgroundImage: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='12' height='8' viewBox='0 0 12 8'%3E%3Cpath d='M1 1l5 5 5-5' stroke='rgba(255,255,255,0.4)' stroke-width='1.5' fill='none' stroke-linecap='round' stroke-linejoin='round'/%3E%3C/svg%3E")`, backgroundRepeat: 'no-repeat', backgroundPosition: 'right 14px center' }}
                  {...register('reto', { required: 'Selecciona una opción' })}
                >
                  <option value="" className="bg-[#12121A]">Selecciona una opción...</option>
                  <option value="falta-de-tiempo" className="bg-[#12121A]">Falta de tiempo</option>
                  <option value="atencion-al-cliente" className="bg-[#12121A]">Atención al cliente</option>
                  <option value="procesos-manuales" className="bg-[#12121A]">Procesos manuales</option>
                  <option value="quiero-escalar" className="bg-[#12121A]">Quiero escalar mi negocio</option>
                </select>
                {errors.reto && (
                  <p id="reto-error" role="alert" className="mt-1 text-xs text-red-400">
                    {errors.reto.message}
                  </p>
                )}
              </div>

              {/* Descripción del proyecto */}
              <div className="mb-4">
                <label htmlFor="descripcion" className="block text-sm text-white/70 mb-1.5">
                  Descripción del proyecto{' '}
                  <span className="text-white/30 font-normal">(opcional)</span>
                </label>
                <textarea
                  id="descripcion"
                  rows={3}
                  placeholder="Cuéntanos brevemente en qué consiste tu proyecto o qué proceso quieres automatizar..."
                  className="w-full px-3.5 py-2.5 rounded-[8px] bg-[#12121A] border border-white/[0.08] text-white text-sm placeholder:text-white/25 focus:outline-none focus:ring-1 focus:ring-[#7B5CF0] focus:border-[#7B5CF0]/50 transition-colors resize-none"
                  aria-invalid={!!errors.descripcion}
                  aria-describedby={errors.descripcion ? 'descripcion-error' : undefined}
                  {...register('descripcion', { maxLength: { value: 1000, message: 'La descripción no puede superar 1000 caracteres' } })}
                />
                {errors.descripcion && (
                  <p id="descripcion-error" role="alert" className="mt-1 text-xs text-red-400">
                    {errors.descripcion.message}
                  </p>
                )}
              </div>

              {/* RGPD */}
              <div className="mb-6">
                <label className="flex items-start gap-3 cursor-pointer group">
                  <div className="relative mt-0.5 flex-shrink-0">
                    <input
                      type="checkbox"
                      aria-required="true"
                      aria-invalid={!!errors.rgpd}
                      aria-describedby={errors.rgpd ? 'rgpd-error' : undefined}
                      className="sr-only"
                      {...register('rgpd', { required: 'Debes aceptar la política de privacidad' })}
                      id="rgpd"
                    />
                    <div
                      className={`w-4 h-4 rounded border flex items-center justify-center transition-colors ${
                        errors.rgpd
                          ? 'border-red-500/60'
                          : rgpdChecked
                          ? 'border-[#7B5CF0] bg-[#7B5CF0]'
                          : 'border-white/20 group-hover:border-[#7B5CF0]/60'
                      }`}
                    >
                      {rgpdChecked && (
                        <svg viewBox="0 0 12 10" fill="none" className="w-2.5 h-2.5" aria-hidden="true">
                          <path d="M1 5l3 3 7-7" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                        </svg>
                      )}
                    </div>
                  </div>
                  <span className="text-xs text-white/50 leading-relaxed">
                    Acepto la{' '}
                    <a href="/politica-de-privacidad" className="text-[#7B5CF0] hover:underline" target="_blank" rel="noopener noreferrer">
                      política de privacidad
                    </a>{' '}
                    y el tratamiento de mis datos para recibir información sobre los servicios de Klieto.
                  </span>
                </label>
                {errors.rgpd && (
                  <p id="rgpd-error" role="alert" className="mt-1 text-xs text-red-400 pl-7">
                    {errors.rgpd.message}
                  </p>
                )}
              </div>

              {/* Error message */}
              {submitState === 'error' && (
                <div
                  role="alert"
                  aria-live="assertive"
                  className="mb-4 px-4 py-3 rounded-[8px] bg-red-500/10 border border-red-500/20 text-red-400 text-sm"
                >
                  {errorMsg || 'Ha ocurrido un error. Por favor, inténtalo de nuevo.'}
                </div>
              )}

              {/* Submit */}
              <button
                type="submit"
                disabled={submitState === 'loading'}
                className="w-full py-3 px-6 text-sm font-medium text-white bg-[#7B5CF0] hover:bg-[#6A4DE0] disabled:opacity-60 disabled:cursor-not-allowed rounded-[8px] transition-colors duration-200 flex items-center justify-center gap-2"
                aria-label="Enviar solicitud de diagnóstico gratuito"
              >
                {submitState === 'loading' ? (
                  <>
                    <svg className="animate-spin w-4 h-4" viewBox="0 0 24 24" fill="none" aria-hidden="true">
                      <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
                      <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 0 1 8-8V0C5.373 0 0 5.373 0 12h4z" />
                    </svg>
                    Enviando...
                  </>
                ) : (
                  'Solicitar diagnóstico gratuito'
                )}
              </button>
            </form>
          )}
        </motion.div>
      </div>
    </section>
  )
}
