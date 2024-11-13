import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ValueTransformPipe } from './value-transform.pipe';
import { CountdownConfigPipe } from './countdown-transform.pipe';
import { NumberFormatPipe } from './number-format.pipe';



@NgModule({
  declarations: [ValueTransformPipe,CountdownConfigPipe,NumberFormatPipe],
  imports: [
    CommonModule
  ],
  exports: [ValueTransformPipe,CountdownConfigPipe,NumberFormatPipe]
})
export class PipeModule { }
