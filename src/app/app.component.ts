import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {MatDatepickerModule} from '@angular/material/datepicker';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
model1: Date;
  model2: Date;

  get today() {
    return new Date();
  }
  
  title = 'pruebachile';

    public show:boolean = false;
    public hola:boolean = true;
    public buttonName:any = 'Show';


  toggle() {
    this.show = !this.show;

    if(this.show)  
      this.buttonName = "borde";
    else
      this.buttonName = "no-borde";
  }

  togglemenu() {
     this.hola = !this.hola;
  }

   home1: any[] = [
    {
    
      "TEXTO1": "Dolor sit Amet, consectetur adipiscing elit"

    },
    {
    
      "TEXTO2": "Dolor sit Amet, consectetur adipiscing elit"
      
    },
    {
    
      "TEXTO3": "Dolor sit Amet, consectetur adipiscing elit"

    },
    {
    
      "TEXTO4": "Dolor sit Amet, consectetur adipiscing elit"
      
    }
  ];

  home2: any[] = [
    {
    
      "TEXTO1": "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."

    },
    {
    
      "TEXTO2": "Dolor sit Amet, consectetur adipiscing elit"
      
    }

  ];

  datostabla: any[] = [
    {
    
      "Lorem": "xxxxxxxx-x",
      "Ipsum": "xxxxxxxxx",
      "Dolor": "jaimefelipenawath@gmail.com",
      "Sit": "Este es un texto por json sit",
      "Amet": "$200.000"

    },
    {
    
      "Lorem": "xxxxxxxx-x",
      "Ipsum": "xxxxxxxxx",
      "Dolor": "jaimefelipenawath@gmail.com",
      "Sit": "jaimefelipenawath@gmail.com ",
      "Amet": "$300.000"

    },
    {
    
      "Lorem": "xxxxxxxx-x",
      "Ipsum": "xxxxxxxxx",
      "Dolor": "jaimefelipenawath@gmail.com",
      "Sit": "jaimefelipenawath@gmail.com ",
      "Amet": "$400.000"

    },
    {
    
      "Lorem": "xxxxxxxx-x",
      "Ipsum": "xxxxxxxxx",
      "Dolor": "jaimefelipenawath@gmail.com",
      "Sit": "jaimefelipenawath@gmail.com ",
      "Amet": "$700.000"

    },
    {
    
      "Lorem": "xxxxxxxx-x",
      "Ipsum": "xxxxxxxxx",
      "Dolor": "jaimefelipenawath@gmail.com",
      "Sit": "jaimefelipenawath@gmail.com ",
      "Amet": "$200.000"

    },
    {
    
      "Lorem": "xxxxxxxx-x",
      "Ipsum": "xxxxxxxxx",
      "Dolor": "jaimefelipenawath@gmail.com",
      "Sit": "jaimefelipenawath@gmail.com ",
      "Amet": "$300.000"

    },
    {
    
      "Lorem": "xxxxxxxx-x",
      "Ipsum": "xxxxxxxxx",
      "Dolor": "jaimefelipenawath@gmail.com",
      "Sit": "jaimefelipenawath@gmail.com ",
      "Amet": "$400.000"

    },
    {
    
      "Lorem": "xxxxxxxx-x",
      "Ipsum": "xxxxxxxxx",
      "Dolor": "jaimefelipenawath@gmail.com",
      "Sit": "jaimefelipenawath@gmail.com ",
      "Amet": "$700.000"

    }
    
  ];





}


