import { SessionService } from './../../app/session.service';
import { Component } from '@angular/core';
import { NavController, AlertController } from 'ionic-angular';


@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})

export class HomePage  {

  session;

  constructor(public navCtrl: NavController, public alertController: AlertController, private sessionService: SessionService) {
    this.session = sessionService.session;

  }
  onBtClick (){
    this.navCtrl.push('ChatPage', 
    {
      sessionParam: this.session
    });
    }

    ionViewWillLeave(){
      this.sessionService.addSession(this.session);
    }
}
