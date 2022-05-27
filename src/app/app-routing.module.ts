import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { AboutComponent } from "./pages/about/about.component";
import { ItemComponent } from "./pages/item/item.component";
import { PortafolioComponent } from "./pages/portafolio/portafolio.component";

const app_routes : Routes = [
  {path: 'home', component: PortafolioComponent},
  {path: 'about', component: AboutComponent},
  {path: 'item', component: ItemComponent},
  {path: '**', pathMatch:'full' ,redirectTo: 'home' }

];

@NgModule({
  imports:[RouterModule.forRoot(app_routes, {useHash: true})], //funciones hash son estructuras de datos de uso común en los sistemas informáticos para tareas, como verificar la integridad de los mensajes y autenticar la información.
  exports: [RouterModule]

})
export class AppRoutingModule{

}
