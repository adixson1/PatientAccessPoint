
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

    // Uses http.get() to load data 
    getAppointments() {
        return this.http.get('http://localhost:8000/appointments');
    }

    //Uses http.post() to post data 
    addAppointments(firstName: string, lastName: string, dateOfBirth: string) {
        this.http.post('http://localhost:8000/appointments', {
            firstName, lastName
        })
            .subscribe((responseData) => {
                console.log(responseData);
            });
    }
    deleteAppointment(AppointmentsId: string) {
        this.http.delete("http://localhost:8000/appointments/" + AppointmentsId)
            .subscribe(() => {
                console.log('Deleted: ' + AppointmentsId);
            });
        location.reload();
    }
    updateAppointment(AppointmentsId: string, firstName: string, lastName: string) {
        //request path http://localhost:8000/Appointments/5xbd456xx 
        //first and last names will be send as HTTP body parameters 
        this.http.put("http://localhost:8000/appointments/" +
            AppointmentsId, { firstName, lastName })
            .subscribe(() => {
                console.log('Updated: ' + AppointmentsId);
            });
    }
    //Uses http.get() to request data based on Patients id 
    getAppointment(AppointmentsId: string) {
        return this.http.get('http://localhost:8000/appointments/' + AppointmentsId);
    }
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

    // Uses http.get() to load data 
    getDiseases() {
        return this.http.get('http://localhost:8000/Diseases');
    }
      //Uses http.post() to post data 
      addDiseases(firstName: string, lastName: string) {
        this.http.post('http://localhost:8000/patients', {
            firstName, lastName
        })
            .subscribe((responseData) => {
                console.log(responseData);
            });
    }
    deleteDisease(DiseasesId: string) {
        this.http.delete("http://localhost:8000/diseases/" + DiseasesId)
            .subscribe(() => {
                console.log('Deleted: ' + DiseasesId);
            });
        location.reload();
    }
    updateDisease(DiseasesId: string, firstName: string, lastName: string) {
        //request path http://localhost:8000/Patientss/5xbd456xx 
        //first and last names will be send as HTTP body parameters 
        this.http.put("http://localhost:8000/diseases/" +
            DiseasesId, { firstName, lastName })
            .subscribe(() => {
                console.log('Updated: ' + DiseasesId);
            });
    }
      //Uses http.get() to request data based on Patients id 
      getDisease(DiseasesId: string) {
        return this.http.get('http://localhost:8000/diseases/' + DiseasesId);
    }

}
