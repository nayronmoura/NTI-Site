import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class funcionarioService {

  constructor() { }

  getFuncionarios(){
    return [
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
