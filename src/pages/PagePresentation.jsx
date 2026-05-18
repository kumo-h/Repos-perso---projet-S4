import ProjectSection from "../components/ProjectSection";




function PagePresentation() {


const sections = [
  {
    title: "Le projet",
    description: "Notre projet consiste à concevoir une application web de jeux cognitifs développée avec React. L’objectif est de proposer une plateforme simple, accessible et compatible avec différents appareils, permettant aux utilisateurs de découvrir plusieurs jeux visant à stimuler certaines fonctions cognitives comme la mémoire, l’attention ou la rapidité de réflexion. Pour structurer l’application, nous avons développé une page de présentation, ainsi qu'un catalogue permettant d’accéder aux différents jeux.",
    couleur: "var(--bleu)",
  },
  {
    title: "Les objectifs",
    description: "L’objectif du projet est de concevoir une application web de jeux cognitifs avec React, à la fois simple, claire et évolutive. Notre ambition initiale était de proposer plusieurs mini-jeux, mais nous avons choisi de recentrer le périmètre sur un Memory complet afin de garantir une version fonctionnelle, stable et présentable dans le temps imparti. Ce choix permet également de conserver une architecture modulaire, pensée pour accueillir d’autres jeux par la suite.",
    couleur: "var(--vert)",
  },
  {
    title: "L'équipe",
    description: "Le projet a été réalisé en binôme par Tendry Arondriaka MANAMBITSOA et Inès LEBOUC-DHOMMEE, sous l’encadrement de Yannick KERGOSIEN. Tout au long du semestre, nous avons travaillé de manière collaborative, en confrontant nos idées, en répartissant les tâches et en mettant en commun nos compétences. Cette organisation nous a permis d’avancer progressivement, de résoudre les difficultés rencontrées et de construire une application cohérente avec les objectifs fixés.",
    couleur: "var(--jaune)",
  },
  {
    title: "Le contexte de développement",
  description: "Intéressés par la programmation, les jeux vidéo et les sciences cognitives, nous avons choisi de concevoir une application web de jeux cognitifs. Ce projet nous a permis de nous initier au développement React, à la conception d’interface, à l'organisation de code et à la gestion de projet. Il a également été l’occasion de travailler en équipe, de prendre des décisions techniques et d’adapter nos objectifs aux contraintes rencontrées au cours du semestre.",
    couleur: "var(--rouge)",
  },

  {
    title: "La stack",
  description: "Pour développer notre application, nous avons choisi une stack web simple et adaptée à notre niveau : React pour la construction de l’interface, Vite pour faciliter le développement, JavaScript, HTML et CSS pour la structure et le style, ainsi que Git et GitHub pour le versionnement et le travail collaboratif. Nous avons également retenu une architecture de type Shell & Modules, qui permet de séparer la structure générale du site des différents jeux. Ce choix rend l’application plus claire, plus maintenable et plus facile à faire évoluer.",
    couleur: "var(--bleu)",
  },
  {
    title: "Les risques et les contraintes",
  description: "Les principaux risques du projet concernaient la gestion du temps, la complexité technique de certaines fonctionnalités et la stabilité de l’application. Le planning du semestre nous imposait de faire des choix réalistes et de prioriser les éléments essentiels. Pour répondre à ces contraintes, nous avons choisi de recentrer le périmètre sur un Memory complet, fonctionnel et présentable, tout en conservant une architecture modulaire permettant d’ajouter d’autres jeux par la suite.",
    couleur: "var(--vert-fonce)",
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
            color={section.couleur}
          />
        ))}
    </main>
  );
}

export default PagePresentation;