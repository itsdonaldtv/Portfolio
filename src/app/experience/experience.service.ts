import { Injectable } from "@angular/core";
import { HttpClient, HttpErrorResponse } from "@angular/common/http";
import { IExperience} from "./experience";
import { Observable, throwError } from "rxjs";
import { catchError, tap } from 'rxjs/operators';

@Injectable({
    providedIn: 'root',
})

export class ExperienceService{
    private experienceUrl = 'api/experience/experience.json';

    constructor(private http: HttpClient) {

    }

    getExperience(): Observable<IExperience[]> {
        return this.http.get<IExperience[]>(this.experienceUrl).pipe(
            tap(data => console.log('All: ', JSON.stringify(data))),
            catchError(this.handleError)
        );
    }

    handleError(err: HttpErrorResponse) {
        let errMsg = "";
        if(err.error instanceof ErrorEvent) {
            errMsg = `Error occured: ${err.error.message}`;
        } else{
            errMsg = `Server returned code: ${err.status}, error message is ${err.error.message}`
        }
        console.error(errMsg);
        return throwError(errMsg);
    }
}