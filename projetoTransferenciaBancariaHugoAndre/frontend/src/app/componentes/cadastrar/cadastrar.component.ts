import { Component, OnInit } from '@angular/core';
import { ContaService, Conta } from './../../servicos/conta.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-cadastrar',
  templateUrl: './cadastrar.component.html',
  styleUrls: ['./cadastrar.component.css']
})
export class CadastrarComponent implements OnInit {

  conta: Conta = {
    id_transferencia: '',
    nomeCliente: '',
    valor: '',
    contaCliente: ''
  }

  constructor(private ContaService: ContaService, private router: Router) { }

  ngOnInit(): void {
  }

  adicionar() {
    delete this.conta.id_transferencia

    // Aqui nós fizemos a inserção de uma nova conta no banco de dados
    this.ContaService.addConta(this.conta).subscribe({
      next: (resultado) => console.log('Conta adicionada com sucesso'),
      error: (erro) => console.error(erro),
      complete: () => console.info('completado o cadastro')
    })
    // voltar para a tabela de contas
    this.router.navigate(['/inicio'])

  }

}
