import {Routes,RouterModule} from '@angular/router';
import { HomeComponent } from './app.homeComponent';
import { AboutComponent } from './app.aboutComponent';
import { UserDetails } from './userDetails';
import { EditComponent } from './editComponent';
import { AddComponent } from './addComponent';
const route:Routes =[
{ path: '', component: HomeComponent },
{path:'user/:name/:id' ,component: UserDetails},
{ path: 'about', component: AboutComponent,
	children: [
		{ path: 'add', component: AddComponent },
		{ path: 'about/edit/:id', component: EditComponent }
		
	]
 },	
{ path: '**', component: HomeComponent },
]

export const routing= RouterModule.forRoot(route);