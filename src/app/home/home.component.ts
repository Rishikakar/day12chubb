import { Component, OnInit } from '@angular/core';
import { Observable, Subscription } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { ProductService } from '../product.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  proddetails;

  constructor(public productService: ProductService) {
    this.productService.getService().subscribe((data: any[]) => {
      console.log(data)
      this.proddetails = data;
    })
  }

  ngOnInit(): void {
  }
  shareIndex(s) {
    let ps = s + 1;
    this.productService.productid = ps;
  }

}