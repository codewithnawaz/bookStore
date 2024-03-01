import React from "react";
import { useState } from "react";
import { IoMdClose } from "react-icons/io";

const Modal = ({ show, items, onClose }) => {
    // const textLimit = () => {
    //     let words = items.volumeInfo.description;
    //     if (words.length > 25) {
    //         words = words.subSting(0, 25) + " ... ";
    //     }
    // }
    if (!show) {
        return null;
    }
    let thumbnails = items.volumeInfo.imageLinks && items.volumeInfo.imageLinks.smallThumbnail;
    return (
        <div className="overlay w-full h-[100vh] p-5 fixed flex items-center justify-center text-center top-0 xl:top-0 bottom-0 left-0 right-0	">
            <div className="overlay-inner bg-slate-100 w-[700px] h-[700px] xl:h-[80vh] relative p-8  border-4 border-teal-500 rounded-lg">
                <button onClick={onClose} className="absolute right-1 top-1"><IoMdClose />
                </button>
                <div className="inner-box mt-2 ">
                    <img className="flex justify-center mx-auto" src={thumbnails} alt="" />
                    <div className="info mt-10 p-x-2 ">
                        <h1 className="text-2xl font-bold tracking-wider mb-2">{items.volumeInfo.title}</h1>
                        <h3 className="text-lg text-gray-700 font-semibold mb-2">{items.volumeInfo.authors}</h3>
                        <h4 className="text-md text-gray-700">{items.volumeInfo.publisher}<span>{items.volumeInfo.publishedDate}</span></h4><br />
                        <a href={items.volumeInfo.previewLink}><button className="bg-blue-400 text-white p-2 rounded-md text-[15px] mb-5">Read more</button></a>
                    </div>
                <h4 className="discription text-[12px] text-justify " >{items.volumeInfo.description.substring(0, 500) + ".. Read more"}</h4>
                </div>
            </div>
        </div>
    )
}
export default Modal;