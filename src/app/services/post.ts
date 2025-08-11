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
      content: `1. Divide la aplicación en Modelo, Vista y Controlador

2. Modelo: gestiona datos y lógica de negocio
   - Representa los datos de la aplicación
   - Contiene la lógica de negocio
   - Independiente de la interfaz de usuario

3. Vista: presenta la información al usuario
   - Se encarga de la presentación
   - Muestra los datos del modelo
   - Interfaz de usuario

4. Controlador: maneja interacciones y actualiza Modelo/Vista
   - Gestiona la entrada del usuario
   - Actualiza el modelo según las acciones
   - Coordina entre modelo y vista

5. Favorece la modularidad y mantenibilidad del código
   - Separación clara de responsabilidades
   - Código más fácil de mantener y testear
   - Reutilización de componentes`,
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
},{
      id: 4,
      title: 'Principios SOLID',
      excerpt: 'Cinco principios fundamentales del diseño orientado a objetos',
      content: `Los principios SOLID son fundamentales para escribir código limpio y mantenible:

S - Single Responsibility Principle (Principio de Responsabilidad Única)
Una clase debe tener una sola razón para cambiar.

O - Open/Closed Principle (Principio Abierto/Cerrado)
Las entidades de software deben estar abiertas para extensión pero cerradas para modificación.

L - Liskov Substitution Principle (Principio de Sustitución de Liskov)
Los objetos de una superclase deben ser reemplazables por objetos de sus subclases.

I - Interface Segregation Principle (Principio de Segregación de Interfaces)
Los clientes no deben depender de interfaces que no utilizan.

D - Dependency Inversion Principle (Principio de Inversión de Dependencias)
Depender de abstracciones, no de implementaciones concretas.`,
      date: '2025-07-28'
    }
  ];

  getAllPosts(): Post[] {
    return this.posts;
  }

  getPostById(id: number): Post | undefined {
    return this.posts.find(post => post.id === id);
  }
}