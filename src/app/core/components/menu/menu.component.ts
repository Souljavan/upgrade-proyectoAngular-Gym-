import { AuthService } from 'src/app/core/service/auth.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.sass']
})
export class MenuComponent implements OnInit {

  constructor(
    public authService:AuthService
  ) { }

  ngOnInit(): void {
  }

  logout(){
    this.authService.doLogout();
  }

  public onToggleSidenav = () => { 
  }

}
