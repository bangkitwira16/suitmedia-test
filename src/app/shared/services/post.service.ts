import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, map, Observable } from 'rxjs';
import { Response } from '../models/response.model';
import { environment } from '../../../environments/environment';
import { Pagination } from '../models/pagination.model';

@Injectable({
  providedIn: 'root',
})
export class PostService {
  private apiUrl = environment.API_URL;
  private filterSource = new BehaviorSubject<
    | {
        pagination: Pagination;
        sort: string;
      }
    | undefined
  >(undefined);
  public currentFilter = this.filterSource.asObservable();
  constructor(private http: HttpClient) {}

  getPosts(param: any): Observable<any> {
    const params = this.generateHttpParam(param);
    return this.http
      .get(`${this.apiUrl}/ideas`, { params })
      .pipe(map((resp: Response): any => resp));
  }

  public generateHttpParam(param?: any): HttpParams {
    let result = new HttpParams();

    if (param) {
      Object.keys(param).forEach((key) => {
        if (
          param[key] !== null &&
          param[key] !== undefined &&
          param[key] !== ''
        ) {
          result = result.set(key, param[key]);
        }
      });
    }

    return result;
  }

  getFilterSource() {
    if (localStorage.getItem('filterSource')) {
      return JSON.parse(localStorage.getItem('filterSource') || '');
    }
    return false;
  }

  setFilterSource(payload: {
    pagination: Pagination;
    sort: string;
  }) {
    this.filterSource.next(payload);
    localStorage.setItem('filterSource', JSON.stringify(payload));
  }
}
