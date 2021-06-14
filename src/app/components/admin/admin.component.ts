import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.scss']
})
export class AdminComponent implements OnInit {

  constructor(private router:Router) { }

  ngOnInit(): void {
  }

  aReporte(){
    this.router.navigateByUrl('/admin/reporte') //a reporte de usuarios
  }
  aCitas(){
    this.router.navigateByUrl('admin/listar-citas-admin')
  }

}
