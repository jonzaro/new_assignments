import React, {useState} from "react";
import AddBountyForm from "./AddBountyForm";
// const {v4: uuidv4} = require("uuid")


export default function Bounty(props) {
    const {firstName, lastName, living, bountyAmount, type, _id} = props
    const [editToggle, setEditToggle] = useState(false)

    return (
        <div className="bounty">   
        { !editToggle ?
            <>
                <h1>Bounty: { props.firstName } { props.lastName }</h1>
                <p> Living: { props.living === "Alive" ? "Alive" : "Dead"}</p>
                <p> Reward: {props.bountyAmount } credits</p>
                <p> Type: { props.type }</p>
                <button 
                    className="delete-button"
                    onClick={() => props.deleteBounty(props._id)}
                > Delete Bounty</button>
                <button
                    className="editButton"
                    onClick={() => setEditToggle(prevToggle => !prevToggle)}
                    >Edit</button>
            </>
            :
            <>
                <AddBountyForm 
                    firstName={firstName}
                    lastName={lastName}
                    living={living}
                    bountyAmount={bountyAmount}
                    type={type}
                    _id={_id}
                    key={_id}
                    //DO I NEED A UNIQUE KEY HERE?
                    buttonText="Submit Edit"
                    submit={props.editBounty}
                />
                <button
                    onClick={() => setEditToggle(prevToggle => !prevToggle)}>
                        Close
                </button>
            </>
        }
        </div>
    )
}