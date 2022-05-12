import { funcionarioService } from './funcionarios/servico.service';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { LayoutModule } from '@angular/cdk/layout';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatIconModule } from '@angular/material/icon';
import { MatListModule } from '@angular/material/list';
import { FuncionariosComponent } from './funcionarios/funcionarios.component';
import { NavComponent } from './nav/nav.component';
import { TituloComponent } from './titulo/titulo.component';
import { InformacaoComponent } from './informacao/informacao.component';
import { FooterComponent } from './footer/footer.component';
import { SistemasComponent } from './sistemas/sistemas.component';

@NgModule({
  declarations: [
    AppComponent,
    FuncionariosComponent,
    NavComponent,
    TituloComponent,
    InformacaoComponent,
    FooterComponent,
    SistemasComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    LayoutModule,
    MatToolbarModule,
    MatButtonModule,
    MatSidenavModule,
    MatIconModule,
    MatListModule
  ],
  providers: [
    funcionarioService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
