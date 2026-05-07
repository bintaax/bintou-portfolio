import React, { useState } from "react"

export default function Contact() {
  const [status, setStatus] = useState({ type: null, message: "" })
  const [loading, setLoading] = useState(false)

  const handleSubmit = async (e) => {
    e.preventDefault()
    setLoading(true)
    setStatus({ type: null, message: "" })

    const formData = new FormData(e.target)

    try {
      const response = await fetch("https://formspree.io/f/mjknljrg", {
        method: "POST",
        headers: { "Accept": "application/json" },
        body: formData,
      })

      if (response.ok) {
        setStatus({ type: "success", message: "Demande transmise avec succès. Je vous réponds sous peu. ✨" })
        e.target.reset()
      } else {
        setStatus({ type: "error", message: "Une erreur est survenue lors de l'envoi." })
      }
    } catch (err) {
      setStatus({ type: "error", message: "Le service de messagerie est indisponible." })
    } finally {
      setLoading(false)
    }
  }

  return (
    <section id="contact" className="py-24 bg-white text-slate-900">
      <div className="max-w-3xl">
        <h2 className="text-3xl font-bold mb-4 flex items-center gap-3">
          <span className="text-primary text-4xl">/</span> Contact
        </h2>
        <p className="text-slate-500 mb-12 text-lg">
          Une collaboration en vue ? N'hésitez pas à m'envoyer un message.
        </p>

        <form onSubmit={handleSubmit} className="space-y-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="relative border-b-2 border-slate-100 focus-within:border-primary transition-all">
              <label className="block text-xs font-bold uppercase text-slate-400 mb-1">Nom complet</label>
              <input 
                name="name"
                type="text" 
                placeholder="Ex: Sylla Bintou" 
                className="w-full py-2 bg-transparent outline-none text-slate-800 placeholder:text-slate-200" 
                required 
              />
            </div>
            
            <div className="relative border-b-2 border-slate-100 focus-within:border-primary transition-all">
              <label className="block text-xs font-bold uppercase text-slate-400 mb-1">Email</label>
              <input 
                name="email"
                type="email" 
                placeholder="exemple@domaine.com" 
                className="w-full py-2 bg-transparent outline-none text-slate-800 placeholder:text-slate-200" 
                required 
              />
            </div>
          </div>
          
          <div className="relative border-b-2 border-slate-100 focus-within:border-primary transition-all">
            <label className="block text-xs font-bold uppercase text-slate-400 mb-1">Votre projet</label>
            <textarea 
              name="message"
              placeholder="Décrivez votre demande..." 
              className="w-full py-2 bg-transparent outline-none text-slate-800 h-32 resize-none placeholder:text-slate-200" 
              required 
            />
          </div>

          {status.message && (
            <div className={`text-sm font-bold ${status.type === 'success' ? 'text-green-500' : 'text-red-500'}`}>
              {status.message}
            </div>
          )}

          <button 
            type="submit" 
            disabled={loading}
            className="btn btn-primary rounded-full px-12 text-white shadow-xl shadow-primary/20 hover:shadow-primary/40 transition-all border-none"
          >
            {loading ? <span className="loading loading-dots"></span> : 'Envoyer'}
          </button>
        </form>
      </div>
    </section>
  )
}