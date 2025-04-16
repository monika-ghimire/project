import { Injectable } from "@nestjs/common"

@Injectable()
export class BookService{
   
    addBook() :string{
        return 'this will add book'
    }
    
    //delete book
    deleteBook() :string{
        return 'this will delete book'
    }
    
    //updated book
    updatedBook() :string{
        return 'this will delete book'
    }
    
    //find book
    findallBook() :string{
        return 'this will find all book'
    }
}