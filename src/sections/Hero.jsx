import React from 'react';
import { Typewriter } from "react-simple-typewriter";

export default function Hero() {
  return (
    <section id="hero" className="py-20 sm:py-28 bg-white">
      <div className="max-w-4xl">
        <h2 className="text-xl sm:text-2xl font-medium text-slate-600 mb-2">
          Enchantée, moi c’est Bintou 😁 !
        </h2>

        <h1 className="text-4xl sm:text-6xl font-extrabold text-slate-900 mb-6">
          Développeuse Full-Stack
        </h1>

        <div className="text-base sm:text-lg max-w-2xl min-h-[3rem] text-slate-700">
          <p>
            Ce qui me motive ?{" "}
            <span className="text-primary font-bold">
              <Typewriter 
                words={["Relever des défis techniques", "Concevoir des solutions Full-Stack", "Apporter une expérience utilisateur intuitive"]} 
                loop 
                cursor 
                typeSpeed={50} 
                deleteSpeed={80} 
                delaySpeed={1000} 
              />
            </span>
          </p>
        </div>

        <div className="mt-6 p-4 bg-primary/5 border-l-4 border-primary max-w-2xl">
          <p className="text-slate-700">
            🎓 Admise en <strong>3ème année de Bachelor Développeur Full-Stack</strong> à l'<strong>ETNA Paris</strong>, je suis actuellement à la recherche d'une <strong>alternance</strong> pour mettre mes compétences au service de votre équipe.
          </p>
        </div>

        <div className="mt-12 pt-10 border-t border-slate-100">
          <div className="flex flex-wrap gap-4 mt-8">
            <a 
              href="/CV-BintouSYLLA.pdf" 
              download 
              className="btn btn-primary text-white shadow-md hover:shadow-lg transition-all px-8"
            >
              Télécharger mon CV
            </a>

            <a 
              href="/CV-BintouSYLLA.pdf" 
              target="_blank" 
              rel="noreferrer"
              className="btn btn-outline border-slate-300 text-slate-600 hover:bg-slate-50 hover:text-slate-900"
            >
              Voir le CV
            </a>
            
            <a href="#contact" className="btn btn-ghost text-primary font-bold">
              Me recruter
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}