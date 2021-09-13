import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Link } from "react-router-dom"

interface Props {
    titles: Title[];
    selectedTitles: Title[];
}

export const SaveSelection: React.FC<Props> = ({ titles, selectedTitles }) => {

    return (
        <form>
            <Link to="/SectionTwo">
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
                        console.log(selectedTitles);
                    }}>
                Save Selection
                </button>
            </Link>
        </form>
    );
};