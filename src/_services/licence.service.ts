import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from '../environments/environment';
import { Observable } from 'rxjs';
import { Licence } from '../_models/Licence';
@Injectable({
  providedIn: 'root',
})
export class LicenceService {
  private apiUrl = `${environment.apiUrl}/licence`

  constructor(private http: HttpClient) {}

  getLicences(): Observable<Licence[]>{
    return this.http.get<Licence[]>(this.apiUrl);
  }

  createLicence(licence: Licence): Observable<Licence>{
    return this.http.post<Licence>(this.apiUrl, licence);
  }

  deleteLicences(id: number): Observable<void>{
    return this.http.delete<void>(`${this.apiUrl}/${id}`);
  }

  getLicenceById(id: number): Observable<Licence>{
    return this.http.get<Licence>(`${this.apiUrl}/${id}`);
  }

  editLicence(licence : Licence): Observable<Licence>{
    return this.http.put<Licence>(`${this.apiUrl}/${licence.id}`, licence)
  }
}
