import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-first-component',
  templateUrl: './first-component.component.html',
  styleUrls: ['./first-component.component.scss'],
})
export class FirstComponentComponent implements OnInit {
  title = "Realize sua operação"; 
  n1!: number
  n2!: number
  resultado!: number  
  
   soma(){
    this.resultado = Number(this.n1) + Number(this.n2);
   }
   subtrair(){
    this.resultado = this.n1 - this.n2;
   }
   dividir(){
    this.resultado = this.n1 / this.n2;
   }
   multiplicar(){
    this.resultado = this.n1 * this.n2;
   }
  
   ngOnInit(): void {
       
   }
  }  
