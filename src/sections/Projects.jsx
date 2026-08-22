import React from 'react';

export default function Projects() {
  const projectList = [
    {
      title: "Lectis 2.0",
      badge: "Projet phare",
      description:
        "Refonte de Lectis avec React et l’API Google Books, avec une interface responsive et accessible.",
      tech: [
        {
          name: "React",
          icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg"
        },
        {
          name: "JavaScript",
          icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg"
        },
        {
          name: "TailwindCSS",
          icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tailwindcss/tailwindcss-original.svg"
        }
      ],
      demo: "https://lectisv2.netlify.app",
      github: "https://github.com/bintaax/lectis2.0"
    },

    {
      title: "Lectis",
      description:
        "Plateforme e-commerce développée avec Symfony : catalogue, panier, authentification et espace client.",
      tech: [
        {
          name: "Symfony",
          icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/symfony/symfony-original.svg"
        },
        {
          name: "JavaScript",
          icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg"
        },
        {
          name: "MySQL",
          icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original-wordmark.svg"
        },
        {
          name: "TailwindCSS",
          icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tailwindcss/tailwindcss-original.svg"
        }
      ],
      demo: null,
      github: "https://github.com/bintaax/lectis"
    },

    {
      title: "Mon Coin Cuisine",
      description:
        "Application de recettes avec Symfony, CRUD complet et gestion de base de données.",
      tech: [
        {
          name: "Symfony",
          icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/symfony/symfony-original.svg"
        },
        {
          name: "MySQL",
          icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original-wordmark.svg"
        },
        {
          name: "TailwindCSS",
          icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tailwindcss/tailwindcss-original.svg"
        }
      ],
      demo: null,
      github: "https://github.com/bintaax/CoinCuisine"
    },

    {
      title: "To-do list améliorée",
      description:
        "Application de gestion de tâches développée avec React et TypeScript.",
      tech: [
        {
          name: "React",
          icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg"
        },
        {
          name: "TypeScript",
          icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg"
        },
        {
          name: "TailwindCSS",
          icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tailwindcss/tailwindcss-original.svg"
        }
      ],
      demo: "https://todolistofbintou.vercel.app",
      github: "https://github.com/bintaax/to-do-list-with-react"
    },

    {
      title: "BintFlix",
      description:
        "Catalogue de films dynamique développé en JavaScript avec intégration d’une API.",
      tech: [
        {
          name: "HTML5",
          icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg"
        },
        {
          name: "CSS3",
          icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg"
        },
        {
          name: "JavaScript",
          icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg"
        }
      ],
      demo: "https://bintflix.vercel.app",
      github: "https://github.com/bintaax/bintflix"
    },

    {
      title: "DevineNumber",
      description:
        "Jeu de logique interactif développé en JavaScript pour travailler l’algorithmique.",
      tech: [
        {
          name: "HTML5",
          icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg"
        },
        {
          name: "CSS3",
          icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg"
        },
        {
          name: "JavaScript",
          icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg"
        }
      ],
      demo: "https://devine-number.vercel.app",
      github: "https://github.com/bintaax/devinenumber"
    }
  ];

  return (
    <section id="projects" className="py-20 bg-white">
      <div className="max-w-6xl">
        
        <h2 className="text-3xl font-bold mb-10 text-slate-900 flex items-center gap-3">
          <span className="text-primary text-4xl">/</span>
          Mes projets
        </h2>

        <div className="grid gap-8 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3">

          {projectList.map((project, index) => (
            <article
              key={index}
              className="flex flex-col bg-white border border-slate-200 rounded-2xl overflow-hidden shadow-sm hover:shadow-lg transition-all group"
            >

              <div className="p-8 grow">

                <div className="flex items-start justify-between gap-3 mb-3">
                  <h3 className="text-2xl font-bold text-slate-900 group-hover:text-primary transition-colors italic">
                    {project.title}
                  </h3>

                  {project.badge && (
                    <span className="badge badge-primary text-white font-semibold shrink-0">
                      {project.badge}
                    </span>
                  )}
                </div>

                <p className="text-slate-600 text-sm leading-relaxed mb-6">
                  {project.description}
                </p>

                <div
                  className="flex flex-wrap gap-3"
                  aria-label={`Technologies utilisées pour ${project.title}`}
                >
                  {project.tech.map((technology) => (
                    <div
                      key={technology.name}
                      className="flex items-center gap-1.5"
                      title={technology.name}
                    >
                      <img
                        src={technology.icon}
                        className="w-5 h-5 opacity-80"
                        alt=""
                        aria-hidden="true"
                      />
                      <span className="text-xs text-slate-500">
                        {technology.name}
                      </span>
                    </div>
                  ))}
                </div>

              </div>

              <div className="p-8 pt-0 mt-auto flex flex-col gap-2">

                {project.demo && (
                  <a
                    href={project.demo}
                    target="_blank"
                    rel="noreferrer"
                    className="btn btn-secondary w-full text-white font-bold"
                    aria-label={`Voir le projet ${project.title}`}
                  >
                    Voir le projet
                  </a>
                )}

                {project.github && (
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noreferrer"
                    className={`btn w-full font-bold ${
                      !project.demo
                        ? 'btn-primary text-white'
                        : 'btn-outline border-slate-200 text-slate-500 hover:bg-slate-50'
                    }`}
                    aria-label={`Voir le code source de ${project.title}`}
                  >
                    Voir le code
                  </a>
                )}

              </div>

            </article>
          ))}

        </div>
      </div>
    </section>
  );
}