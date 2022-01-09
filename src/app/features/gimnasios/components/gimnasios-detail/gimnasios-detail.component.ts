import { ActivatedRoute } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { GimnasiosService } from '../../services/gimnasios.service';
import { gimnasios } from 'src/app/core/models/gimnasio';

@Component({
  selector: 'app-gimnasios-detail',
  templateUrl: './gimnasios-detail.component.html',
  styleUrls: ['./gimnasios-detail.component.sass']
})
export class GimnasiosDetailComponent implements OnInit {

  idgym: string='';
  gimnasio: gimnasios | any;

  constructor(public gimnasioservice:GimnasiosService,private activatedRoute:ActivatedRoute)  { }

  ngOnInit(): void {
    this.activatedRoute.queryParams.subscribe(params=>{
      //console.log(params)
      this.idgym=params["id"];
      this.leergym(this.idgym)
    })
  }


  leergym(idf:string){
    return this.gimnasioservice.getdetailgimnasio(idf).pipe().subscribe((data)=> {
     
     this.gimnasio = data
     console.log(this.gimnasio)
    })
  }
}
