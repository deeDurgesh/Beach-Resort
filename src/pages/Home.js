import React from 'react'
import Hero from '../components/Hero'
import Banner from '../components/Banner'
import {Link} from 'react-router-dom'
import Services from '../components/Services'
import FeaturedRooms from '../components/FeaturedRooms'

function Home() {
    return (
        <div>
        <Hero>
            <Banner title="luxurious rooms" subtitle="deluxe rooms starting from $299">
                <Link to="/rooms/" className="btn-primary">Our Rooms</Link>
            </Banner>
        </Hero>
        <Services />
        <FeaturedRooms />
        </div>
    )
}

export default Home
