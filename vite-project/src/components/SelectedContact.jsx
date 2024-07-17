import { useState, useEffect } from "react"

export default function SelectedContact({selectedContactId, setSelectedContactId}){
    const [contact, setContact] = useState(null);
    console.log("Contact:", contact);
    
    useEffect(() => {
        async function fetchContact(){
            try{
                const response = await fetch(`https://fsa-jsonplaceholder-69b5c48f1259.herokuapp.com/users/${selectedContactId}`);
                const result = await response.json();
                console.log(result);
                setContact(result);
            } catch (error){
                console.error(error);
            }
        }
        fetchContact();

        const returnButton = document.querySelector('#return');
        if(returnButton !== null){
            returnButton.addEventListener('click', function(e){
                e.preventDefault();
                setSelectedContactId(null);
            })
        }
    }, []);

    return (
    <>
        <div>
            <p>Name: {contact?.name}</p>
            <p>Contact ID: {contact?.id}</p>
            <p>Username: {contact?.username}</p>
            <p>Email: {contact?.email}</p>
            <p>Phone #: {contact?.phone}</p>
            <p>Website: {contact?.website}</p>
            <button id="return">Return</button>
        </div>
    </>
    )
}