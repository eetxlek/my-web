# Mi Blog Personal - Estibaliz

Un blog personal desarrollado con Angular que presenta información sobre mi perfil profesional y personal.

## 🌐 Demo en vivo

[https://eetxlek.github.io/my-web/](https://eetxlek.github.io/my-web/)

## 🛠️ Tecnologías utilizadas

- **Framework**: Angular (versión 17+)
- **Estilos**: SCSS
- **Deployment**: GitHub Pages
- **Build**: Angular CLI

## 📁 Estructura del proyecto

```
mi-blog-angular/
├── src/
│   ├── app/
│   │   ├── bio/           # Componente de biografía
│   │   ├── home/          # Componente página principal
│   │   └── proyectos/     # Componente de proyectos, en desarrollo
│   │   └── blog/          # Componente blog con contenidos técnicos, y diario de bitácora.
│   ├── styles.scss        # Estilos globales
│   └── main.ts           # Punto de entrada
├── public/               # Assets públicos
├── angular.json          # Configuración Angular
├── package.json          # Dependencias
└── README.md            # Este archivo
```

## 🚀 Instalación y desarrollo local

### Prerequisitos
- Node.js (versión 16 o superior)
- npm o yarn
- Angular CLI

### Pasos para ejecutar localmente

1. **Clonar el repositorio**
   ```bash
   git clone https://github.com/eetxlek/my-web.git
   cd my-web
   ```

2. **Instalar dependencias**
   ```bash
   npm install
   ```

3. **Ejecutar servidor de desarrollo**
   ```bash
   ng serve
   ```

4. **Abrir en el navegador**
   Navega a `http://localhost:4200/`

## 📦 Build para producción

```bash
ng build --configuration production
```

Los archivos compilados se guardarán en el directorio `dist/`.

## 🚀 Deployment a GitHub Pages

Este proyecto está configurado para desplegarse automáticamente en GitHub Pages:

```bash
# Build para producción con base-href
ng build --configuration production --base-href="https://eetxlek.github.io/my-web/"

# Deploy a GitHub Pages
npx angular-cli-ghpages --dir=dist/mi-blog-angular/browser
```

## 📝 Secciones del sitio

- **Home**: Página principal con presentación
- **Bio**: Información personal y profesional
- **[Otras secciones según tu contenido]**

## 🎨 Características

- Diseño responsive
- Estilos personalizados con SCSS
- Optimizado para rendimiento
- Compatible con dispositivos móviles

## 🛠️ Scripts disponibles

- `npm start` - Ejecuta el servidor de desarrollo
- `npm run build` - Build para producción
- `npm run test` - Ejecuta las pruebas unitarias
- `npm run lint` - Ejecuta el linter

## 📄 Licencia

Este proyecto es de uso personal.

## 👤 Autor

**Estibaliz**

- Website: [https://eetxlek.github.io/my-web/](https://eetxlek.github.io/my-web/)
- GitHub: [@eetxlek](https://github.com/eetxlek)

---

⭐ ¡No olvides darle una estrella al repositorio si te gustó el proyecto! using the Angular CLI, including detailed command references, visit the [Angular CLI Overview and Command Reference](https://angular.dev/tools/cli) page.
