import Footer from '@/components/footer'
import Navbar from '@/components/navbar'
import React from 'react'

const Layout = ({ children }: { children: React.ReactNode }) => {
    return (
        <main>
            <Navbar />
            <div className='w-full min-h-screen'>
                {children}
            </div> 
            <Footer />
        </main>
    )
}

export default Layout
