import { Injectable } from '@angular/core';
import { Post } from '../models/post.model';

@Injectable({
  providedIn: 'root'
})

export class PostService {
  private posts: Post[] = [  // este modo es más rapico para prototipos. a medida que crezca mejor json
  {
  "id": 1,
  "title": "Conectar API REST con Vista en Angular",
  "excerpt": "Consumir endpoints desde componentes Angular",
  "content": "1. Se utiliza HttpClient para llamar a APIs desde Angular\n2. Se mapea la respuesta a modelos definidos (ej: Product)\n3. Se renderiza la información en la vista con *ngFor o bindings\n4. Se manejan errores de forma reactiva (por ejemplo, mostrando mensajes al usuario)\n5. El backend (Spring) solo se encarga de exponer el endpoint REST (/api/products)",
  "date": "2025-08-20"
},
{
  "id": 2,
  "title": "Validación de formularios en Angular y Spring",
  "excerpt": "Validar datos en frontend y backend",
  "content": "1. Angular usa ReactiveForms para validar inputs antes de enviarlos\n2. Validaciones comunes: requerido, email, contraseñas coincidentes\n3. Se muestran errores de validación en tiempo real\n4. El backend (Spring) valida nuevamente con anotaciones como @Valid y reglas personalizadas\n5. Se asegura la integridad de los datos incluso si el usuario evita las validaciones frontend",
  "date": "2025-08-20"
},
{
  "id": 3,
  "title": "Despliegue de aplicaciones Angular y Spring",
  "excerpt": "Pasos para publicar una aplicación en producción",
  "content": "1. Angular se compila con 'ng build --prod' y se sube a un servidor estático\n2. Spring Boot se empaqueta como .jar y se despliega en un servidor o contenedor\n3. Se configuran variables de entorno y propiedades específicas de producción\n4. Se gestiona CORS y rutas para que el frontend acceda al backend sin problemas\n5. Se realizan pruebas de integración post-deploy para validar la funcionalidad",
  "date": "2025-08-20"
},

   {
      id: 4,
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
  id: 5,
  title: 'Arquitectura Hexagonal',
  excerpt: 'También conocida como "Puertos y Adaptadores"',
  content: '1. La aplicación core está en el centro, aislada de dependencias externas\n2. Usa "puertos" (interfaces) para definir contratos\n3. Los "adaptadores" conectan con sistemas externos (DB, UI, APIs)\n4. Facilita el testing al poder mockear adaptadores\n5. Ideal para aplicaciones complejas con múltiples integraciones',
  date: '2025-08-10'
},
{
  id: 6,
  title: 'Arquitectura Event Driven',
  excerpt: 'Sistemas basados en eventos y mensajes',
  content: '1. Componentes se comunican mediante eventos/mensajes asíncronos\n2. Productores emiten eventos sin conocer los consumidores\n3. Bajo acoplamiento entre componentes del sistema\n4. Escalabilidad horizontal natural\n5. Patrones comunes: Event Bus, Pub/Sub, CQRS',
  date: '2025-08-20'
},{
      id: 7,
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