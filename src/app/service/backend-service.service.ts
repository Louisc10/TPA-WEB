import { Injectable } from '@angular/core';
import { Apollo } from 'apollo-angular';
import { Observable } from 'rxjs';
import { Query } from '../models/query';
import gql from 'graphql-tag';
import { Admin } from '../models/admin';
import { Entertainment } from '../models/entertainment';
import { Train } from '../models/train';
import { Hotel } from '../models/hotel';
import { Car } from '../models/car';


@Injectable({
  providedIn: 'root'
})
export class BackendServiceService {

  constructor(private apollo: Apollo) { }

  //ADMIN
  getAdmin(email: String): Observable<Query> {
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
              language
              currency
            }
          }
        `,
        variables: {
          "email": email
        }
      }
    )
  }

  getAllAdmin(): Observable<Query> {
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
              language
              currency
            }
          }
        `
      }
    )
  }

  createAdmin(newAdmin: Admin): Observable<any> {
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
        variables: {
          "frontname": newAdmin.FrontName,
          "backname": newAdmin.BackName,
          "email": newAdmin.Email,
          "phonenumber": newAdmin.PhoneNumber,
          "password": newAdmin.Password
        }
      }
    )
  }

  updateAdmin(newAdmin: Admin): Observable<any> {
    return this.apollo.mutate<any>(
      {
        mutation: gql`
          mutation updateAdmin(
            $frontname:String!
            $backname:String!
            $email:String!
            $phonenumber:String!
            $password:String!
            $language:String!
            $currency:String!
          ){
            updateAdmin(
              frontname: $frontname
              backname: $backname
              email: $email
              phonenumber: $phonenumber
              password: $password
              language: $language
              currency: $currency
              ){
              email
            }
          }
        `,
        variables: {
          "frontname": newAdmin.FrontName,
          "backname": newAdmin.BackName,
          "email": newAdmin.Email,
          "phonenumber": newAdmin.PhoneNumber,
          "password": newAdmin.Password,
          "language": newAdmin.Language,
          "currency": newAdmin.Currency
        }
      }
    )
  }

  //CITY
  getAllCity(): Observable<Query> {
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

  //Subscription
  createSubscription(newEmail: String): Observable<any> {
    return this.apollo.mutate<any>(
      {
        mutation: gql`
          mutation createSubscription(
            $email:String!
          ){
            createSubscription(
              email: $email
            ){
              email
            }
          }
        `,
        variables: {
          "email": newEmail
        }
      }
    )
  }

  //Entertainment
  getAllEntertainment(): Observable<Query> {
    return this.apollo.query<Query>(
      {
        query: gql`
        query{
          getAllEntertainment{
            id
            name
            price
            description
            latitude
            longitude
            location
            photoLink1
            photoLink2
            photoLink3
            photoLink4
            photoLink5
            photoLink6
            category
            dateLast
          }
        }
        `
      }
    )
  }

  createEntertainment(newEntertainment: Entertainment): Observable<any> {
    return this.apollo.mutate<any>(
      {
        mutation: gql`
          mutation createEntertainment(
            $name: String!
            $latitude: String!
            $longitude: String!
            $location: String!
            $photoLink1: String!
            $photoLink2: String!
            $photoLink3: String!
            $photoLink4: String!
            $photoLink5: String!
            $photoLink6: String!
            $price: Int!
            $description: String!
            $dateLast: String!
          ){
            createEntertainment(
              name: $name
              latitude: $latitude
              longitude: $longitude
              location: $location
              photoLink1: $photoLink1
              photoLink2: $photoLink2
              photoLink3: $photoLink3
              photoLink4: $photoLink4
              photoLink5: $photoLink5
              photoLink6: $photoLink6
              price: $price
              description: $description
              dateLast: $dateLast
              ){
              name
              id
            }
          }
        `,
        variables: {
          "name": newEntertainment.name,
          "latitude": newEntertainment.latitude,
          "longitude": newEntertainment.longitude,
          "location": newEntertainment.location,
          "photoLink1": newEntertainment.photoLink1,
          "photoLink2": newEntertainment.photoLink2,
          "photoLink3": newEntertainment.photoLink3,
          "photoLink4": newEntertainment.photoLink4,
          "photoLink5": newEntertainment.photoLink5,
          "photoLink6": newEntertainment.photoLink6,
          "price": newEntertainment.price,
          "description": newEntertainment.description,
          "dateLast": newEntertainment.dateLast
        }
      }
    )
  }

  updateEntertainment(newEntertainment: Entertainment): Observable<any> {
    return this.apollo.mutate<any>(
      {
        mutation: gql`
          mutation updateEntertainment(
            $id: Int!
            $name: String!
            $latitude: String!
            $longitude: String!
            $location: String!
            $price: Int!
          ){
            updateEntertainment(
              id: $id
              name: $name
              latitude: $latitude
              longitude: $longitude
              location: $location
              price: $price
              ){
              name
              id
            }
          }
        `,
        variables: {
          "id": newEntertainment.id,
          "name": newEntertainment.name,
          "latitude": newEntertainment.latitude,
          "longitude": newEntertainment.longitude,
          "location": newEntertainment.location,
          "price": newEntertainment.price
        }
      }
    )
  }
  
  deleteEntertainment(id: number): Observable<any> {
    return this.apollo.mutate<any>(
      {
        mutation: gql`
          mutation removeEntertainment(
            $id: Int!
          ){
            removeEntertainment(
              id: $id
            ){
              id
            }
          }
        `,
        variables: {
          "id": id
        }
      }
    )
  }

  //Train
  getAllTrain(): Observable<Query> {
    return this.apollo.query<Query>(
      {
        query: gql`
          query{
            getAllTrain{
              name
              id
              dst
              src
              kelas
              price
              tipe
              timeGo
              timeArrive
              transit
            }
          }
        `
      }
    )
  }

  createTrain(item: Train): Observable<any> {
    return this.apollo.mutate<any>(
      {
        mutation: gql`
          mutation createTrain(
            $name: String!
            $src: String!
            $dst: String!
            $price: Int!
            $kelas: String!
            $tipe: String!
            $timeGo: String!
            $timeArrive: String!
          ){
            createTrain(
              name: $name
              src: $src
              dst: $dst
              price: $price
              kelas: $kelas
              tipe: $tipe
              timeGo: $timeGo
              timeArrive: $timeArrive
          
            ){
              name
              id
              dst
              src
              kelas
              price
              tipe
              timeGo
              timeArrive
            }
          }
        `,
        variables: {
          "src": item.src,
          "dst": item.dst,
          "kelas": item.kelas,
          "name": item.name,
          "price": item.price,
          "timeArrive": item.timeArrive,
          "timeGo": item.timeGo,
          "tipe": item.tipe
        }
      }
    )
  }

  updateTrain(item: Train): Observable<any> {
    return this.apollo.mutate<any>(
      {
        mutation: gql`
        mutation updateTrain($id: Int!, $name: String!, $src: String!, $dst: String!, $tipe: String!, $kelas: String!, $price: Int!, $timeGo: String!, $timeArrive: String!) {
          updateTrain(id: $id, name: $name, price: $price, kelas: $kelas, timeGo: $timeGo, timeArrive: $timeArrive, src: $src, dst: $dst, tipe: $tipe) {
            name
            id
            dst
            src
            kelas
            price
            tipe
            timeGo
            timeArrive
          }
        }
        
        `,
        variables: {
          "id": item.id,
          "kelas": item.kelas,
          "tipe": item.tipe,
          "src": item.src,
          "dst": item.dst,
          "name": item.name,
          "price": item.price,
          "timeArrive": item.timeArrive,
          "timeGo": item.timeGo
        }
      }
    )
  }

  deleteTrain(id: number): Observable<any> {
    return this.apollo.mutate<any>(
      {
        mutation: gql`
          mutation removeTrain(
            $id: Int!
          ){
            removeTrain(
              id: $id
            ){
              name
              id
              dst
              src
              kelas
              price
              tipe
              timeGo
              timeArrive
            }
          }
        `,
        variables: {
          "id": id
        }
      }
    )
  }

  //Hotel
  getAllHotel(): Observable<Query> {
    return this.apollo.query<Query>(
      {
        query: gql`
          query{
            getAllHotel{
              name
              image
              rating
              price
              review
              tipe
              jaringanHotel
              resepsionis
              ac
              lift
              tempatParkir
              restorant
              spa
              kolamRenang
              wifi
              freeLunch
              location
              address
              information
            }
          }
        `
      }
    )
  }

  createHotel(item: Hotel): Observable<any> {
    return this.apollo.mutate<any>(
      {
        mutation: gql`
          mutation createHotel(
            $name: String!
            $image: String!
            $rating: Int!
            $price: Int!
            $review: String!
            $tipe: String!
            $jaringanHotel: String!
            $resepsionis: String!
            $ac: String!
            $lift: String!
            $tempatParkir: String!
            $restoran: String!
            $spa: String!
            $kolamRenang: String!
            $wifi: String!
            $freeLunch: String!
            $location: String!
            $address: String!
            $information: String!
          ){
            createHotel(
              name: $name
              image: $image
              rating: $rating
              price: $price
              review: $review
              tipe: $tipe
              jaringanHotel: $jaringanHotel
              resepsionis: $resepsionis
              ac: $ac
              lift: $lift
              tempatParkir: $tempatParkir
              restoran: $restoran
              spa: $spa
              kolamRenang: $kolamRenang
              wifi: $wifi
              freeLunch: $freeLunch
              location: $location
              address: $address
              information: $information
            ){
              name
              id
            }
          }
        `,
        variables: {
          "name": item.name,
          "image": item.image,
          "rating": item.rating,
          "price": item.price,
          "review": item.review,
          "tipe": item.tipe,
          "jaringanHotel": item.jaringanHotel,
          "resepsionis": item.resepsionis,
          "ac": item.ac,
          "lift": item.lift,
          "tempatParkir": item.tempatParkir,
          "restoran": item.restorant,
          "spa": item.spa,
          "kolamRenang": item.kolamRenang,
          "wifi": item.wifi,
          "freeLunch": item.freeLunch,
          "location": item.location,
          "address": item.address,
          "information": item.information
        }
      }
    )
  }

  //Car
  getAllCar(): Observable<Query> {
    return this.apollo.query<Query>(
      {
        query: gql`
          query{
            getAllCar{
              id
              name
              image
              capacity
              price
              bagasi
            }
          }
        `
      }
    )
  }

  createCar(item: Car): Observable<any> {
    return this.apollo.mutate<any>(
      {
        mutation: gql`
          mutation createCar(
            $name: String!
            $capacity: Int!
            $bagasi: Int!
            $price: Int!
            $image: String!
          ){
            createCar(
              name: $name
              capacity: $capacity
              bagasi: $bagasi
              price: $price
              image: $image
            ){
              name
              id
            }
          }
        `,
        variables: {
          "name": item.name,
          "image": item.image,
          "capacity": item.capacity,
          "bagasi": item.bagasi,
          "price": item.price
        }
      }
    )
  }

  //Ticket
  getAllTicket(): Observable<Query> {
    return this.apollo.query<Query>(
      {
        query: gql`
          query{
            getAllTicket{
              id
              name
              email
              phonenumber
              detailname
              detailid
              trainid
            }
          }
        `
      }
    )
  }
  createTicket(
    name: string,
    email: string,
    phonenumber: string,
    detailname: string,
    detailid: string,
    trainid: number,
    ): Observable<any> {
    return this.apollo.mutate<any>(
      {
        mutation: gql`
          mutation createTicket(
            $name:String!
            $email:String!
            $phonenumber:String!
            $detailname:String!
            $detailid:String!
            $trainid:Int!
          ){
            createTicket(
              name: $name
              email: $email
              phonenumber: $phonenumber
              detailname: $detailname
              detailid: $detailid
              trainid: $trainid
            ){
              email
            }
          }
        `,
        variables: {
          "name": name,
          "email": email,
          "phonenumber": phonenumber,
          "detailid": detailid,
          "detailname": detailname,
          "trainid": trainid,
        }
      }
    )
  }









}
