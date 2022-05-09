import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';

export class Community{
  constructor(
    public id: string,
    public name: string,
    public url: string

  ){

  }
}


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {
  title = 'wt';

  communities: Community[] = [];

  constructor(
    private httpClient: HttpClient
  ){
  }

  ngOnInit() :void{
    this.getCommunities();
  }

  getCommunities(){
    this.httpClient.get<any>('https://api7.dspace.org/server/api/core/communities').subscribe(
      response => {
        console.log(response)
      }
    )
  }

}
