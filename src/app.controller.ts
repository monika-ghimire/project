import { Controller, Delete, Get, Param, Post, Put } from "@nestjs/common";
import { BookService } from "./book.service";

@Controller("book")

export class BookController{
// public bookService : BookService = new BookService();

constructor(private bookService : BookService){}
//add 
@Post('/add')
addBook() :string{
return this.bookService.addBook()
}

//delete book
@Delete('/delete')
deleteBook() :string{
    return this.bookService.deleteBook()
    
}

//updated book
@Put('/update')
updatedBook() :string{
    return this.bookService.updatedBook()
  
}

//find book
@Get('/findall')
findallBook() :string{
    return this.bookService.findallBook()
   
}


@Get('/findbookbyid/:id')
findOne(@Param() params: any): string {
  console.log(params.id);
  return `This action returns a #${params.id} book`;
}

}