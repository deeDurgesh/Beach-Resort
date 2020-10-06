// using room consumer
/*import React from 'react'
import RoomFilter from './RoomFilter'
import RoomList from './RoomList'
import {RoomConsumer} from '../context'


function RoomContainer() {
    return (
        <RoomConsumer>
            {(value)=> {
                const {rooms, sortedRooms, loading} = value
                if(loading){
                    return ('loading...')
                }
                return (
                <div>
                    hello from room container
                    <RoomFilter rooms={rooms}/>
                    <RoomList rooms={sortedRooms}/>
                </div>)
            }}
        </RoomConsumer>
       
    )
}

export default RoomContainer
*/

//using higher order function
import React from 'react'
import RoomFilter from './RoomFilter'
import RoomList from './RoomList'
import {withRoomConsumer} from '../context'

function RoomContainer ({context}){
    const {loading, rooms, sortedRooms} = context
    if(loading){
        return ('loading...')
    }
    return (
    <div>
        <RoomFilter rooms={rooms}/>
        <RoomList rooms={sortedRooms}/>
    </div>)
}

export default withRoomConsumer(RoomContainer)