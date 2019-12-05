import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AboutComponent } from './components/about/about.component';
import { HeroesComponent } from './components/heroes/heroes.component';
import { HomeComponent } from './components/home/home.component';
import { NavbarComponent } from './components/shared/navbar/navbar.component';
import { HeroeComponent } from './components/heroe/heroe.component';
import { BuscadorComponent } from './components/buscador/buscador.component';



const APP_ROUTES: Routes = [
{path:'about', component: AboutComponent},
{path:'heroes',component: HeroesComponent},
{path:'home',  component: HomeComponent},
{path:'navbar',component: NavbarComponent},
{path:'heroe/:id', component: HeroeComponent},
{path:'buscador/:termino', component: BuscadorComponent},

{path:'**', pathMatch:'full', redirectTo:'home'}

];

@NgModule({
  imports: [RouterModule.forRoot(APP_ROUTES)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
