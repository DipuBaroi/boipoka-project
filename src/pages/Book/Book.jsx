import React from 'react';
import { FaStarHalfAlt } from 'react-icons/fa';

const Book = ({ book }) => {
    console.log(book);
    const { bookName, author, image, rating, category, yearOfPublishing, tags } = book
    return (
        <div className="card bg-base-100 shadow-sm border p-6">
            <figure className='p-3 bg-gray-100'>
                <img className='h-[166px]'
                    src={image} />
            </figure>
            <div className="card-body">
                <div className='flex justify-center gap-16 mb-3'>
                    {
                        tags.map((tag, index)=><button key={index}>{tag}</button>)
                    }
                </div>
                <h2 className="card-title">
                   {bookName}
                    <div className="badge badge-secondary">{yearOfPublishing}</div>
                </h2>
                <p>By: {author}</p>
                <div className="card-actions justify-between mt-2 border-t border-dashed pt-3">
                    <div className="badge badge-outline">{category}</div>
                    <div className="badge badge-outline">{rating}<FaStarHalfAlt className='text-yellow-400'></FaStarHalfAlt></div>
                </div>
            </div>
        </div>
    );
};

export default Book;