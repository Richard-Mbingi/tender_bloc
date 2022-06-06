//TODO: Button hover color

import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import {FaFacebookSquare, FaTwitter, FaLinkedinIn, FaGooglePlay} from 'react-icons/fa'

import styles from '../styles/Home.module.css'
import logo from '../public/images/logo.png'
import Link from 'next/link'

export default function Home() {
  return (
    <>
    <div className='bg-primary h-screen flex flex-col justify-between px-16 py-8 justify-center'>
    {/* Navbar */}
    <div className='flex flex-row justify-between items-center'>
      <div className='flex flex-row items-center space-x-2'>
        <Image src={logo} alt="logo" height={50} width={50}/>
        <h1 className='font-logo font-bold text-2xl'>Tenderbloc</h1>
      </div>
      <div className="space-x-3">
        <Link href='/'>Services</Link>
        <Link href='/'>Features</Link>
        <Link href='/'>Payment</Link>
        <Link href='/'>Pricing</Link>
      </div>
      <div className="space-x-3">
        <Link href='/'>Sign in</Link>
        <button className='button hover:bg-primary'>Sign Up</button>
      </div>
    </div>
    {/* Section One */}
    <div className=''>
      <h1 className="font-mono text-5xl">Consetetur sadipscing
        elitr.</h1>
    </div>
    {/* Section Two */}
    {/* Section Three */}
    <div>  
      <h2 className="font-mono text-4xl">Lorem ipsum dolor sit<br/> amet, consetetur<br/> sadipscing elitr.</h2>
      <div className='bg-secondary bg-opacity-20 rounded max-w-fit py-10 px-8'>
        <h3 className='font-mono font-bold text-3xl'>12.9%</h3>
        <p className='text-lg'>Last year performance<br/>above SMP</p>
      </div>
    </div>
    {/* Section Four */}
    <div>
      <h2 className='font-mono text-4xl font-bold'>Contact Us</h2>
      <div className='border-2 border-secondary rounded-md my-3 p-8 max-w-3xl'>
        <form action="" method="post">
          <div className='grid grid-cols-2 gap-4'>
          <input placeholder='First Name' type="text" name="first" id="first" />
          <input placeholder='Second Name' type="text" name="second" id="second" />
          <input placeholder='Email' type="email" name="email" id="email" />
          <input placeholder='Phone' type="tel" name="phone" id="phone" />
          <input placeholder='Send us a message' type="text" name="message" id="message" />
          </div>
          <button type='submit' className='button mt-4 justify-center'>Send</button>
        </form>
      </div>
    </div>
    {/* Footer */}
    </div>
    <div className="bg-secondary text-primary p-8">
      <div className='flex flex-row justify-between p-4'>
        <div><h2 className='font-mono font-bold text-3xl'>Download the <br/> free app today</h2></div>
        <div className='flex flex-row space-x-4 items-center'>
          <p className='opacity-25'>Only Available on Android</p>
          <button type='submit' className='button'><FaGooglePlay className='mr-2 '/>Download for Free</button>
        </div>
      </div>
      <div className='flex flex-row justify-between p-4'>
        <Link href="/">Terms and Conditions</Link>
        <Link href="/">Privacy policy</Link>
        <p className='opacity-25'>© 2021 Natural. All rights reserved</p>
        <div className='flex flex-row space-x-4 text-primary'>
          <FaFacebookSquare/>
          <FaTwitter/>
          <FaLinkedinIn/>
        </div>
      </div>
    </div>
    </>
  )
}