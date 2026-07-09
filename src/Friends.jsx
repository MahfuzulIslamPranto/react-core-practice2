import { use } from "react";
import Friend from './Friend'
export default function Friends({ fetchPromise }){
    const friends = use(fetchPromise);
    return(
        <div>
            <h1>Your total friends: {friends.length}</h1>
            {
                friends.map(friends => <Friend friends={friends}></Friend>)
            }
        </div>
    )
}