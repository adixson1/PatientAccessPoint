
import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
//we know that response will be in JSON format
const httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Injectable()
export class AppointmentService {

    constructor(private http: HttpClient) { }
    // Uses http.get() to load data 
    getAppointments() {
        return this.http.get('http://localhost:8000/appointments');
    }

    //Uses http.post() to post data 
    addAppointments(firstName: string, lastName: string, dateOfBirth: string, appointmentDate:string, selectDepartment:string,
        selectDoctor:string, messageOptional:string) {
        this.http.post('http://localhost:8000/appointments', {
            firstName, lastName, dateOfBirth, appointmentDate,selectDepartment, selectDoctor, messageOptional
        })
            .subscribe((responseData) => {
                console.log(responseData);
            });
    }
    deleteAppointment(appointmentId: string) {
        this.http.delete("http://localhost:8000/appointments/" + appointmentId)
            .subscribe(() => {
                console.log('Deleted: ' + appointmentId);
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
}