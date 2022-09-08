import { Component, OnInit } from '@angular/core';
import { Patient } from '../patient';
import { PatientService } from '../patient.service';

@Component({
  selector: 'app-add-patient',
  templateUrl: './add-patient.component.html',
  styleUrls: ['./add-patient.component.css']
})
export class AddPatientComponent implements OnInit {

  patient : Patient = new Patient(0, "", "", new Date(), "", "", "", "", "", "", "", 0);

  constructor(private _service : PatientService) { }

  ngOnInit(): void {
  }

  onsubmit(): void {
    console.log(this.patient);

    this._service.addPatient(this.patient).subscribe(data => {
        alert("Patient added successfully");
        this.patient = new Patient(0, "", "", new Date(), "", "", "", "", "", "", "", 0);
      },
      error => {
        alert("Patient adding unsuccessful");
      })
    }
}
