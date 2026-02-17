import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-projects',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.css']
})
export class ProjectsPageComponent {

  activeProject: any = null;

  toggle(project: any) {
    this.activeProject = this.activeProject === project ? null : project;
  }

   nextImage(project: any) {
    project.currentImage =
      (project.currentImage + 1) % project.images.length;
  }

    prevImage(project: any) {
    project.currentImage =
      (project.currentImage - 1 + project.images.length) % project.images.length;
  }

  projects = [
    {
      year: 2021,
      items: [
        {
          title: "Un Sourire de Noël – Acte 1",
          location: "EPC Bethlehem de Koumassi",
          date: "15 Décembre 2021",
          activities: [
            "Distribution de cadeaux aux enfants",
            "Moment festif avec le père Noël"
          ],
          images: [
            "assets/projects/kodje1.jpg",
            "assets/projects/kodje2.jpg",
            "assets/projects/kodje3.jpg"
          ],
          currentImage: 0
        },
        
      ]
    },

    {
      year: 2022,
      items: [
        {
          title: "Journée de Santé Communautaire à Yaou",
          location: "BONOUA",
          date: "13-14 Août 2022",
          activities: [
            "Dépistage diabète et hypertension",
            "Distribution déparasitant",
            "Distribution vêtements"
          ],
          images: [
            "assets/projects/kodje1.jpg",
            "assets/projects/kodje2.jpg",
            "assets/projects/kodje3.jpg"
          ],
          currentImage: 0
      
        },
        {
          title: "Un Sourire de Noël – Acte 2",
          location: "CHU Treichville & Cocody",
          date: "10 Décembre 2022",
          activities: [
            "Distribution cadeaux",
            "Dons kits médicaux",
            "Produits d’entretien",
            "Don de draps"
          ],
          images: [
            "assets/projects/kodje1.jpg",
            "assets/projects/kodje2.jpg",
            "assets/projects/kodje3.jpg"
          ],
          currentImage: 0
        },
        {
          title: "Un Sourire de Noël – Acte 2",
          location: "service Chirurgie Pédiatrique du CHU de Cocody",
          date: "17 Décembre 2022",
          activities: [
            "Distribution cadeaux",
            "Dons kits médicaux",
            "Produits d’entretien",
            "Don de draps"
          ],
          images: [
            "assets/projects/kodje1.jpg",
            "assets/projects/kodje2.jpg",
            "assets/projects/kodje3.jpg"
          ],
          currentImage: 0
        },
        
      ]
    },

    {
      year: 2023,
      items: [
        {
          title: "Distribution de kits scolaires",
          location: "Gabriel Dadié Koumassi",
          date: "20 Octobre 2023",
          activities: [
            "100 kits scolaires",
            "150 sacs distribués"
          ],
          images: [
            "assets/gabriel1.jpg",
            "assets/gabriel2.jpg",
            "assets/gabriel3.jpg"
          ],
          currentImage: 0
        
        },
        {
          title: "Un Sourire de Noël – Acte 3",
          location: "service des Grands Brulés du CHU Cocody",
          date: "23 Décembre 2023",
          activities: [
            "Cadeaux enfants hospitalisés",
            "Dons médicaux",
            "Don de produits d’entretien",
            "Denrées alimentaires"
          ],
          images: [
            "assets/projects/kodje1.jpg",
            "assets/projects/kodje2.jpg",
            "assets/projects/kodje3.jpg"
          ],
          currentImage: 0
        
        }
      ]
    },

    {
      year: 2024,
      items: [
        {
          title: "Conférence éducative",
          location: "Le Bon Samaritain",
          date: "11 Mai 2024",
          activities: [
            "Sensibilisation 150 jeunes filles",
            "Autonomie & sécurité"
          ],
          images: [
            "assets/projects/kodje1.jpg",
            "assets/projects/kodje2.jpg",
            "assets/projects/kodje3.jpg"
          ],
          currentImage: 0
        
        },
        
        {
          title: "Un Sourire de Noël – Acte 4",
          location: "CHU de Treichville, service d’Oncologie Pédiatrique",
          date: "19 Décembre 2024",
          activities: [
            "Cadeaux enfants hospitalisés",
            "Dons médicaux",
            "Don de produits d’entretien",
            "Denrées alimentaires"
          ],
          images: [
            "assets/projects/kodje1.jpg",
            "assets/projects/kodje2.jpg",
            "assets/projects/kodje3.jpg"
          ],
          currentImage: 0
        
        },
        {
          title: "Journée Santé Yaou",
          location: "BONOUA",
          date: "28 Décembre 2024",
          activities: [
            "150 adultes dépistés",
            "200 enfants déparasités",
            "100 cadeaux"
          ],
          images: [
            "assets/yaou1.jpg",
            "assets/yaou2.jpg",
            "assets/yaou3.jpg"
          ],
          currentImage: 0
        
        }
      ]
    },

    {
      year: 2025,
      items: [
        {
          title: "Journée de Santé Communautaire à Guédikpo",
          location: "Sassandra",
          date: "19 Avril 2025",
          activities: [
            "Distribution de déparasitant pour 200 enfants.",
            "Dépistage du diabète et de l’hypertension artériellepour 150 adultes",
            "Distribution de 300 kits de vêtements aux bénéficiaires."
          ],
          images: [
            "assets/projects/kodje1.jpg",
            "assets/projects/kodje2.jpg",
            "assets/projects/kodje3.jpg"
          ],
          currentImage: 0
        
        },
        {
          title: "Visite à la pouponnière",
          location: "Adiaké",
          date: "21 Avril 2025",
          activities: [
            "Entretien avec la directrice de la pouponnière .",
            "Visite des enfants au nombre de 54 enfants 19 filles et 35 garçons âgés de 0 à 4 ans, 2 de 8 ans et 2 handicapés de 18 ans et 32 ans.",
            "Don de vêtements",
            "Don de couches jetables",
            "Denrées alimentaires"
          ],
          images: [
            "assets/adiake1.jpg",
            "assets/adiake2.jpg",
            "assets/adiake3.jpg"
          ],
          currentImage: 0
        
        },
        {
          title: "Mission Humanitaire à Kôdjèbouman",
          location: "Kôdjèbouman",
          date: "15-16 Août 2025",
          activities: [
            "503 enfants traités",
            "304 dépistages",
            "Consultations médicales",
            "Distribution vêtements(105 habits pour hommes 85 habits pour femmes 479 habits pour enfants)"
          ],
          images: [
            "assets/kodje1.jpg",
            "assets/kodje2.jpg",
            "assets/kodje3.jpg"
          ],
          currentImage: 0
        
        },
        {
          title: "VISITE HUMANITAIRE AU SERVICE D’ONCOLOGIE PÉDIATRIQUE DU CHU DE TREICHVILLE",
          location: "CHU DE TREICHVILLE",
          date: "17 décembre 2025 ",
          activities: [
            "Médicaments d’une valeur de 200 000 FCFA 2 sacs de riz de 25 kilogrammes chacun",
            "1 pack d’huile",
            "Cadeaux de Noël (jouets) d’une valeur estimée à 60 000 FCFA, distribués aux enfants hospitalisés",
           
          ],
          images: [
            "assets/chu1.jpg",
            "assets/chu3.jpg",
            "assets/chu2.jpg"
          ],
          currentImage: 0
        
        },
        {
          title: "Mission Humanitaire à Niouldé",
          location: "Niouldé",
          date: "20 Décembre 2025",
          activities: [
            "45 femmes dépistées cancer col",
            "300 dépistages diabète",
            "1000+ vêtements distribués",
            "300+ chaussures",
            "300 déparasitants distribués",
            "50 cadeaux et jouets distribués aux enfants"
          ],
          images: [
            "assets/nioulde2.jpeg",
            "assets/nioulde1.jpeg",
            "assets/nioulde3.jpg",
            "assets/nioulde4.jpg",
            "assets/nioulde5.jpg"
          ],
          currentImage: 0
        
        }
      ]
    }
  ];

}
