import React from 'react'
import Modal from './Modal';
import { useState } from "react";

const Card = ({ book }) => {
const [show, setShow] = useState(false);
const [bookItem, setItem] = useState();
console.log(book);
    return (
        <>
            {
                book.map((items) => {
                    let thumbnails = items.volumeInfo.imageLinks && items.volumeInfo.imageLinks.smallThumbnail;
                    let amount = items.saleInfo.listPrice && items.saleInfo.listPrice.amount;
                    let title = items.volumeInfo && items.volumeInfo.title
                    if (thumbnails !== undefined && amount !== undefined) {
                        return (
                            <>
                            <div className="card w-[200px] flex items-center justify-center text-center flex-col rounded-lg border-[1px] border-gray-500  hover:scale-105 duration-100" onClick={()=>{setShow(true);setItem(items)}}>
                               <div className='h-[200px] w-[190px] object-fill overflow-hidden mt-1'>
                                <img className="h-full w-full rounded-lg" src={thumbnails} alt="" />
                               </div>
                                <div className="bottom">
                                    <h3 className="title text-[15px] mt-2 mb-2 font-semibold">{title}</h3>
                                    <p className="amount text-gray-600 font-semibold">&#8377;{amount}</p>
                                </div>
                            </div>
                        <Modal show={show} items={bookItem} onClose={()=>setShow(false)}/>
                        </>
                        )
                    }
                })
            }

        </>
    )
}
export default Card