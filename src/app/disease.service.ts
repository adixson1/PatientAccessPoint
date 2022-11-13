
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

