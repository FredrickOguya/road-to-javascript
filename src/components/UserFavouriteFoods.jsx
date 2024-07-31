import { createElement } from "react";

export function UserFavouriteFoods(){
    return createElement('section', null,
    <span>Favourite foods:</span>,
    <br />,
    <ul>
        <li>sushi</li>
        <li>Pizza</li>
        <li>Sembe</li>
    </ul>
    );       
}