import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-funcionarios',
  templateUrl: './funcionarios.component.html',
  styleUrls: ['./funcionarios.component.css']
})
export class FuncionariosComponent {
  //bootstrap: https://getbootstrap.com/docs/5.1/layout/breakpoints/
  //deixar o site responsivo com o bootstrap.
  //melhorar o design dos funcionários e jogar os nomes para dentro da div principal
  //mudar as fontes
  //melhorar as animações das imagens e melhorar o gif
  //melhorar o alinhamento do as informações
  //adicionar os links das imagens dos serviçoes desenvolvidos
  //
  URLimages;
  constructor(){
    this.URLimages=[
      ['http://ntist.com.br/static/controle_site/images/Junior.png', 'Junior',"adds"],
      ['http://ntist.com.br/static/controle_site/images/Douglas.png', 'Douglas',"adds"],
      ['http://ntist.com.br/static/controle_site/images/JV.png','João Victor',"adds"],
      ['http://ntist.com.br/static/controle_site/images/Bruno.png','Bruno',"adds"],
      ['http://ntist.com.br/static/controle_site/images/Lucas.png','Lucas',"adds"],
      ['http://ntist.com.br/static/controle_site/images/Carlos.png','Carlos',"adds"],
      ['http://ntist.com.br/static/controle_site/images/marcilio.png','Marcilio',"adds"]
    ]
  }
}
