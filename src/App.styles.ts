import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
    :root{
        --color-primary-light: #30B588;
        --color-primary: #1CB481;
        --color-primary-dark: #279470;

        --color-secondary-lighter: #5D6367;
        --color-secondary-light: #4A5257;
        --color-secondary: #424b51;
        --color-secondary-dark: #3D4348;

        --color-white: #f4f5f6;

        --font-primary: 'Open Sans', sans-serif;
        --font-text: 'Nunito Sans', sans-serif;

       
    }

    body {
        min-height: 100vh;
        margin: 0;
        padding: 0;
        color: var(--color-white);
        font-family: 'Open Sans', sans-serif;
        background-image: url('https://res.cloudinary.com/dtbemnmn4/image/upload/v1660593391/bg_rhsphu.png');
        background-size: cover;
        background-repeat: no-repeat;
        /* background: linear-gradient(138deg, var(--color-primary) 0%, var(--color-primary-dark) 100%); */
        scroll-behavior: smooth;
        user-select:none;
        overflow-x: hidden;
      
    }

    /* width */
::-webkit-scrollbar {
  width: 5px;
}

 
/* Handle */
::-webkit-scrollbar-thumb {
  background: #8892b0; 
  border-radius: 10px;
}


    
    *{
        box-sizing: border-box;
    }
`;

export default GlobalStyle;
