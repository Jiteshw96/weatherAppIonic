import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { RepositoryService } from '../repository.service';
import { Router, NavigationExtras } from '@angular/router';
import { UIServiceServiceService } from '../uiservice-service.service';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})


export class HomePage {
  constructor(private http: HttpClient,
    public mRepositoryService:RepositoryService,private router: Router,
    public mUIServiceServiceService:UIServiceServiceService) {

    // this.http.get('https://jsonplaceholder.typicode.com/todos/1').toPromise().then(data => {
    //   console.log(data);
    // });
    this.getWeatherInfo();
  }

  async getWeatherInfo() {
    this.mUIServiceServiceService.showLoading("Loading...");
    const hjghj = await this.mRepositoryService.getWeatherValueFiveDays("Pune");
    if(JSON.parse(hjghj)=="Error"){
      this.mUIServiceServiceService.dismissLoading();
     // this.mUIToastService.presentToast();
     console.log("Error");
    }
    else{
     // this.show=true;
     console.log(hjghj);
      this.mUIServiceServiceService.dismissLoading();      
    }
    this.mUIServiceServiceService.dismissLoading();
  }

}