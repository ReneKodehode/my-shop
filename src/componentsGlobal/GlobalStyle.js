import { createGlobalStyle } from "styled-components";

export const GlobalStyled = createGlobalStyle`
* {
    font-family: "Poppins", 'Times New Roman', Times, serif;
    font-weight: 300;
    margin: 0;
    padding: 0;
}
h1{
    font-size: 3rem;
}
h2{
    font-size: 2rem;
}
p{
    font-size: 1rem;
}

button{

    :active{
        color:black;
    }
}
`;
