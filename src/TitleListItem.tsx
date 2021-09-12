import React from 'react';

interface Props {
    title: Title;
    toggleTitle: ToggleTitle;
}

export const TitleListItem: React.FC<Props> = ({ title, toggleTitle }) => {
    return (
        <li>
            <label
            style={{}}
            >
            <input
                type="checkbox"
                checked={title.complete}
                onClick={() => {
                toggleTitle(title);
                }}
            />{' '}
            {title.text}
            </label>
        </li>
    );
};