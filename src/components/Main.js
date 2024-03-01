import React from 'react'
import Card from './Card'
import { useState } from 'react';
import axios from 'axios';

function Main() {
    const [search, setSearch] = useState("");
    const [bookData, setData] = useState([]);
    const searchBook = (evt) => {
        if (evt.key === "Enter") {
            axios.get('https://www.googleapis.com/books/v1/volumes?q=' + search + '&key=AIzaSyBrNFXJRFhEDJofPvAhZ7WY9vu0qrIz8mc' + '&maxResults=40')
                .then(res => setData(res.data.items))
                .catch(err => console.log(err))
        }

    }
    return (
        <>
            <div class="">
                <div className="container mx-auto">
                    <div className="title flex flex-col items-center mt-10 justify-center text-center mx-auto  ">
                        <div className="imgContainer flex items-center justify-center text-center md:items-center md:justify-between md:text-center">
                            <img width={70} src={require("../components/logo.jpg")} alt="" />
                            <div className="bg-red=500">
                                <h1 className="text-3xl font-semibold leading-6 ml-0">Book <p className='font-light leading-6'>Store</p></h1>
                            </div>
                        </div>
                        <span className="text-gray-500 text-[12px]">Your Online Liabrary</span>
                    </div>
                    {/* <div className="row2">
                        <h2>Find Your Book</h2>
                        <div className="search">
                            <input type="text" placeholder='search'
                                value={search}
                                onChange={e => setSearch(e.target.value)}
                                onKeyPress={searchBook}
                            />
                            <button><i class="fa-solid fa-magnifying-glass"></i></button>
                        </div>
                        <img src="./liab2.png" alt="" />
                    </div> */}
                    <div className="flex flex-col md:flex-row max-w-[1200px] mx-auto mt-10" >
                        <div className='max-w-[600px]'>
                            <div className="Image  ">
                                <div className="Img w-[380px] md:w-full mx-auto">
                                    <img className="rounded-3xl" src={require("./bookStore1.webp")} />
                                </div>
                            </div>
                        </div>
                        <div className="Text flex flex-col mx-auto sm:max-w-[400px] md:max-w-[500px] ">
                            <div className="intro text-center p-3">
                                <h1 className="text-3xl font-semibold tracking-wider mb-4 mt-4" >Find your next great read Here</h1>
                                <p className='text-gray-600'>Browse a catalog of thousands of ebooks in this BookStore.
                                    Search any of your favourite book and read anywhere anytime with absolutely free of cost.
                                    Try a new romantic, fiction, science, or non fiction book everyday.
                                </p>
                            </div>
                            <div className="search p-y-2 gap-2 md:gap-x-2 mt-5 md:mt-6 items-center text-center w-full flex flex-col md:flex-row justify-center">
                                <div>
                                <input className="p-3 w-[350px] border-4 rounded-lg" type="text" placeholder='search'
                                    value={search}
                                    onChange={e => setSearch(e.target.value)}
                                    onKeyPress={searchBook}
                                />
                                </div>
                                <div className="flex items-center justify-center">
                                    <button className='bg-teal-400 hover:bg-teal-600 text-white rounded-xl p-3 text-[15px]'>Search</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

            </div>
                <div className="container gap-5 justify-center items-center grid md:grid-cols-4 mx-auto max-w-[1200px] mt-16">
                    {
                        <Card book={bookData} />
                    }
                </div>
        </>
    )
}

export default Main
