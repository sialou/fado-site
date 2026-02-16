import { Component, Input } from '@angular/core';
@Component({selector:'app-testimonial',standalone:true,template:`<figure class="t"><blockquote>“{{text}}”</blockquote><figcaption>— {{name}}, <small>{{role}}</small></figcaption></figure>`,styles:[`.t{background:white;padding:1rem;border-radius:.75rem;border:1px solid #e5e7eb}`]})
export class TestimonialComponent{ @Input() text=''; @Input() name=''; @Input() role=''; }
