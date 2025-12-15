function CV() {
  return (
    <section
      id="cv"
      className="py-24"
    >
      <div className="max-w-3xl">

        <h2 className="text-3xl font-bold mb-6">
          Mon CV
        </h2>

        <p className="text-lg  mb-6">
          Je suis une développeuse web junior orientée front-end, avec un intérêt
          particulier pour la création d’interfaces modernes, accessibles et
          responsives. J’aime transformer des maquettes en expériences utilisateur
          fluides et soignées.
        </p>

        <p className=" mb-8">
          Actuellement, je développe des projets personnels en <strong>React</strong> et
          <strong> Symfony</strong> afin de consolider mes compétences et de me rapprocher
          des pratiques professionnelles du développement web.
        </p>

        <div className="flex flex-col sm:flex-row gap-4">
          <a
              href="/CV_BintouSYLLA.pdf" download className="btn btn-primary text-white"
          >
            Télécharger mon CV
          </a>

          <a
            href="/CV_BintouSYLLA.pdf"
            target="_blank"
            className="btn btn-outline"
          >
            Voir le CV
          </a>
        </div>

      </div>
    </section>
  )
}

export default CV


