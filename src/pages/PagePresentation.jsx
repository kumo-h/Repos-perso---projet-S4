import ProjectSection from "../components/ProjectSection";




function PagePresentation() {


const sections = [
  {
    title: "Le projet",
    description: "Notre projet est de concevoir une application web de jeux cognitifs avec React. Nous avons choisi de développer une application web pour sa facilité d'accès et sa compatibilité avec différents appareils. L'application se concentrera sur des jeux cognitifs simples et amusants, visant à stimuler les fonctions cognitives des utilisateurs. Nous avons pour cela développé une page de présentation du projet, une page de catalogue pour jeux pour accéder aux différents jeux, ainsi qu'une page dédiée à la gestion de projet ainsi qu'aux conclusions que l'équipe a tirées de ce projet.",
  },
  {
    title: "Les objectifs",
    description: "L'objectif du projet est de concevoir une application simple de jeux cognitifs avec React. Nous avons réduit notre périmètre à un jeu : le Memory.",  
  },
  {
    title: "L'équipe",
    description: "Ce projet a été réalisé par l'équipe suivante : Tendry Arondriaka MANAMBITSOA et Inès LEBOUC-DHOMMEE, encadrés par Yannick KERGOSIEN. Nous avons travaillé en étroite collaboration tout au long du projet, partageant nos idées et nos compétences pour atteindre les objectifs fixés.",
  },
  {
    title: "Le contexte de développement",
    description: "Intéressée par les jeux vidéo, et l'informatique, l'équipe a eu l'idée de concevoir une application de jeux cognitifs. Ce projet leur a permis de développer leurs compétences en programmation, en conception d'application, en gestion de projet ainsi qu'en travail d'équipe",
  },

  {
    title: "La stack",
    description: "Le choix des technologies fait par l'équipe a été : React, ShellModule, app web (et non native), Vite, GitHub. Pour les raisons d'accessibilité et de performance, nous avons opté pour cette stack technologique.",
  },
  {
    title: "Les risques et les contraintes",
    description: "Les principaux risques liés au projet sont liés à la gestion du temps et à la complexité technique de l'implémentation. Les contraintes incluent un planning à respecter.",  
  },
];

  return (
    <main>
        <h1>Présentation du projet</h1>
        
        {sections.map((section) => (
          <ProjectSection
            key={section.title}
            title={section.title}
            description={section.description}
          />
        ))}
    </main>
  );
}

export default PagePresentation;