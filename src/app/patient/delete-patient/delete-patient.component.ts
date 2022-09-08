import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { PatientService } from '../patient.service';

@Component({
  selector: 'app-delete-patient',
  templateUrl: './delete-patient.component.html',
  styleUrls: ['./delete-patient.component.css']
})
export class DeletePatientComponent implements OnInit {

  constructor(private _activatedRoute: ActivatedRoute, private _service: PatientService, private _router: Router) { }

  ngOnInit(): void {
    let id = 0;
    this._activatedRoute.params.subscribe(data => {
      id = data['id'];
      console.log("Patient Id to be deleted: "+id);
      this._service.deletePatient(id).subscribe(data => {
        alert("Patient successfully deleted");
        this._router.navigateByUrl("/dashboard/patient/view-patients")
    }, error => {
      alert("Error occured: "+error.message);
    })
    })
  }

}
