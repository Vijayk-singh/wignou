import React from 'react'
import Book from './Body/Book';
import { Infobox } from './Body/Infobox';
import PYQ from './Body/PYQ';
import Footer from './Footer/Footer';
import { Alert } from './minicomp/Alert';



export const Home = () => {
  return (
    <>
    <div className='container'><Alert alert="!Please Complete your Re-Registration before 31st December, 2022" /></div>
    <Infobox/>
    <Book/>
    <div className='container'>
    <Alert alert1="Notes will be available soon."/>
    <PYQ/>
    <Footer/>
 
    </div>
    </>
  )
}
