interface Title {
    text: string;
    complete?: boolean;
}

type ToggleTitle = (selectedTitle: Title) => void;

type AddTitle = (text: string) => void;

type SaveTitle = (title: Title) => void;