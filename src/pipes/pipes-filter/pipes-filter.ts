import { Pipe, PipeTransform } from '@angular/core';
import {Product} from "../../models/product.model";

/**
 * Generated class for the PipesFilterPipe pipe.
 *
 * See https://angular.io/api/core/Pipe for more info on Angular Pipes.
 */
@Pipe({
  name: 'pipesFilter',
})
export class PipesFilterPipe implements PipeTransform {
  /**
   * Takes a value and makes it lowercase.
   */
  transform(products:Product[], text:string ): Product[] {

    if ( text.length === 0 ) { return products; }

    text = text.toLocaleLowerCase();

    return products.filter(product => {
      return product.name.toLocaleLowerCase().includes(text);
    });
  }
}
