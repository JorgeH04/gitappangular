import { Component } from '@angular/core';
import { DataService } from './services/data.service';
import { HttpClientModule } from '@angular/common/http';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {


  //foto: any = [];
   user
  
    constructor(private dataService: DataService){
  
    }
    ngOnInit(){
  
    }

    getData(dataName: string){
      this.dataService.getFoto(dataName)
       .subscribe(
      //  res => console.log(res),
       res => {
         console.log(res);
         this.user = res
        },
       err => console.log(err)
      )
  
    }


    submitData(dataName: HTMLInputElement){
      //console.log(fotoName.value);
      this.getData(dataName.value)
  
      dataName.value = '';
      dataName.focus();
      return false;
  
    }
}
