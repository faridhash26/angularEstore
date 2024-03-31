import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root',
})
export class ApiServiceService {
  private baseUrl = environment.apiUrl;
  constructor(private http: HttpClient) {}

  get<T>(
    url: string,
    params?: HttpParams,
    headers?: HttpHeaders
  ): Observable<T> {
    const options = { headers, params };
    return this.http.get<T>(`${this.baseUrl}/${url}`, options);
  }
  getAll<T>(url: string, headers?: HttpHeaders): Observable<T> {
    const options = { headers };
    return this.http.get<T>(`${this.baseUrl}/${url}`, options);
  }
  post<T>(url: string, body?: unknown, headers?: HttpHeaders): Observable<T> {
    const options = { headers };
    return this.http.post<T>(`${this.baseUrl}/${url}`, body, options);
  }
  put<T>(url: string, body?: unknown, headers?: HttpHeaders): Observable<T> {
    const options = { headers };
    return this.http.put<T>(`${this.baseUrl}/${url}`, options);
  }
  patch<T>(url: string, body?: unknown, headers?: HttpHeaders): Observable<T> {
    const options = { headers };
    return this.http.patch<T>(`${this.baseUrl}/${url}`, options);
  }
  delete<T>(url: string, headers?: HttpHeaders): Observable<T> {
    const options = { headers };
    return this.http.delete<T>(`${this.baseUrl}/${url}`, options);
  }
  handleResponse(error: Response) {
    if (error.status === 500) {
      alert();
    }
  }
}
