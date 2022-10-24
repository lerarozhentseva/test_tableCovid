import React from 'react';

export default function Posts(props) {
    return (
        <table className="table table-success">
            <tbody>
            <tr>
                <th scope="row">
                    <h5 className="card-title">{props.post.title}</h5>
                </th>
            </tr>
            </tbody>
        </table>
    )
}
