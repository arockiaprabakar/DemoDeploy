import {Component,OnInit} from "@angular/core";
import {Book} from "./book";
import { BookService } from './book.service';
import { ThrowStmt } from '@angular/compiler';

@Component({
selector:'app-book',
templateUrl:'./book.component.html',
styleUrls:['./book.component.css']
})
export class BookComponent implements OnInit{

books:Book[];
book = new Book();
constructor(private _bookservice: BookService){}

ngOnInit():void{
    this.getBooks();
}

getBooks():void{
this._bookservice.getAllBooks().subscribe((bookData) => {this.books = bookData, console.log(bookData)

},(error) =>{
    console.log(error);
});
}

addBook():void{
    this._bookservice.addbook(this.book).subscribe((response)=>{console.log(response)},(error)=>{
        
        console.log(error);
    
    });
}


}