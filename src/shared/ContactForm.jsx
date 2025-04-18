import React, { useRef } from 'react'
import { useForm } from 'react-hook-form'
import { yupResolver } from '@hookform/resolvers/yup'
import * as yup from 'yup'

// validation schema yup
const schema = yup.object().shape({
  name: yup.string().required('Name is required'),
  email: yup.string().email('Invalid email').required('Email is required'),
  message: yup.string(),
})

function ContactForm() {
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm({
    resolver: yupResolver(schema),
  })

  const onSubmit = (data) => {
    alert('Form submitted successfully!')
    reset()
  }

  const messageRef = useRef(null)

  const handleInput = () => {
    const el = messageRef.current
    if (el) {
      el.style.height = 'auto'
      el.style.height = `${el.scrollHeight}px`
    }
  }
  return (
    <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
      {/* Name */}
      <div>
        <input
          {...register('name')}
          placeholder="Name*"
          className="form-input"
          data-error={!!errors.name}
        />
        {errors.name && (
          <p className="text-red-800 text-sm mt-1">{errors.name.message}</p>
        )}
      </div>

      {/* Email */}
      <div>
        <input
          {...register('email')}
          placeholder="Email*"
          className="form-input"
          data-error={!!errors.email}
        />
        {errors.email && (
          <p className="text-red-800 text-sm mt-1">{errors.email.message}</p>
        )}
      </div>

      {/* Message */}
      <div>
        <textarea
          ref={messageRef}
          {...register('message')}
          onInput={handleInput}
          placeholder="Message:

Hello! I am interested in your product. Please call me, I need to clarify some details.
Thank you!"
          className="form-input resize-none overflow-hidden min-h-[8rem] leading-relaxed"
          data-error={!!errors.message}
        />
      </div>

      <button type="submit" className="btn-primary h-12">
        Send
      </button>
    </form>
  )
}

export default ContactForm
