import { Injectable } from '@angular/core';
import { Project } from '../models/project.model';
import { Testimonial } from '../models/testimonial.model';

export interface Stat {
  label: string;
  value: number;        // Doit être un nombre pour les compteurs
  displayValue: number; // Toujours défini pour l'animation
}

export interface NewsItem {
  slug: string;
  title: string;
  date: string;
  excerpt: string;
  image?: string;
}

@Injectable({ providedIn: 'root' })
export class DataService {
  site = {
    name: 'FADO',
    tagline: 'Fondation d\'Aide et de Développement',
    hero: {
      title: 'Agir ensemble pour des communautés résilientes.',
      subtitle: 'FADO conçoit et met en œuvre des programmes d’éducation, santé et entrepreneuriat local.',
      ctas: [
        { label: 'Nos projets', link: '/projets' },
        { label: 'Soutenir', link: '/soutenir' }
      ],
      image: 'assets/images/hero.jpg'
    }
  };

  stats: Stat[] = [
    { label: 'Bénéficiaires atteints', value: 2356, displayValue: 0 },
    { label: 'Projets réalisés', value: 14, displayValue: 0 },
    { label: 'Volontaires', value: 50, displayValue: 0 },
    { label: 'Villes couvertes', value: 7, displayValue: 0 }
  ];

  projects: Project[] = [
    {
      slug: 'education-pour-tous',
      title: 'Éducation pour tous',
      cover: 'assets/images/proj-edu.jpg',
      objective: 'Renforcer l’accès à l’éducation primaire.',
      location: 'Abidjan et régions',
      partners: ['Ministère de l\'Éducation'],
      results: ['3000 enfants scolarisés','120 enseignants formés']
    },
    {
      slug: 'sante-maternelle',
      title: 'Santé maternelle',
      cover: 'assets/images/proj-sante.jpg',
      objective: 'Améliorer l\'accès aux soins prénataux.',
      location: 'Zones rurales',
      partners: ['Centre de santé local'],
      results: ['50 centres équipés','Hausse des consultations prénatales']
    }
  ];

  testimonials: Testimonial[] = [
    { name: 'Aïssata', role: 'Mère bénéficiaire', text: 'Les séances ont sauvé des vies.' },
    { name: 'Jean K.', role: 'Enseignant', text: 'Les ressources pédagogiques ont transformé mes cours.' }
  ];

  news: NewsItem[] = [
    { slug: 'lancement-2025', title: 'Lancement du programme 2025', date: '2025-06-20', excerpt: 'FADO lance une nouvelle phase pour l\'éducation.', image: 'assets/images/news1.jpg' }
  ];

  partners = [
    { name: 'Ministère de la santé de l’hygiène publique et de la couverture maladie universelle', logo: 'assets/partner-minedu.jpeg', url: '#' },
    { name: 'PNLCa', logo: 'assets/partner-pnlca.jpg', url: '#' },
    { name: 'SUN PHARMA', logo: 'assets/PHARMA.png', url: '#' },
    { name: 'BDA PHARMA', logo: 'assets/BDA.png', url: '#' },
    { name: 'Biolab SA', logo: 'assets/iolab.jpg', url: '#' }
  ];

  getProjectBySlug(slug: string) {
    return this.projects.find(p => p.slug === slug);
  }
}
