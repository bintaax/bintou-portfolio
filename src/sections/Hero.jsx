import { Typewriter } from "react-simple-typewriter"

function Hero() {
  return (
    <section className="py-20 sm:py-28">
      <h2 className="text-xl sm:text-2xl font-semibold mb-2 ">
        Enchantée, moi c’est Bintou 😁 !
      </h2>


<h1 className="text-4xl sm:text-5xl font-bold mb-6">
    Développeuse full-stack
</h1>


      <p className="text-base sm:text-lg  max-w-2xl">
        Ce qui me motive ? <strong><Typewriter words={["Créer des interfaces modernes","Apporter une expérience utilisateur agréable et intuitive" ]} loop cursor typeSpeed={50} deleteSpeed={80} delaySpeed={100}/></strong></p>
      <p className="text-base sm:text-lg  max-w-2xl">Curieuse, créative et motivée, je suis toujours prête à relever de nouveaux défis techniques et créatifs.</p>

      <div className="flex flex-col sm:flex-row gap-4 mt-8">
        <a
          href="#projects"
          className="btn btn-primary text-white text-base sm:text-lg"
        >
          Voir mon travail
        </a>

        <a
          href="#contact"
          className="btn btn-outline text-white text-base sm:text-lg"
        >
          Me contacter
        </a>
      </div>
    </section>
  )
}

export default Hero
