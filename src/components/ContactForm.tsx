'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'

type FormData = {
  name: string
  email: string
  subject: string
  message: string
}

export default function ContactForm() {
  const [formData, setFormData] = useState<FormData>({
    name: '',
    email: '',
    subject: '',
    message: ''
  })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle')

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)
    
    // Here you would typically send the form data to your backend
    // For now, we'll simulate a successful submission
    try {
      await new Promise(resolve => setTimeout(resolve, 1000))
      setSubmitStatus('success')
      setFormData({ name: '', email: '', subject: '', message: '' })
    } catch (error) {
      setSubmitStatus('error')
    } finally {
      setIsSubmitting(false)
    }
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setFormData(prev => ({ ...prev, [name]: value }))
  }

  const inputVariants = {
    focus: { scale: 0.98 }
  }

  return (
    <motion.div 
      className="grid grid-cols-1 md:grid-cols-2 gap-20"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <div>
        <h2 className="text-4xl font-bold mb-6">Get in Touch</h2>
        <p className="text-lg mb-8">
          I'm always interested in hearing about new projects and opportunities.
          Whether you have a question or just want to say hi, I'll try my best
          to get back to you!
        </p>
        <div className="space-y-4">
          <div className="flex items-center gap-4">
            <div className="w-10 h-10 rounded-full border border-black flex items-center justify-center">
              📍
            </div>
            <div>
              <h3 className="font-bold">Location</h3>
              <p>Prague, Czech Republic</p>
            </div>
          </div>
          <div className="flex items-center gap-4">
            <div className="w-10 h-10 rounded-full border border-black flex items-center justify-center">
              📧
            </div>
            <div>
              <h3 className="font-bold">Email</h3>
              <p>lucie.hegerova@example.com</p>
            </div>
          </div>
        </div>
      </div>

      <motion.form 
        onSubmit={handleSubmit}
        className="space-y-6"
      >
        <motion.div variants={inputVariants} whileFocus="focus">
          <label className="block text-sm font-medium mb-2" htmlFor="name">
            Name
          </label>
          <input
            type="text"
            id="name"
            name="name"
            value={formData.name}
            onChange={handleChange}
            required
            className="w-full px-4 py-3 rounded-xl border border-black/20 focus:border-black focus:outline-none transition-colors"
          />
        </motion.div>

        <motion.div variants={inputVariants} whileFocus="focus">
          <label className="block text-sm font-medium mb-2" htmlFor="email">
            Email
          </label>
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            required
            className="w-full px-4 py-3 rounded-xl border border-black/20 focus:border-black focus:outline-none transition-colors"
          />
        </motion.div>

        <motion.div variants={inputVariants} whileFocus="focus">
          <label className="block text-sm font-medium mb-2" htmlFor="subject">
            Subject
          </label>
          <input
            type="text"
            id="subject"
            name="subject"
            value={formData.subject}
            onChange={handleChange}
            required
            className="w-full px-4 py-3 rounded-xl border border-black/20 focus:border-black focus:outline-none transition-colors"
          />
        </motion.div>

        <motion.div variants={inputVariants} whileFocus="focus">
          <label className="block text-sm font-medium mb-2" htmlFor="message">
            Message
          </label>
          <textarea
            id="message"
            name="message"
            value={formData.message}
            onChange={handleChange}
            required
            rows={6}
            className="w-full px-4 py-3 rounded-xl border border-black/20 focus:border-black focus:outline-none transition-colors resize-none"
          />
        </motion.div>

        <motion.button
          type="submit"
          disabled={isSubmitting}
          className={`w-full py-4 rounded-full text-lg font-medium transition-all
            ${isSubmitting ? 'bg-black/50 text-white cursor-not-allowed' : 'bg-black text-white hover:bg-black/80'}`}
          whileHover={{ scale: 1.02 }}
          whileTap={{ scale: 0.98 }}
        >
          {isSubmitting ? 'Sending...' : 'Send Message'}
        </motion.button>

        {submitStatus === 'success' && (
          <motion.p 
            className="text-green-600 text-center mt-4"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
          >
            Message sent successfully!
          </motion.p>
        )}

        {submitStatus === 'error' && (
          <motion.p 
            className="text-red-600 text-center mt-4"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
          >
            There was an error sending your message. Please try again.
          </motion.p>
        )}
      </motion.form>
    </motion.div>
  )
} 