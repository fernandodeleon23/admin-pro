import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

// Rutas
import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
import { NotFoundComponent } from './not-found/not-found.component';

// Modulos
import { PagesModule } from './pages/pages.module';
import { PartsModule } from './parts/parts.module';
import { AuthModule } from './auth/auth.module';

@NgModule({
  declarations: [
    AppComponent,
    NotFoundComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    PagesModule,
    PartsModule,
    AuthModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
