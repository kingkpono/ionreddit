import { Component } from '@angular/core';

import { NavController } from 'ionic-angular';


import { RedditsService } from '../../app/services/reddits.service';

import { RedditsPage } from '../reddits/reddits';

@Component({
  selector: 'settings',
  templateUrl: 'settings.html'
})
export class SettingsPage {

 category:any;
 limit:any;

 constructor(public navCtrl: NavController,private redditsService:RedditsService) {
this.getDefaults();
  }

 

  
  setDefaults()
  {
      localStorage.setItem("category",this.category);
      localStorage.setItem("limit",this.limit);
      this.navCtrl.push(RedditsPage);

  }


  getDefaults()
  {
  if(localStorage.getItem("category")!=null)
  {
  this.category=localStorage.getItem("category");
  }else{

      this.category='sports'; 
     }


     if(localStorage.getItem("limit")!=null)
  {
  this.limit=localStorage.getItem("limit");
  }else{
this.limit=10;
     }
  }


}
