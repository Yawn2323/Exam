import { Component, OnInit,ViewChild,ElementRef,NgZone } from '@angular/core';
import { FormGroup, Validators, FormBuilder } from '@angular/forms';
import { debounceTime } from 'rxjs/operators';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})

export class AppComponent {

  constructor(private fb: FormBuilder){
      this.searchForm = this.fb.group({
        email: [null, [Validators.required]]
      });
      console.log(this.searchForm.get('email').value)
      this.searchForm.get('email')
      .valueChanges.pipe(debounceTime(500))
      .subscribe((email:string)=>{
          this.users =this.users.filter(data => {
              if(email) {
                  if (data.e.toLocaleLowerCase().includes(email.toLocaleLowerCase())){
                      return this.users
                  } else {
                      this.users = this.users
                  }
              } else {
                  alert('Search again')
                  window.location.reload();
                  return this.users
              }
          })
          .sort((a: any, b: any) => {
            return a - b;
          });
      })
  }
  
  searchString: string;
  searchForm: FormGroup;
  users = [
     {
        _id: '507f1f77bcf86cd799439011',
        n : 'Al Joseph Samson',
        e : 'ajsamson.qtech@gmail.com',
        rl : 'support',
        qtech:'QTechnologies',
        qbiz :'qbiz',
        arq : 'arq',
        sqfrancobpo:'SQ Franco BPO',
        mm:'MarQ Medical' 
     },
     {
        _id: '507f1f77bcf86cd799439012',
        n : 'Antonino Hector Franco',
        e : 'ahfranco.qbiz@gmail.com',
        rl : 'admin',
        qtech:'QTechnologies',
        qbiz :'qbiz',
        arq : 'arq',
        sqfrancobpo:'SQ Franco BPO',
        mm:'MarQ Medical' 
     },
     {
        _id: '507f1f77bcf86cd799439013',
        n : 'Stephanie Queen Uberas',
        e : 'suberas.sqfrancobpo@gmail.com',
        rl : 'admin',
        qtech:'QTechnologies',
        qbiz :'qbiz',
        arq : 'arq',
        sqfrancobpo:'SQ Franco BPO',
        mm:'MarQ Medical' 
   }
  ]

  ngOnInit():void{
      this.users
  }

  search(){

  }

}

