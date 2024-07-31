import { UserFavouriteFoods } from "./UserFavouriteFoods"
export function UserProfile(){
    return (
        <div id="user-profile">
            <p>Username</p>
            <div>
                <span>Email:</span>
                <span>fredrick@gmail.com</span>
            </div>
            
            <UserFavouriteFoods />
        </div>
        
    )
}