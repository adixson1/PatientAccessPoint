
import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
//we know that response will be in JSON format
const httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Injectable()
export class DiseaseService {

    constructor(private http: HttpClient) { }

    // Uses http.get() to load data 
    getDiseases() {
        return this.http.get('http://localhost:8000/Diseases');
    }
      //Uses http.post() to post data 
      addDiseases(firstName: string, lastName: string, dob: string, Asthma: string,
        Migrane: string, Pregnancy: string, HeartDisease:string, BloodPressure:string) {
        this.http.post('http://localhost:8000/diseases', {
            firstName, lastName, dob, Asthma, Migrane, Pregnancy, HeartDisease, BloodPressure
        })
            .subscribe((responseData) => {
                console.log(responseData);
            });
    }
    deleteDisease(diseaseId: string) {
        this.http.delete("http://localhost:8000/diseases/" + diseaseId)
            .subscribe(() => {
                console.log('Deleted: ' + diseaseId);
            });
        location.reload();
    }
    updateDisease(DiseasesId: string, firstName: string, lastName: string,dob: string, Asthma: string,
        Migrane: string, Pregnancy: string, HeartDisease:string, BloodPressure:string) {
        //request path http://localhost:8000/Patientss/5xbd456xx 
        //first and last names will be send as HTTP body parameters 
        this.http.put("http://localhost:8000/diseases/" +
            DiseasesId, { firstName, lastName, dob, Asthma, Migrane, Pregnancy, HeartDisease, BloodPressure })
            .subscribe(() => {
                console.log('Updated: ' + DiseasesId);
            });
    }
      //Uses http.get() to request data based on Patients id 
      getDisease(DiseasesId: string) {
        return this.http.get('http://localhost:8000/diseases/' + DiseasesId);
    }

}

