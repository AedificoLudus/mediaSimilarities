import React from 'react';

interface Props {
    titles: Title[];
}

export const TitleDropdown: React.FC<Props> = ({ titles }) => {
    return (
       <div>
           {titles.map(title => <input type="radio" value={title.text} name={title.text} />)}
       </div> 
    );
};