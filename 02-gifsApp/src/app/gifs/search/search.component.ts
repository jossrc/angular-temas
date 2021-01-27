import { Component, ElementRef, ViewChild } from '@angular/core';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html'
})
export class SearchComponent {

  /*referencia local # */
  // #txtSearch == document.querySelector('input') parecido
  // Puede usar como argumento en el (keyup.enter) = method(txtSearch)


  /* Non-null assertion operator !: */

  @ViewChild('txtSearch') txtSearch!: ElementRef<HTMLInputElement>;

  searchGifs = ( contentSearch: string ) => {

    //const value = this.txtSearch.nativeElement.value

    console.log(contentSearch);
    console.log(this.txtSearch);
    //console.log(value);

    this.txtSearch.nativeElement.value = ''
  }


}
