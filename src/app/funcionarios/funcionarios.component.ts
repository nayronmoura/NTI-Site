import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-funcionarios',
  templateUrl: './funcionarios.component.html',
  styleUrls: ['./funcionarios.component.css']
})
export class FuncionariosComponent {
  URLimages;
  constructor(){
    this.URLimages=[
      ['http://ntist.com.br/static/controle_site/images/Junior.png', 'Junior'],
      ['http://ntist.com.br/static/controle_site/images/Douglas.png', 'Douglas'],
      ['http://ntist.com.br/static/controle_site/images/JV.png','João Victor'],
      ['http://ntist.com.br/static/controle_site/images/Bruno.png','Bruno'],
      ['http://ntist.com.br/static/controle_site/images/Lucas.png','Lucas'],
      ['http://ntist.com.br/static/controle_site/images/Carlos.png','Carlos'],
      ['http://ntist.com.br/static/controle_site/images/marcilio.png','Marcilio']
    ]
  }
}
