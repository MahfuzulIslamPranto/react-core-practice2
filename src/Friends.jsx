import { use } from "react";

export default function Friends({ fetchPromise }){
    const friends = use(fetchPromise);
    return(
        <div>
            <h1>Your total friends: {friends.length}</h1>
        </div>
    )
}