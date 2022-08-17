import { Injectable } from '@angular/core';
import { Package } from './models/packages.interface';

@Injectable({
  providedIn: 'root'
})
export class PackageServiceService {

  constructor() { }

  getPackages(){
    return [
      {
        id: 32145,
        name_person: 'Juan Carlos Gomez',
        address: '17 calle 14-21, sector 3 Colonia La Esperanza, Zona 2, Guatemala',
        state: 'Pendiente',
        price: 285,
        phone_number: ['35221455'],
        pilot: 'José Mendez',
        company: 'Arrazola',
        step: 'Tránsito con mensajero',
        message: 'Meter en bolsa de papel'
      },{
        id: 32146,
        name_person: 'María Mercedes Juarez',
        address: '15 calle 2-34 Manzana A, Residencial Los Pinos, Zona 6, Villa Nueva',
        state: 'Pagado',
        price: 510,
        phone_number: ['25669842', '36221542'],
        pilot: 'Juan Perez',
        company: 'Megastore',
        step: 'En bodega',
        message: 'Cuidado objeto frágil'
      },{
        id: 32147,
        name_person: 'Carlos Alberto Quezada',
        address: 'Lote 12, Manzana N Colonia Miralvalle zona 18, Ciudad de Guatemala',
        state: 'Pendiente',
        price: 175,
        phone_number: ['32124599'],
        pilot: 'Pedro García',
        company: 'Arrazola',
        step: 'Tránsito con mensajero',
        message: ''
      }
    ]
    
  }
}
