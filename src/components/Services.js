import React, { Component } from 'react'
import Title from './Title'
import {FaBeer, FaHiking, FaShuttleVan, FaCocktail} from 'react-icons/fa'

export default class Services extends Component {
    state={
        service: [
            {
                icon: <FaCocktail />,
                title: "Free Cocktails",
                info: "Get here free cocktails"
            },
            {
                icon: <FaHiking />,
                title: "Free Hikings",
                info: "Go for free hikings here"
            },
            {
                icon: <FaShuttleVan />,
                title: "Free Shuttle",
                info: "Get Shuttle from here"
            },
            {
                icon: <FaBeer />,
                title: "Free Strong Beer",
                info: "Get strong beer from here"
            }
        ]
    }
    render() {
        return (
            <section className="services">
                <Title title="services"/>
                <div className="services-center">
                     {this.state.service.map((items, index)=> {
                         return <article key={index} className="service">
                             <span>{items.icon}</span>
                             <h6>{items.title}</h6>
                             <p>{items.info}</p>
                         </article>
                })}
                </div>
            </section>
        )
    }
}
