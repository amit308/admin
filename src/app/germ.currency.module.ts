import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { GermanCurrencyPipe } from "./german-currency.pipe";

@NgModule({
  imports: [CommonModule],
  declarations: [GermanCurrencyPipe],
  exports: [GermanCurrencyPipe]
})

export class GermCurrencyModule {}
