import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'

import styles from '../styles/Home.module.css'
import logo from '../public/images/logo.png'
import Link from 'next/link'

export default function Home() {
  return (
    <div className='bg-primary h-screen'>
    {/* Navbar */}
    <div className='flex flex-row justify-between items-center'>
      <div className='flex flex-row items-center space-x-2'>
        <Image src={logo} alt="logo" height={50} width={50}/>
        <h1 className='font-logo font-bold '>Tenderbloc</h1>
      </div>
      <div className="space-x-3">
        <Link href='/'>Services</Link>
        <Link href='/'>Features</Link>
        <Link href='/'>Payment</Link>
        <Link href='/'>Pricing</Link>
      </div>
      <div className="space-x-3">
        <Link href='/'>Sign in</Link>
        <button>Sign Up</button>
      </div>
    </div>
    {/* Section One */}
    <div className=''>
      <h1>Consetetur sadipscing
        elitr.</h1>
    </div>
    {/* Section Two */}
    {/* Section Three */}
    <div>  
      <h2>Lorem ipsum dolor sit amet, consetetur sadipscing elitr.</h2>
      <div>
        <h3>Title</h3>
        <p>Last year performance above SMP</p>
      </div>
    </div>
    {/* Section Four */}
    <div>
      <h2>Contact Us</h2>
      <div className='border-2 border-secondary flex '>
        <form action="" method="post">
          <input placeholder='First Name' type="text" name="first" id="first" />
          <input placeholder='Second Name' type="text" name="second" id="second" />
          <input placeholder='Email' type="email" name="email" id="email" />
          <input placeholder='Phone' type="tel" name="phone" id="phone" />
          <input placeholder='Send us a message' type="text" name="message" id="message" />
          <button type='submit'>Send</button>
        </form>
      </div>
    </div>
    </div>
  )
}