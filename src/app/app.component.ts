import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { MaquinaComponent } from './componentes/maquina/maquina.component';
import { MaquinaService } from './servicios/maquina.service';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterOutlet, MaquinaComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
  providers: [MaquinaService]
})
export class AppComponent {
  title = 'ADelCastilloExamenBBVA';
}
