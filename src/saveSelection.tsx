import React from 'react';

interface Props {
    titles: Title[];
    selectedTitles: Title[];
    selectionArray: Function;
}

export const SaveSelection: React.FC<Props> = ({ titles, selectedTitles, selectionArray }) => {

    return (
        <form>
            <button
                type="submit"
                onClick={e => {
                    e.preventDefault();
                    selectedTitles = [];
                    selectionArray(titles={titles}, selectedTitles={selectedTitles});
                }}>
            Save Selection
            </button>
        </form>
    );
};