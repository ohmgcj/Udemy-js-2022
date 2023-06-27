import { Directive, Input, OnInit, TemplateRef, ViewContainerRef } from '@angular/core';

@Directive({
  selector: '[myFor]'
})
/* OnInit ao iniciar / OnChange sempre que atualizar*/
export class ForDirective implements OnInit {
  @Input('myForEm') numbers!: number[]; 
  //alterado de "?" para "!" devido ao erro de 'undefined' do array na linha 16

  constructor(
    private container: ViewContainerRef, 
    private template: TemplateRef<any>
    ) {}

   ngOnInit(): void {
    for(let number of this.numbers) {
      this.container.createEmbeddedView(this.template,{$implicit:number})
    }
    console.log(this.numbers)
   }
}
