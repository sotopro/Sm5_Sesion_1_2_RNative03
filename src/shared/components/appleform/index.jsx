import React from 'react';
import './index.css';

const AppleForm = () => {
    const handleSubmit = (event) => {
        event.preventDefault();
        alert('You have submitted the form')
    }
    return (
        <div className="wrapper">
            <h1>How about them apples</h1>
            <form onSubmit={handleSubmit}>
                <fieldset>
                    <label>
                        <p>Name</p>
                        <input name="name"/>
                    </label>
                </fieldset>
                <button type="submit">Submit</button>
            </form>
        </div>
    )
}

export default AppleForm;