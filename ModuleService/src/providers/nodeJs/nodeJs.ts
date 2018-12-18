import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Injectable } from '@angular/core';

/*
  Generated class for the DesktopService provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class ModuleService {

  public API = 'http://localhost:3000/api';
  public id = 0;

  constructor(public http: HttpClient) {
    console.log('Hello ModuleService Provider');
  }

  setId(i: number){

    this.id = i;
  }

  getId(){

    return this.id;
  }

  getModules() {
    return this.http.get(this.API + '/modules');
  }

  getOneModules(i: number): Observable<any> {
    console.log("llega el: " + i);
    return this.http.get(this.API + '/modules/' + i);
  }

  addModules(module): Observable<any>{
    let options = { headers: {'Content-Type': 'application/x-www-form-urlencoded'}};
    let urlSearchParams = new URLSearchParams();
    urlSearchParams.append('name', module.name);
    urlSearchParams.append('info', module.info);
    urlSearchParams.append('user', module.user);
    let body = urlSearchParams.toString();
    return this.http.post(this.API + '/modules', body, options);
  }

  removeModules(i: number){
    return this.http.delete(this.API + '/modules/' + i);
  }

  updateModules(i: number, module):  Observable<any>{
    let options = { headers: {'Content-Type': 'application/x-www-form-urlencoded'}};
    let urlSearchParams = new URLSearchParams();
    urlSearchParams.append('name', module.name);
    urlSearchParams.append('info', module.info);
    let body = urlSearchParams.toString();
    return this.http.put(this.API + '/modules/' + i, body, options);
  }

}

@Injectable()
export class SubjectService {

  public API = 'http://localhost:3000/api';
  public id = 0;

  constructor(public http: HttpClient) {
    console.log('Hello SubjectService Provider');
  }

  setId(i: number){

    this.id = i;
  }

  getId(){

    return this.id;
  }

  getSubjects(): Observable<any> {
    return this.http.get(this.API + '/subjects');
  }

  getOneSubject(i: number): Observable<any> {
    console.log("llega el: " + i);
    return this.http.get(this.API + '/subjects/' + i);
  }

  getUserSubjects(moduleId: number, userId: number): Observable<any> {
    return this.http.get(this.API + '/subjects/user/' + moduleId + '&'+ userId);
  }

  getModuleSubjects(moduleId: number): Observable<any> {
    let options = { headers: {'Content-Type': 'application/x-www-form-urlencoded'}};

    return this.http.get(this.API + '/subjects/module/' + moduleId, options);
  }

  addSubjects(subject): Observable<any>{
    let options = { headers: {'Content-Type': 'application/x-www-form-urlencoded'}};
    let urlSearchParams = new URLSearchParams();
    urlSearchParams.append('name', subject.name);
    urlSearchParams.append('info', subject.info);
    urlSearchParams.append('moduleId', subject.module);
    urlSearchParams.append('userId', subject.user);
    let body = urlSearchParams.toString();
    return this.http.post(this.API + '/subjects', body, options);
  }

  removeSubjects(i: number){
    return this.http.delete(this.API + '/subjects/' + i);
  }

  updateSubjects(i: number, subject) : Observable<any>{
    let options = { headers: {'Content-Type': 'application/x-www-form-urlencoded'}};
    let urlSearchParams = new URLSearchParams();
    urlSearchParams.append('name', subject.name);
    urlSearchParams.append('info', subject.info);
    let body = urlSearchParams.toString();
    return this.http.put(this.API + '/subjects/' + i, body, options);
  }

}

@Injectable()
export class UserService {

  public API = 'http://localhost:3000/api';
  public id = 0;

  constructor(public http: HttpClient) {
    console.log('Hello SubjectService Provider');
  }

  setId(i: number){

    this.id = i;
  }

  getId(){

    return this.id;
  }

  getUsers(): Observable<any> {
    return this.http.get(this.API + '/users');
  }

  getOneUser(user): Observable<any> {
    let options = { headers: {
      'Content-Type': 'application/x-www-form-urlencoded',
      'Authorization': 'Basic dXNlcjI6dXNlcjI=' 
    }};
    let urlSearchParams = new URLSearchParams();
    urlSearchParams.append('username', user.username);
    urlSearchParams.append('password', user.password);
    return this.http.get(this.API + '/userAuth' + urlSearchParams, options);
  }

  addUsers(user): Observable<any>{
    let options = { headers: {'Content-Type': 'application/x-www-form-urlencoded'}};
    let urlSearchParams = new URLSearchParams();
    urlSearchParams.append('username', user.username);
    urlSearchParams.append('email', user.email);
    urlSearchParams.append('password', user.password);
    let body = urlSearchParams.toString();
    return this.http.post(this.API + '/users', body, options);
  }

}

@Injectable()
export class ImagesService {

  public API = 'http://localhost:3000/api';
  public id = 0;

  constructor(public http: HttpClient) {
    console.log('Hello SubjectService Provider');
  }

  setId(i: number){

    this.id = i;
  }

  getId(){

    return this.id;
  }

  getImages(): Observable<any> {
    return this.http.get(this.API + '/images');
  }

  postImages(image, idSub: number): Observable<any> {
    let options = { headers: {'Content-Type': 'application/x-www-form-urlencoded'}};
    let urlSearchParams = new URLSearchParams();
    urlSearchParams.append('image', image.image);
    urlSearchParams.append('subjectId', idSub.toString());
    let body = urlSearchParams.toString();
    return this.http.post(this.API + '/images', body, options);
  }

  }
