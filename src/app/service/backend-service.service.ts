import { Injectable } from '@angular/core';
import { Apollo } from 'apollo-angular';
import { Observable } from 'rxjs';
import { Query } from '../models/query';
import gql from 'graphql-tag';
import { Admin } from '../models/admin';


@Injectable({
  providedIn: 'root'
})
export class BackendServiceService {

  constructor(private apollo: Apollo) { }

  //ADMIN
  getAdmin(email: String): Observable<Query>{
    return this.apollo.query<Query>(
      {
        query: gql`
          query getAdmin($email: String!){
            getAdmin(email: $email){
              email
              frontname
              backname
              password
              phonenumber
            }
          }
        `,
        variables: {
          "email": email
        }
      }
    )
  }

  getAllAdmin(): Observable<Query>{
    return this.apollo.query<Query>(
      {
        query: gql`
          query getAllAdmin{
            getAllAdmin{
              frontname
              backname
              email
              phonenumber
              password
            }
          }
        `
      }
    )
  }

  createAdmin(newAdmin: Admin ): Observable<any>{
    return this.apollo.mutate<any>(
      {
        mutation: gql`
          mutation createAdmin(
            $frontname:String!
            $backname:String!
            $email:String!
            $phonenumber:String!
            $password:String!
          ){
            createAdmin(
              frontname: $frontname
              backname: $backname
              email: $email
              phonenumber: $phonenumber
              password: $password){
              email
            }
          }
        `,
        variables:{
          "frontname": newAdmin.FrontName,
          "backname": newAdmin.BackName,
          "email": newAdmin.Email,
          "phonenumber": newAdmin.PhoneNumber,
          "password": newAdmin.Password
        }
      }
    )
  }

  //CITY
  getAllCity(): Observable<Query>{
    return this.apollo.query<Query>(
      {
        query: gql`
          query{
            getAllCity{
              id
              name
              latitude
              longitude
            }
          }
        `
      }
    )
  }
  












}
