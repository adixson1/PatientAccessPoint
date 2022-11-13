
import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
//we know that response will be in JSON format
const httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Injectable()
export class PatientService {

    constructor(private http: HttpClient) { }

    // Uses http.get() to load data 
    getPatients() {
        return this.http.get('http://localhost:8000/Patients');
    }


    //Uses http.post() to post data 
    addPatients(firstName: string, lastName: string, dob: string, phoneNumber: string,
        maritalStatus: string, street: string, city: string, zip: string, state: string,
        primaryInsurance: string, groupNumber: string, idNumber: string, socialSecurityNumber: string) {
        this.http.post('http://localhost:8000/patients', {
            firstName, lastName, dob, phoneNumber, maritalStatus,
            street, city, state, primaryInsurance, groupNumber, idNumber, socialSecurityNumber
        })
            .subscribe((responseData) => {
                console.log(responseData);
            });
    }

    deletePatient(PatientsId: string) {
        this.http.delete("http://localhost:8000/patients/" + PatientsId)
            .subscribe(() => {
                console.log('Deleted: ' + PatientsId);
            });
        location.reload();
    }

    updatePatient(PatientsId: string, firstName: string, lastName: string) {
        //request path http://localhost:8000/Patientss/5xbd456xx 
        //first and last names will be send as HTTP body parameters 
        this.http.put("http://localhost:8000/patients/" +
            PatientsId, { firstName, lastName })
            .subscribe(() => {
                console.log('Updated: ' + PatientsId);
            });
    }

    //Uses http.get() to request data based on Patients id 
    getPatient(PatientsId: string) {
        return this.http.get('http://localhost:8000/patients/' + PatientsId);
    }
}