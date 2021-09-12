import React, { useState } from 'react';

interface Props {
    addTitle: AddTitle;
}

export const AddTitleForm: React.FC<Props> = ({ addTitle }) => {
    const [text, setText] = useState('');
    return (
        <form>
            <input
                type="text"
                value={text}
                onChange={e => {
                    setText(e.target.value);
                }}
            />
            <button
                type="submit"
                onClick={e => {
                    e.preventDefault();
                    addTitle(text);
                    setText('');
                }}
            >
            Add Title
            </button>
        </form>
    );
};