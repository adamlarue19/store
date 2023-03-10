import React from 'react'
import HeroBanner from '@/components/HeroBanner'
import ShoeSection from '@/components/ShoeSection'
import Shoe from '@/components/Shoe'
import Kid from '@/components/Kid'


import { client } from '../lib/client'
import NewsLetter from '@/components/NewsLetter'


const Home = ({ products, shoes, kids }) => {
  return (
    <>
      
      <HeroBanner />
      <div id='mens' className='shoe-section'>
      <h2 className='section-title'>Men</h2>
      <div className='shoe-container'>
        {products?.map((product) => <ShoeSection key={product._id} product={product} />)}
      </div>
      </div>

      <div id='womens' className='shoe-section'>
      <h2 className='section-title'> Women</h2>
      <div className='shoe-container'>
        {shoes?.map((shoe) => <Shoe key={shoe._id} shoe={shoe} />)}
      </div>
      </div>
      <div id='kids' className='shoe-section'>
      <h2 className='section-title'> Kids</h2>
      <div className='shoe-container'>
        {kids?.map((kid) => <Kid key={kid._id} kid={kid} />)}
      </div>
        </div>

        <NewsLetter />
       
    </>
  )
}

export const getServerSideProps = async () => {
  const productQuery = '*[_type == "product"]';
  const products = await client.fetch(productQuery);

  const shoeQuery = '*[_type == "shoe"]';
  const shoes = await client.fetch(shoeQuery);

  const kidQuery = '*[_type == "kid"]';
  const kids = await client.fetch(kidQuery);



  return {
    props: { products, kids, shoes }
  }
}
export default Home
