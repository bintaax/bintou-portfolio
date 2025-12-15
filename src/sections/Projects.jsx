function Projects() {
  return (
    <section
      id="projects"
    >
      <h2 className="text-3xl font-bold mb-10">
        Mes projets
      </h2>

      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
        {/* Carte 1 */}


<div class="bg-neutral-primary-soft block max-w-sm p-6 border border-default rounded-base shadow-xs">
    <h3 className="text-2xl font-bold mb-3">DevineNumber</h3>
    <p class="mb-6 text-body">Mini-jeu qui consiste à deviner un nombre choisi par l'ordinateur</p>
    <h6 className="text-xl font-bold">Technologies utilisées</h6>
    <div className="flex mb-5">
               <img width="48" height="48" src="https://img.icons8.com/color/48/html-5--v1.png" alt="html-5"/>
                    <img width="48" height="48" src="https://img.icons8.com/color/48/css3.png" alt="css3"/>
                    <img width="48" height="48" src="https://img.icons8.com/fluency/48/javascript.png" alt="javascript"/>
    </div>
   <a href="https://devine-number.vercel.app" className="btn btn-secondary w-full text-white">Voir le projet</a>
</div>


        {/* Carte 2 */}


<div class="bg-neutral-primary-soft block max-w-sm p-6 border border-default rounded-base shadow-xs">
    <h3 className="text-2xl font-bold mb-3">To-do list améliorée</h3>
    <p class="mb-6 text-body">Gestionnaire de tâches avec React</p>
    <h6 className="text-xl font-bold">Technologies utilisées</h6>
    <div className="flex mb-5">    
        <img width="35" height="35" src="https://img.icons8.com/color/48/html-5--v1.png" alt="html-5"/>
                    <img width="35" height="35" src="https://img.icons8.com/color/48/css3.png" alt="css3"/>
                    <img width="35" height="35" src="https://img.icons8.com/fluency/48/typescript--v1.png" alt="typescript"/>
                    <img width="35" height="35" src="https://img.icons8.com/fluency/48/javascript.png" alt="javascript"/>
                    <img width="35" height="35" src="https://img.icons8.com/external-tal-revivo-color-tal-revivo/48/external-react-a-javascript-library-for-building-user-interfaces-logo-color-tal-revivo.png" alt="react"/>
                    <img width="35" height="35" src="https://img.icons8.com/color/48/tailwindcss.png" alt="tailwindcss"/>
                    </div>
   <a href="https://todolistofbintou.vercel.app" className="btn btn-secondary text-white w-full">Voir le projet</a>
</div>

        {/* Carte 3 */}

        <div class="bg-neutral-primary-soft block max-w-sm p-6 border border-default rounded-base shadow-xs">
    <h3 className="text-2xl font-bold mb-3">BintFlix</h3>
    <p class="mb-6 text-body">Mini-projet de site de streaming</p>
    <h6 className="text-xl font-bold">Technologies utilisées</h6>
    <div className="flex mb-5">
               <img width="48" height="48" src="https://img.icons8.com/color/48/html-5--v1.png" alt="html-5"/>
                    <img width="48" height="48" src="https://img.icons8.com/color/48/css3.png" alt="css3"/>
                    <img width="48" height="48" src="https://img.icons8.com/fluency/48/javascript.png" alt="javascript"/>
                             <img width="35" height="35" src="https://img.icons8.com/color/48/tailwindcss.png" alt="tailwindcss"/>
    </div>
   <a href="https://bintflix.vercel.app" className="btn btn-secondary text-white w-full">Voir le projet</a>
</div>
        {/* Carte 4 */}

                <div class="bg-neutral-primary-soft block max-w-sm p-6 border border-default rounded-base shadow-xs">
    <h3 className="text-2xl font-bold mb-3">Travaux pratiques & évaluations</h3>
    <p class="mb-6 text-body">En plus de mes projets personnels, j'ai également réalisé des travaux pratiques et des évaluations dans le cadre de ma formation au Titre Professionnel Développeur Web et Web Mobile.</p>

</div>
      </div>
    </section>
  )
}

export default Projects
