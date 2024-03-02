import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";
import "./accountPage.css";

export default function accountOptionsPage() {
    const spaceBetweenStyle = {
        margin: '15px', // Adjust the margin as needed
      };
    
    return (
        <div class="accountOptions-container"> 
    
            <div class="accountOptions-field-details">
                <button>
                    <h3> Account Details</h3>
                    <h4> Email: john.smith@ucalgary.ca</h4>
                </button>
            </div>

            <div class="accountOptions-field-changePassword" style={spaceBetweenStyle}>
                <button>
                    Change Password
                </button>
            </div>

            <div class="accountOptions-field-deleteAccount" style={spaceBetweenStyle}>
                <button>
                    Delete Account
                </button>
            </div>

            <div class=".accountOptions-field-logOut" style={spaceBetweenStyle}>
                <button>
                    LOG OUT
                </button>
            </div>
        </div>
        );
}