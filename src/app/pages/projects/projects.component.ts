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
          date: "Décembre 2022",
          activities: [
            "Distribution cadeaux",
            "Dons kits médicaux",
            "Produits d’entretien",
            "Draps"
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
            "assets/projects/kodje1.jpg",
            "assets/projects/kodje2.jpg",
            "assets/projects/kodje3.jpg"
          ],
          currentImage: 0
        
        },
        {
          title: "Un Sourire de Noël – Acte 3",
          location: "CHU Cocody",
          date: "23 Décembre 2023",
          activities: [
            "Cadeaux enfants hospitalisés",
            "Dons médicaux",
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
          title: "Journée Santé Yaou",
          location: "BONOUA",
          date: "28 Décembre 2024",
          activities: [
            "150 adultes dépistés",
            "200 enfants déparasités",
            "100 cadeaux"
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
      year: 2025,
      items: [
        {
          title: "Mission Humanitaire à Kôdjèbouman",
          location: "Août 2025",
          date: "15-16 Août 2025",
          activities: [
            "503 enfants traités",
            "304 dépistages",
            "Consultations médicales",
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
          title: "Mission Humanitaire à Niouldé",
          location: "Décembre 2025",
          date: "20 Décembre 2025",
          activities: [
            "45 femmes dépistées cancer col",
            "300 dépistages diabète",
            "1000+ vêtements distribués",
            "300+ chaussures"
          ],
          images: [
            "assets/projects/kodje1.jpg",
            "assets/projects/kodje2.jpg",
            "assets/projects/kodje3.jpg"
          ],
          currentImage: 0
        
        }
      ]
    }
  ];

}
