import React from "react";
import Section from "./Section";

function Tabs({ children, buttons, ButtonsContainer = Section }) {    
    return(
        <div>
            <ButtonsContainer>{buttons}</ButtonsContainer>
            {children}
        </div>        
    );
}

export default Tabs;