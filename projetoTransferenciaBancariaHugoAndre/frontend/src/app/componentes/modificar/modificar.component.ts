import { Conta, ContaService } from './../../servicos/conta.service';
import { Component, OnInit } from '@angular/core';
// Importando a biblioteca de rotas do angular , inclusive o pacote que permite pegarmos a rota ativa no momento ( ActivatedRoute)
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-modificar',
  templateUrl: './modificar.component.html',
  styleUrls: ['./modificar.component.css']
})
export class ModificarComponent implements OnInit {

  conta: Conta = {
    id_transferencia: '',
    nomeCliente: '',
    valor: '',
    contaCliente: ''

  }

  constructor(private ContaService: ContaService,
    private router: Router,
    private activateRoute: ActivatedRoute) { }

  ngOnInit(): void {
    const id_entrada = <any>this.activateRoute.snapshot.params['id']
    console.log("id de entrada:" + id_entrada)
    this.ContaService.getUmaConta(id_entrada).subscribe({
      next: (resultado) => {
        console.log(resultado)
        this.conta = resultado
      },
      error: (erro) => console.error(erro),
      complete: () => console.info("Conta encontrada!")


    })

  }

  modificar() {
    // chamamos a função editConta que está no ContaService e passamos os parâmetros id_conta e o objeto que contém os dados das contas
    this.ContaService.editConta(this.conta.id_transferencia, this.conta).subscribe({
      next: (resultado) => console.log("Conta editada com sucesso"),
      error: (erro) => console.error(erro),
      complete: () => console.info("Edição completada com êxito")


    })
    // Voltamos para a rota do nosso componente inicio
    this.router.navigate(['/inicio'])

  }

}
