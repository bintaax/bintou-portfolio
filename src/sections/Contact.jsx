import { useState } from "react"

function Contact() {
  const [success, setSuccess] = useState(null)
  const [error, setError] = useState(null)

  const handleSubmit = async (e) => {
    e.preventDefault()
    setSuccess(null)
    setError(null)

    const formData = new FormData(e.target)

    const response = await fetch("https://formspree.io/f/mjknljrg", {
      method: "POST",
      headers: {
        "Accept": "application/json",
      },
      body: formData,
    })

    if (response.ok) {
      setSuccess("Message envoyé avec succès ✨")
      e.target.reset()
    } else {
      setError("Impossible d’envoyer le message")
    }
  }

  return (
    <section id="contact" className="py-24">
      <div className="max-w-3xl">

        <h2 className="text-3xl font-bold mb-6">
          Me contacter
        </h2>

        <p className="text-lg text-gray-400 mb-10">
          Une question, une opportunité ou simplement envie d’échanger ?
        </p>

        <form onSubmit={handleSubmit} className="space-y-6">

          <input
            type="text"
            name="name"
            placeholder="Ton nom"
            className="input input-bordered w-full"
            required
          />

          <input
            type="email"
            name="email"
            placeholder="ton@email.com"
            className="input input-bordered w-full"
            required
          />

          <textarea
            name="message"
            placeholder="Ton message…"
            rows="5"
            className="textarea textarea-bordered w-full"
            required
          />

          {success && <p className="text-success">{success}</p>}
          {error && <p className="text-error">{error}</p>}

          <button className="btn btn-accent text-white">
            Envoyer le message
          </button>

        </form>
      </div>
    </section>
  )
}

export default Contact


