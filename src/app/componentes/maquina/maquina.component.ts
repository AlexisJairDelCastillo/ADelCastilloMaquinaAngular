import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { MaquinaService } from '../../servicios/maquina.service';

@Component({
  selector: 'app-maquina',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './maquina.component.html',
  styleUrl: './maquina.component.css',
  providers: [MaquinaService]
})
export class MaquinaComponent {
  nombre: string = '';
  producto: string = '';
  montoIngresado: number = 0;
  compras: any[] = [];

  constructor(public maquinaService: MaquinaService) {}

  realizarCompra() {
    this.maquinaService.realizarCompra(this.nombre, this.producto, this.montoIngresado);
    this.mostrarResumen();
  }

  mostrarResumen(){
    console.log('Resumen de Compras:', this.maquinaService.obtenerCompras());
  }
}