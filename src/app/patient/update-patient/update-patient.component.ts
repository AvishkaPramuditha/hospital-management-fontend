import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Patient } from '../patient';
import { PatientService } from '../patient.service';

@Component({
  selector: 'app-update-patient',
  templateUrl: './update-patient.component.html',
  styleUrls: ['./update-patient.component.css']
})
export class UpdatePatientComponent implements OnInit {

  patient : Patient = new Patient(0, "", "", new Date(), "", "", "", "", "", "", "", 0);

  constructor(private _activatedRoute: ActivatedRoute, private _service: PatientService, private _router: Router) { }

  ngOnInit(): void {
    let id = 0;
    this._activatedRoute.params.subscribe(data => {
      id = data['id'];
      console.log("Patient Id to be updated: "+id);
      this._service.getPatient(id).subscribe(response => {
        this.patient = response;
      })
    })
  }

  onupdate() {
    this._service.updatePatient(this.patient).subscribe(data => {
        alert("Patient successfully updated");
        this._router.navigateByUrl("/dashboard/patient/view-patients")
    }, error => {
      alert("Error occured: "+error.message);
    })
  }

}
