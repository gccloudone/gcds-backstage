import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

i18n.use(initReactI18next).init({
  fallbackLng: 'en',
  interpolation: { escapeValue: false },
  resources: {
    en: {
      translation: {
        home: {
          title: 'GC Developer Portal',
          feedback_title: 'Provide Feedback',
          feedback_message: 'The GC Developer Portal is managed by the Product Office team. Join us as we work together to create impactful solutions by',
          feedback_link: 'providing feedback',
          description: 'The GC Developer Portal is a place to access common technical documentation, community knowledge bases, code samples and APIs.',
          search_placeholder: 'Search all GC Developer Portal resources',
        },

        docs: {
          section_title: 'Documentation library',
          view_all: 'View all docs',
          aurora_label: 'Aurora technical docs',
          aurora_button: 'Explore the Aurora initiative',
          aurora_description: 'Aurora is a universal platform for modern application hosting, designed to standardize the use of managed Kubernetes services.',
          private_label: 'Private cloud technical docs',
          private_button: 'Explore the Private cloud',
          private_description:'Learn how to build, deploy, maintain, and retire applications on OpenStack.',
          serving_label: 'Serving Government',
          serving_button: 'Consult Serving Government',
          serving_description: 'Serving Government is an extranet that provides GC partners and clients with information on Shared Services Canada.',
        },

        event: {
          section_title: 'Events',
          aurora_label: 'Aurora 101',
          aurora_button: 'Register for Aurora 101',
          aurora_description: 'This in-depth technical training provides a comprehensive overview of the Aurora platform.',
          aurora_what: 'What:',
          aurora_where: 'Where:',
          aurora_when: 'When:',
          aurora_what_description: 'The Aurora 101 course',
          aurora_where_description: 'Online',
          aurora_when_description: 'Recurring Quarterly',
        },

        tool: {
          github_label: 'GitHub',
          github_button: 'Find code',
          github_description: 'Collaborate on a web-based version control platform that allows developers to seamlessly host, review, and manage their code repositories.',
        },

        community: {
          section_title: 'Get support from the developer community',
          section_description: "We're all here to help! Connect with other developers across the GC and ask questions to improve your knowledge.",
        }
      },
    },
    fr: {
      translation: {
        home: {
          title: 'Portail des développeurs GC',
          feedback_title: 'Fournir des commentaires',
          feedback_message: 'Le portail est géré par l’équipe du Bureau de produit. Joignez-vous à nous pour créer des solutions utiles en',
          feedback_link: 'fournissant vos commentaires',
          description: 'Le portail est un endroit pour accéder à de la documentation technique commune, des bases de connaissances communautaires, des exemples de code et des API.',
          search_placeholder: 'Rechercher dans toutes les ressources du Portail GC',
        },

        docs: {
          section_title: 'Bibliothèque de documentation',
          aurora_label: 'Documentation technique d’Aurora',
          aurora_button: 'Explorer l’initiative Aurora',
          aurora_description: 'Aurora est une plateforme universelle pour l’hébergement moderne d’applications, conçue pour standardiser l’utilisation des services Kubernetes gérés.',
          private_label: 'Documentation technique du nuage privé',
          private_button: 'Explorer le nuage privé',
          private_description:'Apprenez à créer, déployer, maintenir et retirer des applications sur OpenStack.',
          serving_label: 'Au service du gouvernement',
          serving_button: 'Consulter Au service du gouvernement',
          serving_description:'Au service du gouvernement est un extranet qui fournit aux partenaires et clients du GC des renseignements sur Services partagés Canada.',
        },

        event: {
          section_title: 'Événements',
          view_all: 'Voir toute la documentation',
          aurora_label: 'Aurora 101',
          aurora_button: 'Inscrivez-vous à Aurora 101',
          aurora_description: 'Cette formation technique approfondie offre un aperçu complet de la plateforme Aurora.',
          aurora_what: 'Quoi :',
          aurora_where: 'Où :',
          aurora_when: 'Quand :',
          aurora_what_description: 'Le cours Aurora 101',
          aurora_where_description: 'En ligne',
          aurora_when_description: 'Trimestriel',
        },

        tool: {
          github_label: 'GitHub',
          github_button: 'Trouver du code',
          github_description: 'Collaborez sur une plateforme de contrôle de version basée sur le Web qui permet aux développeurs d’héberger, de revoir et de gérer leurs dépôts de code en toute transparence.',
        },

        community: {
          section_title: 'Obtenez du soutien de la communauté des développeurs',
          section_description: "Nous sommes tous ici pour vous aider! Connectez-vous avec d'autres développeurs à travers le GC et posez des questions pour approfondir vos connaissances.",
        }
      },
    },
  },
});

export default i18n;
