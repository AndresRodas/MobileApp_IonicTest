import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor() { }

  getUser(){
    return {
      id: '290361397-0101',
      first_name: 'Juan Carlos',
      second_name: 'Pérez López',
      address: '17 calle 14-21 sector 2, colonia San José Las Rosas, Zona 6 de Mixco, Guatemala',
      status: 'Ocupado',
      rol: 'Administrador',
      phone_number: '5532-1525',
      photo: 'https://placeimg.com/192/192/people'
    }
  }
}
