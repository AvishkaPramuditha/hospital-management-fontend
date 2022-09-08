import { Component, OnInit } from '@angular/core';
import { Patient } from '../patient';
import { PatientService } from '../patient.service';

@Component({
  selector: 'app-view-patients',
  templateUrl: './view-patients.component.html',
  styleUrls: ['./view-patients.component.css']
})
export class ViewPatientsComponent implements OnInit {

  patients : Patient [] = [];

  constructor(private _service : PatientService) { }

  ngOnInit(): void {
    
    this._service.getAllPatients().subscribe(data => {
      this.patients = data;
      console.log(data);
  }, error => {
    alert(error.message);
  });
  }

}
