import { Component, OnInit,OnDestroy } from '@angular/core';
import { Router } from '@angular/router';
import { Subject, takeUntil } from 'rxjs';
import { gimnasios } from 'src/app/core/models/gimnasio';
import { GimnasiosService } from '../../services/gimnasios.service';


@Component({
  selector: 'app-gimnasios',
  templateUrl: './gimnasios.component.html',
  styleUrls: ['./gimnasios.component.sass']
})
export class GimnasiosComponent implements OnInit,OnDestroy {

  ginmasiosList: gimnasios[]=[]
  indexGimnasio:number | null=null;
  isOpen: boolean=false;

  protected readonly clearSubscriptions$ = new Subject();

  constructor(public gimnasioservice:GimnasiosService, private router:Router) { }

  ngOnInit(): void {
    this.recoverGyms();
  }

  public ngOnDestroy(): void {
    this.clearSubscriptions$.complete();
  }

  recoverGyms(){
    return this.gimnasioservice.getGimnasios().pipe(takeUntil(this.clearSubscriptions$),).subscribe((data)=> {
      this.ginmasiosList = data
      console.log(this.ginmasiosList)
    })
  }

  gotodetails(idf:String){
    console.log(idf)
    this.router.navigate(['/detail'], { queryParams: { id: idf } });
  }

}
