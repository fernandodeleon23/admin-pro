import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { NotFoundComponent } from './not-found/not-found.component';
import { PagesRoutingModule } from './pages/pages.routing';
import { AuthRoutingModule } from './auth/auth.routing';

const routes: Routes = [

    // path: /dashbord PagesRouting
    // path: /auth AuthRouting

    { path: '', redirectTo: '/dashboard', pathMatch: 'full' },
    { path: '**', component: NotFoundComponent },
]

@NgModule({
    declarations: [],
    imports: [
        RouterModule.forRoot( routes ),
        PagesRoutingModule,
        AuthRoutingModule
    ],
    exports: [ RouterModule ]
})

export class AppRoutingModule{}