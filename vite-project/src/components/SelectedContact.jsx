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
    }, [selectedContactId]);

    return (
/*         <table>
            <thead>
                <tr>
                    <th colSpan="3">{contact?.name}</th>
                </tr>
            </thead>
            <tbody>
                <tr>
                    <td>Contact ID: {contact?.id}</td>
                    <td>Email: {contact?.email}</td>
                    <td>Phone #: {contact?.phone}</td>
                </tr>
            </tbody>
        </table> */
    <>
        <div>Name: {contact?.name}</div>
        <div>Contact ID: {contact?.id}</div>
        <div>Username: {contact?.username}</div>
        <div>Email: {contact?.email}</div>
        <div>Phone #: {contact?.phone}</div>
        <div>Website: {contact?.website}</div>
        <button id="return">Return</button>
    </>
    )
}