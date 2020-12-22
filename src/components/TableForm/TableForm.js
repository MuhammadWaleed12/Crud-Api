import React from 'react';


const tableForm= (props) => {
    //const data =Object.keys(props.values);
    //data.map(e => {
      //  return
    //})
    return(
        <table className="ui celled table">
            <thead>
            <tr>
                <th>Key</th>
                <th>Name</th>
                <th>Email</th>
                <th>Age</th>
                <th>Gender</th>
                <th>Action</th>
            </tr>
            </thead>
            <tbody>
            <tr>
                <td data-label="Key">{props.key}</td>
                <td data-label="Name">{props.name}</td>
                <td data-label="Email">{props.email}</td>
                <td data-label="Age">{props.age}</td>
                <td data-label="Gender">{props.gender}</td>
                <td>
                    <button>Edit</button>
                    <button>Delete</button>
                </td>
            </tr>
            </tbody>
        </table>
    )
}

export default tableForm;