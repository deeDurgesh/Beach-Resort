import React from 'react'
import {useContext} from 'react'
import {RoomContext} from '../context'
import Title from '../components/Title'

//get unique value for select
    const getUnique = (items, value) => {
        return [...new Set(items.map(item=> item[value]))]
    }

function RoomFilter({rooms}) {
    const context = useContext(RoomContext)
    const {
        handleChange, 
        type, 
        capacity, 
        price, 
        minPrice, 
        maxPrice, 
        minSize, 
        maxSize, 
        breakfast, 
        pets} = context

        //get unique type of select
        let types = getUnique(rooms,'type')
        //add all in the select type
        types = ['all', ...types];
        //map to jsx
        types = types.map((item,index)=> {
           return <option key={index} value={item}>{item}</option>
        })

        //get unique capacity of select
        let people = getUnique(rooms,'capacity')
        //add all in the select capacity
        people = ['all', ...people];
        //map to jsx
        people = people.map((item,index)=> {
           return <option key={index} value={item}>{item}</option>
        })
    return (
        <section className="filter-container">
                <Title title='Search Rooms'/>
                <form className='filter-form'>
                    {/*start select */}
                        <div className='form-group'>
                            <label htmlFor='type'>room type</label>
                            <select
                             name='type'
                             id='type'
                             value={type}
                             onChange={handleChange}
                             className='form-control'
                            >{types}</select>

                        </div>
                    {/*end select */}
                    {/*start guests */}
                    <div className='form-group'>
                            <label htmlFor='capacity'>Guests</label>
                            <select
                             name='capacity'
                             id='capacity'
                             value={capacity}
                             onChange={handleChange}
                             className='form-control'
                            >{people}</select>

                        </div>
                    {/*end guests */}
                    {/* price range */}
                    <div className="form-group">
                        <label htmlFor="price">
                            room price ${price}
                        </label>
                        <input 
                            type="range" 
                            id="price" 
                            className="form-control"
                            name="price" 
                            max={maxPrice} 
                            min={minPrice} 
                            value={price} 
                            onChange={handleChange} />
                    </div>
                    {/* end price range */} 
                    {/* size */}
                    <div className="form-group">
                        <label htmlFor="size">Room Size</label>
                        <div className="size-inputs">
                            <input 
                                id="size" 
                                name="minSize" 
                                className="size-input" 
                                type="number" 
                                onChange={handleChange} 
                                value={minSize} />
                                <input 
                                id="size" 
                                name="maxSize" 
                                className="size-input" 
                                type="number" 
                                onChange={handleChange} 
                                value={maxSize} />
                        </div>
                    </div>
                    {/* end of size */}
                    {/*extras */}
                    <div className="form-group">
                        <div className="single-extra">
                            <input 
                            type="checkbox"
                            name="breakfast"
                            id="breakfast"
                            checked={breakfast}
                            onChange={handleChange} />
                            <label htmlFor="breakfast">breakfast</label>
                        </div>
                        <div className="single-extra">
                            <input 
                            type="checkbox"
                            name="pets"
                            id="pets"
                            checked={pets}
                            onChange={handleChange} />
                            <label htmlFor="pets">Pets</label>
                        </div>
                    </div>
                    {/*end of extras */}


                </form>
        </section>
    )
}

export default RoomFilter
