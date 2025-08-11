import { Injectable } from '@angular/core';
import { Post } from '../models/post.model';

@Injectable({
  providedIn: 'root'
})

export class PostService {
  private posts: Post[] = [  // este modo es más rapico para prototipos. a medida que crezca mejor json
  
    {
  id: 1,
  title: 'Arquitectura MVC',
  excerpt: 'Patrón fundamental para separar responsabilidades',
  content: '1. Divide la aplicación en Modelo, Vista y Controlador\n2. Modelo: gestiona datos y lógica de negocio\n3. Vista: presenta la información al usuario\n4. Controlador: maneja interacciones y actualiza Modelo/Vista\n5. Favorece la modularidad y mantenibilidad del código',
  date: '2025-08-01'
},
{
  id: 2,
  title: 'Arquitectura Hexagonal',
  excerpt: 'También conocida como "Puertos y Adaptadores"',
  content: '1. La aplicación core está en el centro, aislada de dependencias externas\n2. Usa "puertos" (interfaces) para definir contratos\n3. Los "adaptadores" conectan con sistemas externos (DB, UI, APIs)\n4. Facilita el testing al poder mockear adaptadores\n5. Ideal para aplicaciones complejas con múltiples integraciones',
  date: '2025-08-10'
},
{
  id: 3,
  title: 'Arquitectura Event Driven',
  excerpt: 'Sistemas basados en eventos y mensajes',
  content: '1. Componentes se comunican mediante eventos/mensajes asíncronos\n2. Productores emiten eventos sin conocer los consumidores\n3. Bajo acoplamiento entre componentes del sistema\n4. Escalabilidad horizontal natural\n5. Patrones comunes: Event Bus, Pub/Sub, CQRS',
  date: '2025-08-20'
}
  ];

  getAllPosts(): Post[] {
    return this.posts;
  }

  getPostById(id: number): Post | undefined {
    return this.posts.find(post => post.id === id);
  }
}
// import postsData from '../../assets/posts.json';  // si quiero cargar los posts desde un JSON en vez de lista en memoria
//export class PostsService {
//  getPosts() {
//    return postsData;
//  }
//}