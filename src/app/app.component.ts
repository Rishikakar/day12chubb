import { Component } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable,Subscription} from 'rxjs';
import {ProductService} from './product.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'blogapp';
  constructor(public productService : ProductService) { 
    
  }

  ngOnInit(): void {
  }

}
