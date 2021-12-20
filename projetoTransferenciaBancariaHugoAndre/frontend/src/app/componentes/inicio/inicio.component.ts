import { Component, OnInit } from '@angular/core';

import { ContaService, Conta } from '../../servicos/conta.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-inicio',
  templateUrl: './inicio.component.html',
  styleUrls: ['./inicio.component.css']
})
export class InicioComponent implements OnInit {

  // Variável declarada do tipo Conta
  ListarContas: Conta[]

  // dentro do construtor nós declaramos a variável ContaService com o tipo ContaService
  constructor(private ContaService: ContaService, private router: Router) {

    this.ListarContas = []
  }


  // Ao iniciar esse componente deve-se executar a função listarContas
  ngOnInit(): void {
    this.listarContas()
  }

  // Aqui é uma função que realiza a listagem das contas que estão cadastradas no banco

  listarContas() {
    this.ContaService.getConta().subscribe(
      {
        next: (resultado) => {
          console.log(resultado)
          this.ListarContas = <any>resultado
        },
        error: (erro) => console.error(erro),
        complete: () => console.info('complete')
      })
  }

  //função para excluir uma contas pelo seu id
  excluir(id: any) {
    this.ContaService.deleteConta(id).subscribe({
      next: (resultado) => {
        console.log("Conta excluída")
        this.listarContas()
      },
      error: (erro) => console.error(erro),
      complete: () => console.info('Processo de exclusão completado')


    })

  }

  editar(id: any) {
    this.router.navigate(['/edit/' + id])
  }

}
