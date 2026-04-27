import React, { useState } from 'react'

const DynamicForm = () => {
    const [fields, setFields] = useState([
        {
            name: "",
            email: ""
        }
    ]);

    const handleChnage = (index, e) => {
        const updateFields = [...fields];
        updateFields[index][e.target.name] = e.target.value;
        setFields(updateFields);
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(fields);
    }

    const addField = () => {
        setFields([...fields, { name: "", email: "" }])
    }

    const removeField = (index) => {
        const updated = fields.filter((_, i) => i !== index);
        setFields(updated);
    };

    return (
        <div>
            <h2>Dynamic Form</h2>
            <form onSubmit={handleSubmit}>
                {fields.map((field, index) => (
                    <div key={index}>
                        <input
                            type="text"
                            name="name"
                            placeholder='name'
                            value={field.name}
                            onChange={(e) => handleChnage(index, e)}
                        />
                        <input
                            type="text"
                            name="email"
                            placeholder='email'
                            value={field.email}
                            onChange={(e) => handleChnage(index, e)}
                        />
                        <button
                            type='button'
                            onClick={() => removeField(index)}
                        >
                            remove
                        </button>
                        <button
                            type='button'
                            onClick={addField}
                        >
                            Add More
                        </button>
                    </div>
                ))}
                <br /><br />
                <button type="submit">Submit</button>
            </form>
        </div>
    )
}

export default DynamicForm
