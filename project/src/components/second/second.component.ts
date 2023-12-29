import { Component } from '@angular/core';

@Component({
  selector: 'app-second',
  standalone: true,
  imports: [],
  templateUrl: './second.component.html',
  styleUrl: './second.component.css'
})
export class SecondComponent {
  imgSrc=" ../../assets/images/a.jpg";
   images = ['a.jpg', 'b.jpg', 'c.jpg', 'd.jpg', 'e.jpg'];
   x:any;
   y =1 ;
   work(){
    if(this.x){
      return;
    }

    this.x = setInterval(() => {
         console.log(this.y);
         this.y++;
         
          if(this.y>4){
              this.y=1;
          }
          // slider_img.setAttribute('src', "../../assets/images"+images[y] )
          this.imgSrc = "assets/images/"+ this.images[this.y]
      

      }, 2000);
  }

   stop(){
      console.log("Stop function is work");
      clearInterval(this.x);
  }



   
 i = 0;

 prev(){
  
if(this.i > 0) this.i--;	
this.setImg();			 
}

 next(){
  
   if(this.i < this.images.length-1) this.i++;
   
this.setImg();			 
}

 setImg(){
 this.imgSrc = "assets/images/"+ this.images[this.i]
// slider_img.setAttribute('src', "../images/"+images[i]);

}
}
