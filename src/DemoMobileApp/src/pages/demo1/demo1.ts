import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { RestClientProvider } from '../../providers/rest-client/rest-client';

/**
 * Generated class for the Demo1Page page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@Component({
  selector: 'page-demo1',
  templateUrl: 'demo1.html',
})
export class Demo1Page {

  type = 'printed';
  language = 'en';
  capturedImage = '';
  recognizedText = 'Hello World';
  translatedText = 'Zdravo svete';

  constructor(public navCtrl: NavController, public navParams: NavParams, private restClient: RestClientProvider) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad Demo1Page');
  }

  captureImage() {
      this.translate();
  }

  translate() {
    if (this.recognizedText) {
      this.restClient.translateText(this.recognizedText, this.language).subscribe(
        result => {
          this.translatedText = JSON.stringify(result);
        }
      );
    }
  }

}
