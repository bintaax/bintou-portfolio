import React from 'react';

export default function Projects() {
  const projectList = [
    {
      title: "Lectis",
      description: "Plateforme e-commerce complète (Librairie en ligne). Gestion du catalogue, panier dynamique, tunnel de commande, authentification et espace client.",
      tech: [
        "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/symfony/symfony-original.svg",
        "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg",
        "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original-wordmark.svg",
        "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tailwindcss/tailwindcss-original.svg"
      ],
      demo: null, // Ajoute l'URL si tu le déploies pour le TP
      github: "https://github.com/bintaax/lectis" 
    },
    {
      title: "Mon Coin Cuisine",
      description: "Mini-site de partage de recettes. Mise en œuvre de CRUD complets, gestion de base de données et interface responsive.",
      tech: [
        "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/symfony/symfony-original.svg",
        "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original-wordmark.svg",
        "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tailwindcss/tailwindcss-original.svg"
      ],
      demo: null,
      github: "https://github.com/bintaax/CoinCuisine"
    },
    {
      title: "To-do list améliorée",
      description: "Gestionnaire de tâches avec React et TypeScript, mettant l'accent sur la gestion d'état et l'expérience utilisateur.",
      tech: [
        "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg",
        "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg",
        "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tailwindcss/tailwindcss-original.svg"
      ],
      demo: "https://todolistofbintou.vercel.app",
      github: "https://github.com/bintaax/to-do-list-with-react"
    },
    {
      title: "BintFlix",
      description: "Application de streaming front-end simulant un catalogue de films dynamique.",
      tech: [
        "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg",
        "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tailwindcss/tailwindcss-original.svg",
        "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg"
      ],
      demo: "https://bintflix.vercel.app",
      github: "https://github.com/bintaax/bintflix"
    },
    {
      title: "DevineNumber",
      description: "Jeu de logique interactif développé pour consolider les bases de l'algorithmique en JavaScript.",
      tech: [
        "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg",
        "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg",
        "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg"
      ],
      demo: "https://devine-number.vercel.app",
      github: "https://github.com/bintaax/devinenumber"
    }
  ];

  return (
    <section id="projects" className="py-20 bg-white">
      <div className="max-w-6xl">
        <h2 className="text-3xl font-bold mb-10 text-slate-900 flex items-center gap-3">
          <span className="text-primary text-4xl">/</span> Mes projets
        </h2>

        <div className="grid gap-8 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
          {projectList.map((project, index) => (
            <div key={index} className="flex flex-col bg-white border border-slate-200 rounded-2xl overflow-hidden shadow-sm hover:shadow-lg transition-all group">
              <div className="p-8 grow">
                <h3 className="text-2xl font-bold text-slate-900 mb-3 group-hover:text-primary transition-colors italic">
                  {project.title}
                </h3>
                <p className="text-slate-600 text-sm leading-relaxed mb-6">
                  {project.description}
                </p>
                <div className="flex gap-3 mt-auto">
                  {project.tech.map((icon, i) => (
                    <img key={i} src={icon} className="w-5 h-5 opacity-80" alt="tech icon" />
                  ))}
                </div>
              </div>
              
              <div className="p-8 pt-0 mt-auto flex flex-col gap-2">
                {project.demo && (
                  <a href={project.demo} target="_blank" rel="noreferrer" className="btn btn-secondary w-full text-white font-bold">
                    Voir le projet
                  </a>
                )}
                
                {project.github && (
                  <a href={project.github} target="_blank" rel="noreferrer" className={`btn w-full font-bold ${!project.demo ? 'btn-primary text-white' : 'btn-outline border-slate-200 text-slate-500 hover:bg-slate-50'}`}>
                    Voir le code
                  </a>
                )}
              </div>
            </div>
          ))}

          {/* Carte Spéciale ETNA */}
          <div className="flex flex-col justify-center p-8 bg-slate-50 border border-dashed border-slate-300 rounded-2xl">
            <div className="mb-4">
               <span className="badge badge-primary font-bold text-white px-3 py-3">ETNA 2026</span>
            </div>
            <p className="text-sm font-bold text-slate-800 mb-2 italic">Prochainement...</p>
            <p className="text-sm text-slate-500">
              Actuellement en préparation du Bachelor Développeur Full-Stack, de nouveaux projets académiques arriveront ici dès la rentrée.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}