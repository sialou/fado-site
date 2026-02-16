export interface Project {
  id?: number;              // optionnel si tu ne l'utilises pas vraiment
  slug: string;             // identifiant unique (pour les routes)
  title: string;            // nom du projet
  location: string;         // zone géographique
  body?: string;            // description longue (optionnelle)
  cover?: string;           // image principale
  objective?: string;       // objectif
  partners?: string[];      // partenaires
  results?: string[];       // résultats
}
