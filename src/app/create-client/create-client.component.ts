import { Component, OnInit } from '@angular/core';
import { ApiService } from '../client.service';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-create-client',
  templateUrl: './create-client.component.html',
  styleUrls: ['./create-client.component.css']
})
export class CreateClientComponent implements OnInit {

client: any = {};

constructor(private api: ApiService) { }

  ngOnInit() {

  }

  saveForm(form: NgForm) {
   console.log(form);
   this.api.save(form).subscribe(() => {
    }, error => console.error(error));
  }
}
