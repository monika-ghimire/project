import { Controller, Delete, Get, Param, Post, Put } from "@nestjs/common";

@Controller("book")

export class BookController{
//add 
@Post('/add')
addBook() :string{
    return 'this will add book'
}

//delete book
@Delete('/delete')
deleteBook() :string{
    return 'this will delete book'
}

//updated book
@Put('/update')
updatedBook() :string{
    return 'this will delete book'
}

//find book
@Get('/findall')
findallBook() :string{
    return 'this will find all book'
}


@Get('/findbookbyid/:id')
findOne(@Param() params: any): string {
  console.log(params.id);
  return `This action returns a #${params.id} book`;
}

}