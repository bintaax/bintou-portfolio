import React from 'react';

export default function Stacks() {
  const categories = [
    {
      title: "Frontend",
      skills: [
        { name: "HTML5", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg" },
        { name: "CSS3", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg" },
        { name: "JavaScript", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg" },
        { name: "React (Débutant)", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg" },
        { name: "TailwindCSS", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tailwindcss/tailwindcss-original.svg" },
      ]
    },
    {
      title: "Backend",
      skills: [
        { name: "PHP", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/php/php-original.svg" },
        { name: "Symfony", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/symfony/symfony-original.svg" },
      ]
    },
    {
      title: "Base de données",
      skills: [
        { name: "MySQL", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original-wordmark.svg" },
      ]
    },
    {
      title: "Outils",
      skills: [
        { name: "Git", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg" },
        { name: "VS Code", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vscode/vscode-original.svg" },
      ]
    }
  ];

  return (
    <section id="stacks" className="py-20 bg-white">
      <div className="max-w-5xl">
        <h2 className="text-3xl font-bold mb-12 text-slate-900 flex items-center gap-3">
          <span className="text-primary text-4xl">/</span> Mes Stacks
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          {categories.map((cat, index) => (
            <div key={index} className="bg-transparent transition-all">
              <h3 className="text-xs font-black uppercase tracking-[0.2em] text-slate-400 mb-6 border-b border-slate-100 pb-2">
                {cat.title}
              </h3>
              <div className="flex flex-wrap gap-6">
                {cat.skills.map((skill, i) => (
                  <div key={i} className="flex items-center gap-3 group">
                    <img src={skill.icon} alt={skill.name} className="w-7 h-7 grayscale group-hover:grayscale-0 transition-all duration-300" />
                    <span className="text-sm font-semibold text-slate-600 group-hover:text-primary transition-colors italic">
                      {skill.name}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}