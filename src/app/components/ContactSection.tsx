import React from 'react'

const ContactSection = () => (
  <section id="contact" className="py-20 bg-blue-50 text-primary flex flex-col items-center">
    <h2 className="text-4xl font-bold mb-4">Contact Us</h2>
    <p className="mb-2">MG Marg, Gangtok, Sikkim</p>
    <p className="mb-6">Phone: +91 98765 43210</p>
    <form className="bg-white rounded-xl shadow-lg p-6 flex flex-col gap-4 w-full max-w-md">
      <input type="text" placeholder="Your Name" className="border border-blue-200 rounded px-4 py-2" />
      <input type="email" placeholder="Your Email" className="border border-blue-200 rounded px-4 py-2" />
      <textarea placeholder="Your Message" className="border border-blue-200 rounded px-4 py-2" rows={4} />
      <button type="submit" className="bg-primary text-white rounded px-4 py-2 font-semibold hover:bg-primary-dark transition-colors">Send Message</button>
    </form>
  </section>
)

export default ContactSection 