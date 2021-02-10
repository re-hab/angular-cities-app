import { Component, OnInit, ChangeDetectorRef } from '@angular/core';
import { AuthManager } from 'src/app/core/managers/auth.manager'
declare var $: any;

@Component({
  selector: 'app-side-nav',
  templateUrl: './side-nav.component.html',
  styleUrls: ['./side-nav.component.scss']
})
export class SideNavComponent implements OnInit {

  constructor(private cdr: ChangeDetectorRef, private authManager: AuthManager) { }

  ngOnInit(): void {
  }

  openNav(){
    $('#side-nav').css('width', '250px');
  }

  closeNav(){
    $('#side-nav').css('width', '0px');
  }

  logOut(){
    this.authManager.logout();
  }
}
