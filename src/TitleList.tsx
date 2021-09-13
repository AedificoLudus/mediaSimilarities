import { TitleListItem } from './TitleListItem';

interface Props {
    titles: Title[];
    toggleTitle: ToggleTitle;
}

export const TitleList: React.FC<Props> = ({ titles, toggleTitle }) => {

   return (
        <ul>
            {titles.map(title => (
                <TitleListItem key={title.text} title={title} toggleTitle={toggleTitle} />
            ))}
        </ul>
   );
};