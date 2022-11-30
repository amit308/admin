import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DeliverySettingsComponent } from './delivery-settings.component';

const routes: Routes = [
  {
    path: '',
    component: DeliverySettingsComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DeliverySettingsRoutingModule { }
