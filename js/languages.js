function getBlob(selected) {
    if(selected !== 'en' && selected !== 'fr') {
        selected = 'en';
    }

    var lang = {
        fr : {
          header: {
            quote: 'Le quotidien rendu formidable.',
            oneLiner: 'CASA RARA est un studio montréalais d\'expert en réalité virtuelle, avec plus de 4 années d\'expérience en productions VR.'
          },
          about: {
            title: 'À propos',
            content: [
              {
                title: 'Services de Consultation',
                description: 'Nous aidons à réaliser la vision de vos projets VR, à temps et dans vos budgets, avec l\'aide d\'experts en développement de jeux VR, projets éducatifs, récits interactifs et gestion de projet.'
              }, {
                title: 'Développement VR',
                description: 'Nous offrons notre expertise à tous développeurs ayant besoin d\'assistance dans la création de leurs projets. Éviter les embûches et les premières erreurs de développement en réalité virtuelle pour obtenir des résultats de qualité. Du concept initial, à travers la production jusqu\'au lancement.'
              }, {
                title: 'Jeux',
                description: 'Nous créons des jeux permettant aux joueurs d\'explorer les aspects complexes de l\'expérience humaine d\'un point de vue invitant et amusant.'
              }
            ]
          },
          projects: {
            title: 'Projets',
            content: [
              {
                title: 'Museum of Symmetry - Q4 2017',
                image: 'https://casa-rara.github.io/img/projects/MuseumOfSymmetry.png',
                description: 'Le périple d\'une jeune fille à travers un musée fantastique où des personnages excentriques lutter pour restaurer l\'ordre et redécouvrir la symétrie qui les connecte tous. Crée par Paloma Dawkins, produit par le NFB et développé par Casa Rara. Fait pour HTC Vive / Oculus Rift.'
              }, {
                title: 'EARTH 2 (titre temporaire) - 2018',
                image: 'https://casa-rara.github.io/img/projects/Earth2.png',
                description: 'Une simulation sociale en VR dans un monde vibrant, où humains, animaux et extra-terrestres vivent en harmonie.'
              }
            ]
          },
          team: {
            title: 'Équipe',
            content: [
              {
                name: 'Ruben Farrus',
                image: 'https://casa-rara.github.io/img/team/Ruben.png',
                linkedIn: 'https://www.linkedin.com/in/rubenfarrus/',
                role: 'Cofondateur & Directeur Créatif',
                intro: 'Spécialiste narratif de plus de 8 ans'
              }, {
                name: 'Tali Goldstein',
                image: 'https://casa-rara.github.io/img/team/Tali.png', 
                linkedIn: 'https://www.linkedin.com/in/tali-goldstein-78b1a439/',
                role: 'Cofondatrice & Productrice',
                intro: 'Directrice d’expérience & experte en publishing'
              }, {
                name: 'Clement Linel',
                image: 'https://casa-rara.github.io/img/team/Clement.png', 
                linkedIn: 'https://www.linkedin.com/in/cl%C3%A9ment-linel-0421843/',
                role: 'Programmeur Lead',
                intro: 'Ingénieur senior avec expertise en AI'
              }, {
                name: 'Nicolas Barriere-Kucharski',
                image: 'https://casa-rara.github.io/img/team/Nicolas.png', 
                linkedIn: 'https://www.linkedin.com/in/nicolasbarrierek/',
                role: 'Concepteur de jeux Senior',
                intro: 'Créateur, planificateur et scripteur in-engine hors pair'
              }, {
                name: 'Eliott Le Calvé',
                image: 'https://casa-rara.github.io/img/team/Eliott.png', 
                linkedIn: 'https://www.linkedin.com/in/eliottlecalve/',
                role: 'Artiste',
                intro: 'Expert 3D, illustrateur et polymathe'
              }, {
                name: 'Charlène Boutin',
                image: 'https://casa-rara.github.io/img/team/Charlene.png', 
                linkedIn: 'https://www.linkedin.com/in/charl%C3%A8ne-boutin-633129b4/',
                role: 'Conceptrice de jeux Junior',
                intro: 'Nouveau talent en design de niveaux et systèmes'
              }
            ]
          },
          partners: {
            title: 'Partenaires',
            content: [
              {
                name: 'MILIEUX',
                image: 'https://casa-rara.github.io/img/partners/MilieuxGrey.png',
                link: 'http://milieux.concordia.ca'
              },
              {
                name: 'Fondation Montreal Inc PME',
                image: 'https://casa-rara.github.io/img/partners/FondationGrey.png',
                link: 'http://www.montrealinc.ca'
              },
              {
                name: 'PME',
                image: 'https://casa-rara.github.io/img/partners/PMEGrey.png',
                link: 'https://pmemtl.com'
              },
              {
                name: 'SAJE',
                image: 'https://casa-rara.github.io/img/partners/SAJEGrey.png',
                link: 'https://www.sajeenaffaires.org'
              },
              {
                name: 'NFB',
                image: 'https://casa-rara.github.io/img/partners/NFBGrey.png',
                link: 'https://www.nfb.ca'
              }
            ]
          },
          jobs: {
            title: 'Emplois',
            noJobsText: 'Aucuns nouveaux postes ne sont présentement ouverts. Veuillez envoyer toutes candidatures à',
            content: [
              // {
              //   title: 'Software Engineer',
              //   pdf: 'https://somewhere.pdf',
              //   description: 'Lorem ipsum, Lorem ipsum, Lorem ipsum, Lorem ipsum.'
              // }
            ]
          },
          footer: {
            contact: 'Contactez-nous!',
            text: '© 2016-2017 Casa Rara Studio, Inc. Tout droits réservés.'
          }
        },
        en: {
          header: {
            quote: 'The Everyday made wonderful.',
            oneLiner: 'CASA RARA is a Montreal-based studio of Virtual Reality pioneers, with 4 years of experience developing for VR.'
          },
          about: {
            title: 'About',
            content: [
              {
                title: 'Consulting Services',
                description: 'We help you achieve the vision of your VR project on time and within budget with proven experts in VR, game development, educational projects, interactive storytelling & project management.'
              }, {
                title: 'VR Development',
                description: 'We offer our expertise to other developers who requiring assistance create their own projects. Skip the painful and costly learning curve of developing in virtual reality, to achieve excellent, high-quality results on time and within budget. From initial concept, through production to final launch.'
              }, {
                title: 'Games',
                description: 'We make games that allow players to explore the complex aspects of daily human life from an inviting & fun perspective.'
              }
            ]
          },
          projects: {
            title: 'Projects',
            content: [
              {
                title: 'Museum of Symmetry - Q4 2017',
                image: 'https://casa-rara.github.io/img/projects/MuseumOfSymmetry.png',
                description: 'A young girl’s journey through a whimsical museum where oddball characters struggle to restore balance and rediscover the symmetry that connects all. Created by Paloma Dawkins, produced by the NFB and developed by Casa Rara. Built for HTC Vive / Oculus Rift.'
              }, {
                title: 'EARTH 2 (temp title) - 2018',
                image: 'https://casa-rara.github.io/img/projects/Earth2.png',
                description: 'A hip single-player VR social simulation set in a vibrant world, where Humans, Animals and Aliens live together in harmony. The best of planet Earth. None of the fluff.'
              }
            ]
          },
          team: {
            title: 'Team',
            content: [
              {
                name: 'Ruben Farrus',
                image: 'https://casa-rara.github.io/img/team/Ruben.png',
                linkedIn: 'https://www.linkedin.com/in/rubenfarrus/',
                role: 'Co-Founder & Creative Director',
                intro: 'Award-winning narrative specialist of over 8 years'
              }, {
                name: 'Tali Goldstein',
                image: 'https://casa-rara.github.io/img/team/Tali.png',
                linkedIn: 'https://www.linkedin.com/in/tali-goldstein-78b1a439/',
                role: 'Co-Founder & Producer',
                intro: 'Leader & publishing relations ace'
              }, {
                name: 'Clement Linel',
                image: 'https://casa-rara.github.io/img/team/Clement.png',
                linkedIn: 'https://www.linkedin.com/in/cl%C3%A9ment-linel-0421843/',
                role: 'Lead Programmer',
                intro: 'Senior engineer with key AI mastery'
              }, {
                name: 'Nicolas Barriere-Kucharski', 
                linkedIn: 'https://www.linkedin.com/in/nicolasbarrierek/',
                role: 'Senior Designer',
                image: 'https://casa-rara.github.io/img/team/Nicolas.png',
                intro: 'Master planner, creator and in-engine scripter'
              }, {
                name: 'Eliott Le Calvé',
                image: 'https://casa-rara.github.io/img/team/Eliott.png', 
                linkedIn: 'https://www.linkedin.com/in/eliottlecalve/',
                role: 'Artist',
                intro: 'Skilled 3D artist, illustrator and polymath'
              }, {
                name: 'Charlène Boutin',
                image: 'https://casa-rara.github.io/img/team/Charlene.png',
                linkedIn: 'https://www.linkedin.com/in/charl%C3%A8ne-boutin-633129b4/',
                role: 'Junior Game Designer',
                intro: 'Rising talent in level and systems design'
              }
            ]
          },
          partners: {
            title: 'Partners',
            content: [
              {
                name: 'MILIEUX',
                image: 'https://casa-rara.github.io/img/partners/MilieuxGrey.png',
                link: 'http://milieux.concordia.ca'
              },
              {
                name: 'Fondation Montreal Inc PME',
                image: 'https://casa-rara.github.io/img/partners/FondationGrey.png',
                link: 'http://www.montrealinc.ca'
              },
              {
                name: 'PME',
                image: 'https://casa-rara.github.io/img/partners/PMEGrey.png',
                link: 'https://pmemtl.com'
              },
              {
                name: 'SAJE',
                image: 'https://casa-rara.github.io/img/partners/SAJEGrey.png',
                link: 'https://www.sajeenaffaires.org'
              },
              {
                name: 'NFB',
                image: 'https://casa-rara.github.io/img/partners/NFBGrey.png',
                link: 'https://www.nfb.ca'
              }
            ]
          },
          jobs: {
            title: 'Jobs',
            noJobsText: 'There are currently no open positions. For spontaneous applications, please send inquiries to',
            content: [
              // {
              //   title: 'Software Engineer',
              //   pdf: 'https://somewhere.pdf',
              //   description: 'Lorem ipsum, Lorem ipsum, Lorem ipsum, Lorem ipsum.'
              // }
            ]
          },
          footer: {
            contact: 'Contact us!',
            text: '© 2016-2017 Casa Rara Studio, Inc. All rights reserved.'
          }
        }
    };

    return lang[selected];
}