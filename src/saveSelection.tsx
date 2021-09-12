import React, { useState } from 'react';

interface Props {
    titles: Title[];
}

export const SaveSelection: React.FC<Props> = ({ titles }) => {

    const selectedTitles: Title[] = [];

    return (
        <form>
            <button
                type="submit"
                onClick={e => {
                    e.preventDefault();
                }}
            >
            Save Selection
            </button>
        </form>
    );
};