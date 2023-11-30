import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class MaquinaService {
  compras: any[] = [];

  realizarCompra(nombre: string, producto: string, montoIngresado: number): void {
    let cantidadCompras = 1;

    while (true) {
      let precio = 0;

      switch (producto) {
        case 'A':
          precio = 270;
          break;
        case 'B':
          precio = 340;
          break;
        case 'C':
          precio = 390;
          break;
        default:
          console.log("Producto no válido. Elige nuevamente un producto.");
          return;
      }

      let cambio = montoIngresado - precio;
      const cambioMaquina = [100, 50, 10];
      const cambioDevuelto: number[] = [];

      cambioMaquina.forEach(cambioMaquina => {
        while (cambio >= cambioMaquina) {
          cambioDevuelto.push(cambioMaquina);
          cambio -= cambioMaquina;
        }
      });

      this.compras.push({
        nombre: nombre,
        producto: producto,
        montoIngresado: montoIngresado,
        precio: precio,
        cambio: cambioDevuelto
      });

      console.log(`Compra #${cantidadCompras} finalizada.`);
      cantidadCompras++;

      break;
    }
  }

  obtenerCompras(): any[]{
    return this.compras;
  }
}
