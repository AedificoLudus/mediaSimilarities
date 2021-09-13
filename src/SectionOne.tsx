import React, { useEffect, useState } from 'react';
import { TitleList } from './TitleList';
//import { AddTitleForm } from './AddTitleForm';
import axios from 'axios';
import { SaveSelection } from './saveSelection';
import { TitleDropdown } from './radioButton';

const initialTitles: Title[] = [];

function SectionOne() {
    const [titles, setTitles] = useState(initialTitles);
    var selectedTitles:Title[] = [];

    const toggleTitle = (selectedTitle: Title) => {
        const newTitles = titles.map(title => {
            if (title === selectedTitle) {
                return {
                    ...title,
                    complete: !title.complete,
                };
            }
            return title;
        });
        setTitles(newTitles);
    };

    const addTitle: AddTitle = (text: string) => {
        //add a title to the list
        const newTitle = {text, complete: false};
        setTitles([...titles, newTitle]);
    };

    useEffect( () => {
        //get titles from database
        axios.get('/api/titles').then( response => {
            const newTitles = response.data.map((el:any) => ({
                text: el.titleName,
                complete: false,
            }));
          
        setTitles(newTitles);
        })
    }, [] )

    return (
        <>
            <TitleList titles={titles} toggleTitle={toggleTitle} />;
            <SaveSelection titles={titles} selectedTitles={selectedTitles} />;
        </>
    )
}

export default SectionOne;

//<AddTitleForm addTitle={addTitle} />;



//console.log(response.data)
//          response.data.forEach(addTitle('test'))