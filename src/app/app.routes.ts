import { Routes } from '@angular/router';
import { Bio } from './bio/bio';
import { Home } from './home/home';
import { Proyectos } from './proyectos/proyectos';
import { BlogComponent } from './blog/blog';
import { PostComponent } from './post/post';
import { NotFoundComponent } from './not-found/not-found';

export const routes: Routes = [
  { 
    path: '', 
    component: Home,
    title: 'Inicio' 
  },
   { 
    path: 'bio', 
    component: Bio,
    title: 'Biografía' 
  },
  { 
    path: 'proyectos', 
    component: Proyectos,
    title: 'Proyectos' 
  },
  { 
    path: 'blog', 
    component: BlogComponent,
    title: 'Blog' 
  },
  { 
    path: 'blog/:id', 
    component: PostComponent,
    title: 'Post' 
  },
  { 
    path: '404', 
    component: NotFoundComponent,
    title: 'No encontrado' 
  },
  { 
    path: '**', 
    redirectTo: '/404' 
  }
];