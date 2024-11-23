import { useState } from 'react';

const AddToken = ({ onAdd }) => {
    const [name, setName] = useState('');

    const onSubmit = (e) => {
        e.preventDefault();

        if (!name) {
            alert('Please add a name');
            return;
        }

        onAdd({ name });

        setName('');
    }

    return (
        <form className="add-form container" onSubmit={onSubmit}>
            <div className="form-control container">
                <label>Token: </label>
                <input type="text" placeholder='Add New Token Type' value={name} onChange={(e) => setName(e.target.value)} />
            </div>

            <input type="submit" value="Save Token" className='btn btn-block' />
        </form>
    )
}

export default AddToken;