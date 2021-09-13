import React, { useState } from 'react';

interface Props {
    titles: Title[];
    selectedTitles: Title[];
}

export const SaveSelection: React.FC<Props> = ({ titles, selectedTitles }) => {

    return (
        <form>
            <button
                type="submit"
                onClick={e => {
                    e.preventDefault();
                    selectedTitles = [];
                    titles.map(title => {
                        if (title.complete === true) {
                            selectedTitles = [...selectedTitles, title]
                        }
                    })
                    console.log(selectedTitles)
                }}
            >
            Save Selection
            </button>
        </form>
    );
};