import { Component, AfterViewInit } from '@angular/core';
import { DataService } from '../../core/data.service';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [
    CommonModule,
    RouterModule  
  ],
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements AfterViewInit {

  constructor(public data: DataService) {}

  ngAfterViewInit() {
    this.setupIntersectionObserver();
  }

 setupIntersectionObserver() {
  const elements = document.querySelectorAll('.fade-left, .fade-right, .fade-up');

  const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {

      if (entry.isIntersecting) {
        entry.target.classList.add('show');

        // 🔥 Si c'est la section impact → lancer compteur
        if (entry.target.classList.contains('impact-content')) {
          this.animateCounters();
        }
      }

    });
  }, { threshold: 0.3 });

  elements.forEach(el => observer.observe(el));
}


  animateCounters() {
    if (!this.data.stats) return;
    this.data.stats.forEach(stat => {
      stat.displayValue = 0;
      let start = 0;
      const end = stat.value;
      const duration = 2000;
      const increment = Math.ceil(end / (duration / 16));

      const counter = setInterval(() => {
        start += increment;
        if (start >= end) {
          stat.displayValue = end;
          clearInterval(counter);
        } else {
          stat.displayValue = start;
        }
      }, 16);
    });
  }

}
