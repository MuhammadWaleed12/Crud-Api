import React from 'react';


const tableForm= (props) => {
    return(
        <table className="ui celled table">
            <thead>
            <tr>
                <th>Key</th>
                <th>Name</th>
                <th>Email</th>
                <th>Age</th>
                <th>Gender</th>
            </tr>
            </thead>
            <tbody>
            <tr>
                <td data-label="Key">{props.key}</td>
                <td data-label="Name">{props.name}</td>
                <td data-label="Email">{props.email}</td>
                <td data-label="Age"></td>
                <td data-label="Gender"></td>
            </tr>
            </tbody>
        </table>
    )
}

export default tableForm;