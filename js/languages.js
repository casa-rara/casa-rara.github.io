function getBlob(selected) {
  if (selected !== 'en' && selected !== 'fr') {
    selected = 'en';
  }

  var lang = {
    fr: {
      header: {
        quote: 'Le quotidien rendu formidable',
        oneLiner:
          'Nous avons pour vocation de créer des jeux avec lesquels notre public entrera en vibration émotionnelle, sans oublier de les rendre excitants, impressionants et amusants!',
      },
      about: {
        title: 'À propos',
        content: [
          {
            title: 'Jeux',
            description:
              "Nous créons des jeux permettant aux joueurs d'explorer les aspects complexes de l'expérience humaine d'un point de vue invitant et amusant.",
          },
          {
            title: 'Services de Consultation',
            description:
              'Laissez notre équipe de développeurs expérimentés prendre soin de votre concept, de la phase initiale au rendu final.',
          },
          {
            title: 'Développement VR et RA',
            description:
              "Emmenez votre public à la découverte de mondes virtuels de très haute qualité grâce à notre équipe d'experts en RV.",
          },
        ],
      },
      projects: {
        title: 'Projets',
        content: [
          {
            title: 'Musée de la symétrie',
            image: 'https://casa-rara.github.io/img/projects/MuseumOfSymmetryFR.jpg',
            description:
              'Musée de la symétrie illustre l’univers parallèle pétillant et joyeux de la bédéiste et animatrice Paloma Dawkins. Une expérience de réalité virtuelle où l’animation en 2D se déploie dans un terrain de jeu en 3D à l’échelle d’une pièce. Produit par le NFB et developpe par Casa Rara, pour HTC Vive.',
            video: 'https://player.vimeo.com/video/261848776',
          },
          {
            title: "Le Facteur de l'Espace",
            image: 'https://casa-rara.github.io/img/projects/LeFacteurDeLespace.jpg',
            description:
              'Un jeu pour plateformes mobiles avec de la Realité Augmenté, adapté du Facteur de l’Espace, la bande-dessinée jeunesse à succès de Guillaume Perreault. Les aventures de Bob et les mystérieux colis qu’il doit livrer à travers la galaxie. Financé par la FMC, produit par La Pastèque et URBANIA et en developpement par Casa Rara.',
          },
        ],
      },
      partners: {
        title: 'Partenaires',
        content: [
          {
            name: 'MILIEUX',
            image: 'https://casa-rara.github.io/img/partners/MilieuxGrey.png',
            link: 'http://milieux.concordia.ca',
          },
          {
            name: 'Fondation Montreal Inc PME',
            image: 'https://casa-rara.github.io/img/partners/FondationGrey.png',
            link: 'http://www.montrealinc.ca',
          },
          {
            name: 'PME',
            image: 'https://casa-rara.github.io/img/partners/PMEGrey.png',
            link: 'https://pmemtl.com',
          },
          {
            name: 'SAJE',
            image: 'https://casa-rara.github.io/img/partners/SAJEGrey.png',
            link: 'https://www.sajeenaffaires.org',
          },
          {
            name: 'NFB',
            image: 'https://casa-rara.github.io/img/partners/NFBGrey.png',
            link: 'https://www.nfb.ca',
          },
          {
            name: 'CMF - FMC',
            image: 'https://casa-rara.github.io/img/partners/CMFGrey.png',
            link: 'https://www.cmf-fmc.ca/',
          },
          {
            name: 'La Pasteque',
            image: 'https://casa-rara.github.io/img/partners/LaPastequeGrey.png',
            link: 'https://www.lapasteque.com/',
          },
          {
            name: 'URBANIA',
            image: 'https://casa-rara.github.io/img/partners/UrbaniaGrey.png',
            link: 'https://urbania.ca/',
          },
        ],
      },
      jobs: {
        title: 'Emplois',
        noJobsText:
          'Aucuns nouveaux postes ne sont présentement ouverts. Veuillez envoyer toutes candidatures à',
        content: [
          // {
          //   title: 'Software Engineer',
          //   pdf: 'https://somewhere.pdf',
          //   description: 'Lorem ipsum, Lorem ipsum, Lorem ipsum, Lorem ipsum.'
          // }
        ],
      },
      footer: {
        contact: 'Contactez-nous!',
        text: '© 2016-2019 Casa Rara Studio, Inc. Tout droits réservés.',
      },
    },
    en: {
      header: {
        quote: 'The Everyday made wonderful',
        oneLiner:
          'We live to make games that resonate emotionally with our audience, without forgetting to make them exciting, fun and mind-bending!',
      },
      about: {
        title: 'About',
        content: [
          {
            title: 'Games',
            description:
              'We make games for players to explore the complex aspects of their life from an inviting & fun perspective.',
          },
          {
            title: 'All-inclusive development',
            description:
              'Have our team of experienced developers take care of your concept, from initial pitch to final delivery.',
          },
          {
            title: 'VR and AR expertise',
            description:
              'Transport your audience to world-class virtual worlds thanks to our team of VR experts.',
          },
        ],
      },
      projects: {
        title: 'Projects',
        content: [
          {
            title: 'Museum of Symmetry',
            image: 'https://casa-rara.github.io/img/projects/MuseumOfSymmetryFR.jpg',
            description:
              'An absurdist mind-and-body romp through the highest clouds to the ocean deep, Museum of Symmetry is the explosive feel-good alter-universe of cartoonist and animator Paloma Dawkins—a room-scale VR experience with 2D animation in a 3D playground. Produced by the NFB and developed by Casa Rara. Built for HTC Vive.',
            video: 'https://player.vimeo.com/video/261848776',
          },
          {
            title: "Le Facteur de l'Espace",
            image: 'https://casa-rara.github.io/img/projects/LeFacteurDeLespace.jpg',
            description:
              "A mobile game with engaging AR features based on Guillaume Perreault's best-selling youth comic book. The adventures of Bob and the mysterious packages he has to deliver across the galaxy. Funded by the CMF, Produced by La Pastèque and URBANIA and in-development by Casa Rara.",
          },
        ],
      },
      partners: {
        title: 'Partners',
        content: [
          {
            name: 'MILIEUX',
            image: 'https://casa-rara.github.io/img/partners/MilieuxGrey.png',
            link: 'http://milieux.concordia.ca',
          },
          {
            name: 'Fondation Montreal Inc PME',
            image: 'https://casa-rara.github.io/img/partners/FondationGrey.png',
            link: 'http://www.montrealinc.ca',
          },
          {
            name: 'PME',
            image: 'https://casa-rara.github.io/img/partners/PMEGrey.png',
            link: 'https://pmemtl.com',
          },
          {
            name: 'SAJE',
            image: 'https://casa-rara.github.io/img/partners/SAJEGrey.png',
            link: 'https://www.sajeenaffaires.org',
          },
          {
            name: 'NFB',
            image: 'https://casa-rara.github.io/img/partners/NFBGrey.png',
            link: 'https://www.nfb.ca',
          },
          {
            name: 'CMF',
            image: 'https://casa-rara.github.io/img/partners/CMFGrey.png',
            link: 'https://www.cmf-fmc.ca/',
          },
          {
            name: 'La Pasteque',
            image: 'https://casa-rara.github.io/img/partners/LaPastequeGrey.png',
            link: 'https://www.lapasteque.com/',
          },
          {
            name: 'URBANIA',
            image: 'https://casa-rara.github.io/img/partners/UrbaniaGrey.png',
            link: 'https://urbania.ca/',
          },
        ],
      },
      jobs: {
        title: 'Jobs',
        noJobsText:
          'There are currently no open positions. For spontaneous applications, please send inquiries to',
        content: [
          // {
          //   title: 'Software Engineer',
          //   pdf: 'https://somewhere.pdf',
          //   description: 'Lorem ipsum, Lorem ipsum, Lorem ipsum, Lorem ipsum.'
          // }
        ],
      },
      footer: {
        contact: 'Contact us!',
        text: '© 2016-2019 Casa Rara Studio, Inc. All rights reserved.',
      },
    },
  };

  return lang[selected];
}
