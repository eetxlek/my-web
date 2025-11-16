import { Injectable } from '@angular/core';
import { Post } from '../models/post.model';

@Injectable({
  providedIn: 'root'
})

export class PostService {
  private posts: Post[] = [  // este modo es más rapico para prototipos. a medida que crezca mejor json
    {
      id: 1,
  title: "Inmersión en Mainframe: COBOL, DB2 y JCL en sistemas críticos",
  excerpt: "Experiencia formativa en entornos mainframe con COBOL, DB2 y JCL para el desarrollo de sistemas informáticos críticos.",
  content: "Recientemente he completado una formación intensiva en entornos mainframe, una tecnología que sigue siendo fundamental en sistemas críticos de grandes organizaciones. La experiencia ha sido una inmersión completa en el ecosistema mainframe con Orizon y la Universidad de Alicante.\n\n🏛️ **Contexto del curso**:\nFormación especializada en sistemas mainframe, enfocada en el desarrollo y mantenimiento de aplicaciones empresariales críticas que requieren máxima fiabilidad y rendimiento.\n\n💻 **Programación COBOL**:\n- Gestión avanzada de ficheros: secuenciales, indexados y GDG (Generation Data Groups)\n- Manipulación de tablas en Working-Storage con diferentes estrategias de indexación\n- Implementación de rutinas complejas, generación de informes y cruce de ficheros\n- Técnicas específicas de debugging y optimización de código COBOL\n\n⚙️ **JCL y Utilidades del Sistema**:\n- Control de ejecución con JCL (Job Control Language) para orquestar workflows\n- Manejo de IDCAMS para la gestión de VSAM (Virtual Storage Access Method)\n- Procesamiento avanzado con SORT y JOINKEYS para operaciones masivas de datos\n- Utilidades del sistema: IEBGENER, IEBPTPCH, IEFBR14\n\n🗄️ **Base de Datos DB2**:\n- SQL embebido en COBOL con implementación de cursores para acceso a datos\n- Consultas avanzadas: JOIN complejos, UNION, SUBSELECT y gestión de VISTAS\n- Control exhaustivo de valores nulos y técnicas de reposicionamiento\n- Análisis de rendimiento con EXPLAIN para optimización de consultas\n\n🔧 **Herramientas del Entorno Z/OS**:\n- ISPF para la gestión completa de librerías y miembros\n- SPUFI y QMF para la ejecución y análisis de consultas SQL\n- SDSF para la monitorización en tiempo real de jobs del sistema\n- FILE MANAGER para la administración y manipulación de datos\n\n📊 **Reflexiones**:\nEsta formación me ha permitido comprender la robustez y fiabilidad que ofrecen los entornos mainframe para sistemas que requieren procesamiento masivo de datos con tolerancia cero a fallos. La integración entre COBOL, JCL y DB2 crea un ecosistema extremadamente estable y eficiente.\n\nAunque son tecnologías consideradas 'legacy' por algunos, su importancia en sectores como banca, seguros y administración pública sigue siendo crucial. La curva de aprendizaje es significativa, pero el entendimiento de estos sistemas proporciona una perspectiva única sobre el desarrollo de software empresarial de alta criticidad.\n\n¿Has trabajado con entornos mainframe? ¿Qué opinas sobre la evolución de estas tecnologías en la era cloud?",
  date: "2025-11-15"
},{
  id: 2,
  title: "Buenas prácticas para optimizar imágenes Docker en entornos CI/CD",
  excerpt: "Cómo mejorar la eficiencia de tus pipelines aplicando buenas prácticas en la construcción de imágenes Docker.",
  content: "A veces podemos pasar por alto detalles en la construcción de la imagen, y optimizar esta parte tiene un impacto directo en la eficiencia de todo el proceso de despliegue y en el rendimiento.\n\nLeyendo sobre automatización y CI/CD, me he quedado con estas cuestiones que me han parecido interesantes. Hoy he estado profundizando en cómo mejorar nuestras imágenes Docker para que los pipelines de integración y entrega continua sean más rápidos, seguros y sostenibles.\n\nComparto algunas ideas clave:\n\n1. ¿Estamos usando imágenes base lo suficientemente livianas?  \nImágenes como `alpine` o `distroless` reducen el tamaño final y el tiempo de descarga.\n\n2. ¿Aprovechamos los multi-stage builds?  \nSeparar compilación y ejecución permite generar imágenes más limpias y seguras.\n\n3. ¿Estamos sacando provecho del cache de Docker?  \nUn buen orden en el Dockerfile puede reducir mucho el tiempo de build en cada commit.\n\n4. ¿Dónde estamos gestionando los secretos?  \nNunca deberían ir en la imagen. Es mejor usar variables de entorno o un gestor de secretos externo.\n\n5. ¿Tenemos escaneo de vulnerabilidades en nuestro pipeline?  \nHerramientas como Trivy o Snyk pueden ayudarnos a anticipar problemas antes de pasar a producción.\n\nOptimizar esta parte del proceso puede parecer menor, pero su impacto es real tanto en eficiencia como en calidad.\n\n¿Has aplicado alguna de estas prácticas? ¿Qué te ha funcionado mejor?",
  date: "2025-08-27"},
    {
  id: 3,
  title: "Configurando RabbitMQ con Spring Boot en una arquitectura Event-Driven 🐇☕",
  excerpt: "Integración de RabbitMQ en Spring Boot para sistemas desacoplados mediante eventos.",
  content: "Hoy he trabajado en una configuración sencilla para integrar RabbitMQ en una aplicación Spring Boot basada en una arquitectura Event-Driven. Esta arquitectura se utiliza para sistemas distribuidos, donde los servicios se comunican a través de eventos de manera desacoplada.\n\n🎯 **Objetivo**:\nSeparar la lógica de procesamiento de tickets y las notificaciones usando colas de mensajes asincrónicas, y aprovechar el enrutamiento de mensajes a través de *bindings* en RabbitMQ.\n\n✅ **¿Qué configuramos?**\n- 2 colas: `ticket.processing.queue` y `notification.result.queue`.\n- 2 exchanges directos: `ticket.exchange` y `notification.exchange`.\n- 2 routing keys específicas para asegurar el enrutamiento correcto de los mensajes.\n\n📘 **Conceptos clave**:\n- **Queue (cola)**: Almacena los mensajes hasta que un consumidor los procesa.\n- **Exchange**: Recibe mensajes y los enruta a las colas según las reglas definidas.\n- **Routing key**: Clave que determina a qué cola debe ir un mensaje.\n\n🔑 **¿Cómo funciona el Binding?**\nEs una conexión entre un *exchange* y una *queue*. Utilizamos el binding para asociar una cola con un exchange y usar una routing key para enrutar los mensajes correctamente. En una arquitectura Event-Driven, esto permite que los servicios estén completamente desacoplados, escalables y fácilmente extensibles.\n\n📊 **Ejemplo del flujo completo**:\n1. Una aplicación publica un mensaje en el `ticket.exchange` con la routing key `ticket.processing`.\n2. Como hay una vinculación con esa clave, el mensaje es dirigido a la cola `ticket.processing.queue`.\n3. Un consumidor suscrito toma el mensaje desde esa cola y lo procesa.\n\nCon esta estructura, los servicios pueden comunicarse de forma desacoplada y escalable. Simplemente publican mensajes al exchange correspondiente, y RabbitMQ se encarga del resto 💬➡️📬\n\n📌 **Ventajas**:\n- Desacoplamiento entre servicios.\n- Escalabilidad y resiliencia en sistemas distribuidos.\n- Filtrado de eventos, donde cada servicio recibe solo los eventos que le corresponden.\n\nUna herramienta interesante que facilita la comunicación asíncrona y el desacoplamiento entre servicios, asegurando que los sistemas puedan escalar y mantenerse resilientes sin generar dependencias.",
  date: "2025-08-14"
},
  {
  id: 4,
  title: "Conectar API REST con Vista en Angular",
  excerpt: "Consumir endpoints desde componentes Angular",
  content: "1. Se utiliza HttpClient para llamar a APIs desde Angular\n2. Se mapea la respuesta a modelos definidos (ej: Product)\n3. Se renderiza la información en la vista con *ngFor o bindings\n4. Se manejan errores de forma reactiva (por ejemplo, mostrando mensajes al usuario)\n5. El backend (Spring) solo se encarga de exponer el endpoint REST (/api/products)",
  date: "2025-08-20"
},
{
  id: 5,
  title: "Validación de formularios en Angular y Spring",
  excerpt: "Validar datos en frontend y backend",
  content: "1. Angular usa ReactiveForms para validar inputs antes de enviarlos\n2. Validaciones comunes: requerido, email, contraseñas coincidentes\n3. Se muestran errores de validación en tiempo real\n4. El backend (Spring) valida nuevamente con anotaciones como @Valid y reglas personalizadas\n5. Se asegura la integridad de los datos incluso si el usuario evita las validaciones frontend",
  date: "2025-08-20"
},
{
  id: 6,
  title: "Despliegue de aplicaciones Angular y Spring",
  excerpt: "Pasos para publicar una aplicación en producción",
  content: "1. Angular se compila con 'ng build --prod' y se sube a un servidor estático\n2. Spring Boot se empaqueta como .jar y se despliega en un servidor o contenedor\n3. Se configuran variables de entorno y propiedades específicas de producción\n4. Se gestiona CORS y rutas para que el frontend acceda al backend sin problemas\n5. Se realizan pruebas de integración post-deploy para validar la funcionalidad",
  date: "2025-08-20"
},

   {
      id: 7,
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
  id: 8,
  title: 'Arquitectura Hexagonal',
  excerpt: 'También conocida como "Puertos y Adaptadores"',
  content: '1. La aplicación core está en el centro, aislada de dependencias externas\n2. Usa "puertos" (interfaces) para definir contratos\n3. Los "adaptadores" conectan con sistemas externos (DB, UI, APIs)\n4. Facilita el testing al poder mockear adaptadores\n5. Ideal para aplicaciones complejas con múltiples integraciones',
  date: '2025-08-10'
},
{
  id: 9,
  title: 'Arquitectura Event Driven',
  excerpt: 'Sistemas basados en eventos y mensajes',
  content: '1. Componentes se comunican mediante eventos/mensajes asíncronos\n2. Productores emiten eventos sin conocer los consumidores\n3. Bajo acoplamiento entre componentes del sistema\n4. Escalabilidad horizontal natural\n5. Patrones comunes: Event Bus, Pub/Sub, CQRS',
  date: '2025-08-20'
},{
      id: 10,
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

