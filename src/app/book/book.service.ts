import {Http, Response , RequestOptions, Headers} from '@angular/http';
import {  Injectable} from "@angular/core";
import { Observable } from "rxjs/Observable";
import { Book} from "./book";
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';

@Injectable()
export class BookService{
    constructor(private _httpService:Http){}

    getAllBooks(): Observable<Book[]>{
        return this._httpService.get("http://localhost:8080/AngularWithSpringMVC/api/book").map((response:Response)=> response.json()).catch(this.handleError);
       
        
    }

    addbook(book:Book){
        let body = JSON.stringify(book);
        let headers = new Headers({'content-type':'application/json'});
        let option = new RequestOptions({headers:headers});
        return this._httpService.post("http://localhost:8080/AngularWithSpringMVC/api/book",body,option);

    }


    private handleError(error:Response){
        return Observable.throw(error);
        
    }
}