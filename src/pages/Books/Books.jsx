import React, { Suspense } from 'react';
import Book from '../Book/Book';

const Books = ({books}) => {
    return (
        <div>
            <h3 className='text-3xl text-center font-bold'>Books</h3>
            {
                <Suspense fallback={<span className='text-3xl'>L O A D I N G . . . </span>}>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 my-10">
                        {
                        books.map((book)=><Book key={book.bookId} book={book}></Book>)
                    }
                    </div>
                </Suspense>
            }
        </div>
    );
};

export default Books;