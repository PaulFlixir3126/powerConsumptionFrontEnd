import { Component, OnInit } from '@angular/core';
import { MatSnackBar } from '@angular/material';
import { Router } from '@angular/router';

@Component({
  selector: 'app-setting',
  templateUrl: './setting.component.html',
  styleUrls: ['./setting.component.css']
})
export class SettingComponent implements OnInit {
  gensetTable = [{
    img:'../../assets/gen.png',
    gensetName : 'AFX Genset',
    gensetMake : 'Deep Sea',
    version : '1.2E',
    date : '30-12-2022',
    oilPressure : 0.120,
    coolentTemp : 120.00,
    lowOil : true,
    low_HighCoolent : true
  }]
  constructor(public snackBar: MatSnackBar,
    public router: Router,) { }

  ngOnInit() {
  }
  dashboardRedirect(){
    this.redirect('user/dashboard');
  }
  redirect(to): void {
    this.router.navigate([to]);
  }

}
