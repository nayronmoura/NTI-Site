import { Component, OnInit } from '@angular/core';
import { funcionarioService } from './servico.service';

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
  funcionario: string[][];

  constructor(public funcionarioService:funcionarioService){
    this.funcionario = this.funcionarioService.getFuncionarios();

  }
}
