
import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
//we know that response will be in JSON format
const httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Injectable()
export class DoctorService {

    constructor(private http: HttpClient) { }
// Uses http.get() to load data 
getDoctors() {
    return this.http.get('http://localhost:8000/doctors');
}

 //Uses http.post() to post data 
 addDoctors(firstName1: string, lastName1: string, email1: string) {
    this.http.post('http://localhost:8000/doctors', {
        firstName1, lastName1, email1
    })
        .subscribe((responseData) => {
            console.log(responseData);
        });
}

deleteDoctor(DoctorsId: string) {
    this.http.delete("http://localhost:8000/doctors/" + DoctorsId)
        .subscribe(() => {
            console.log('Deleted: ' + DoctorsId);
        });
    location.reload();
}
updateDoctor(DoctorsId: string, firstName: string, lastName: string) {
    //request path http://localhost:8000/Patientss/5xbd456xx 
    //first and last names will be send as HTTP body parameters 
    this.http.put("http://localhost:8000/doctors/" +
        DoctorsId, { firstName, lastName })
        .subscribe(() => {
            console.log('Updated: ' + DoctorsId);
        });
}
//Uses http.get() to request data based on Patients id 
getDoctor(DoctorsId: string) {
    return this.http.get('http://localhost:8000/doctors/' + DoctorsId);
}
}