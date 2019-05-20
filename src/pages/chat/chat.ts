import { SessionService } from './../../app/session.service';
import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the ChatPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-chat',
  templateUrl: 'chat.html',
})
export class ChatPage {

  session;

  constructor(public navCtrl: NavController, public navParams: NavParams, private sessionService: SessionService) {
    this.session = this.navParams.get("sessionParam");
  }

  onSendMessage(){
    this.navCtrl.push('ChatPage', 
    {
      sessionParam: this.session
    });
    }

    ionViewWillLoad(){
      if (!this.session.message) {
        this.session.message = "";

      }
    }
}
