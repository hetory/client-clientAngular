import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CreateClientComponent } from './create-client/create-client.component';

const routes: Routes = [
	 {
	    path: 'create-client',
	    component: CreateClientComponent,
	    data: { title: 'Create Client' }
	  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
