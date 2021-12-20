import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})



export class ContaService {

  url = 'http://localhost:3000/contas'

  constructor(private http: HttpClient) { }

  getConta(){
    return this.http.get(this.url)
    }

    // get para uma conta
  getUmaConta(id:any){
    return this.http.get(this.url + '/' + id)

  }

  // adicionar uma conta no banco de dados

  addConta(conta:Conta){
      return this.http.post(this.url, conta)
  }

  // Excluir Conta

  deleteConta(id:any){
    return this.http.delete(this.url + '/' + id)

  }

  // modificar uma conta
  editConta(id:any,conta:Conta){
    return this.http.put(this.url + '/' + id , conta)

  }
}


export interface Conta{
  id_transferencia?:string
  nomeCliente?:string
  valor?:string
  contaCliente?:string
  }



