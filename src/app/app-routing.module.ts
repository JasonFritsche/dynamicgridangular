import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CardContainerComponent } from './components/sidenav/card-container/card-container.component';
import { SettingsComponent } from './components/sidenav/settings/settings.component';

const routes: Routes = [
  { path: 'Cards', component: CardContainerComponent },
  { path: 'Settings', component: SettingsComponent },
  { path: '', redirectTo: '/Cards', pathMatch: 'full' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
