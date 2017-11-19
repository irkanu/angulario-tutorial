import {Component, OnInit} from '@angular/core';
import {HttpClient} from '@angular/common/http';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'Learning Angular 2 PogChamp';
  results: string[];

  // Inject HttpClient into your component or service.
  // constructor(private http: HttpClient) {}

  ngOnInit(): void {
    // Make the request
    // this.http.get('http://ip.jsontest.com/').subscribe(data => {
    //   // Read the results field from the JSON response.
    //   this.results = data['ip'];
    // });
  }
}
