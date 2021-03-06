import { Routes, RouterModule } from "@angular/router";
import { NgModule } from "@angular/core";

import { ProgressComponent } from "./progress/progress.component";
import { PagesComponent } from "./pages.component";
import { DashboardComponent } from "./dashboard/dashboard.component";
import { Grafica1Component } from "./grafica1/grafica1.component";
import { AccountSettingsComponent } from "./account-settings/account-settings.component";
import { PromesasComponent } from "./promesas/promesas.component";
import { AuthGuard } from "../guards/auth.guard";

const routes: Routes = [
    
    {
        path: 'dashboard',
        component: PagesComponent,
        canActivate: [AuthGuard],
        children: [
            { path: 'index', component: DashboardComponent },
            { path: 'progress', component: ProgressComponent },
            { path: 'promesas', component: PromesasComponent },
            { path: 'grafica', component: Grafica1Component },
            { path: 'account-settings', component: AccountSettingsComponent }
        ]
    },
]

@NgModule({
    declarations: [],
    imports: [
        RouterModule.forRoot( routes )
    ],
    exports: [ RouterModule ]
})

export class PagesRoutingModule{}