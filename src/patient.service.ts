
import {Injectable} from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
//we know that response will be in JSON format
const httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Injectable()
export class PatientService {

    constructor(private http:HttpClient) {}

    // Uses http.get() to load data 
    getPatients() {
        return this.http.get('http://localhost:8000/Patients');
    }


//Uses http.post() to post data 
addPatients(firstName: string, lastName: string, dob: string, phoneNumber: string,
    maritalStatus: string, street: string, city: string, zip: string, state: string,
    primaryInsurance: string, groupNumber: string, idNumber: string, socialSecurityNumber:string) {
    this.http.post('http://localhost:8000/patients',{ firstName, lastName, dob, phoneNumber, maritalStatus,
street, city, state, primaryInsurance, groupNumber, idNumber, socialSecurityNumber })
        .subscribe((responseData) => {
            console.log(responseData);
        }); 
    }
         
}