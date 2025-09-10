import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { MatPaginatorModule } from '@angular/material/paginator';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-home-page',
  imports: [CommonModule, MatPaginatorModule, RouterLink],
  templateUrl: './home-page.html',
  styleUrl: './home-page.css'
})
export class HomePage {
  customers: string[] = [
    'Mohamed Fahad',
    'John Doe',
    'Sarah Khan',
    'Amit Sharma',
    'Priya Patel'
  ];

}
