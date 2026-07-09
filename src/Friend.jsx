export default function Friend({friends}){
    const {name,email,phone} = friends;
    return (
        <div style={{border:'2px solid green',padding:"20px",margin:"20px",borderRadius:"10px"}}>
            <h3>Name: {name}</h3>
            <p>Email: {email}</p>
            <p>Phone: {phone}</p>
        </div>
    )
}