import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class DataService {

  client_id = "4de6e38e74dbbdd1c4cd"

  client_secret= '4fd44ea425ed70c0e0f4643c18d08da705643315';
  URI: string = '';

  constructor(private http: HttpClient) { 

    //this.URI = `http://api.github.com/users/?client_id=${this.client_id}&client_secret=${this.client_secret}`
  }



getFoto(user: string){
  return this.http.get(`http://api.github.com/users/${user}?client_id=${this.client_id}&client_secret=${this.client_secret}`)
}
}
