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

returnClient: String ='';

constructor(private api: ApiService) { }

  ngOnInit() {
  }

  saveForm(form: NgForm) {
   this.api.save(form).subscribe(() => {
     this.returnClient = "Cliente salvo com sucesso";
    }, error => {
        this.returnClient = "Erro ao salvar o cliente ";
    });
  }
}
