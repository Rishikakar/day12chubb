import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {ProductService} from '../product.service'


@Component({
  selector: 'app-show',
  templateUrl: './show.component.html',
  styleUrls: ['./show.component.css']
})
export class ShowComponent implements OnInit {
  proddetails;
  pid;

  constructor(private ar:ActivatedRoute,public productService:ProductService) {
    this.pid=this.ar.snapshot.params.id;
    this.productService.getService().subscribe((data :any[])=>{
      console.log(this.pid);
      this.proddetails=data;
      console.log(this.proddetails)
    })
   }

  ngOnInit(): void {
  }

}