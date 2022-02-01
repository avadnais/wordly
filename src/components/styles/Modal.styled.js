import styled from "styled-components";

export const StyledModal =  styled.div`
    align-items: center;
    justify-content: center;
    position: absolute;
    min-width: min(90vw, 450px);
    height: 50%;
    border: 2px solid whitesmoke;
    z-index: 100;
    background-color: #252525e3;
    display: ${props => props.visible ? 'flex' : 'none'};
    flex-direction: column;

    h3 {
        font-size: calc(2rem + 1vw);
        margin: min(5vw, 2rem);
    }

    p {
        margin:0;
        font-size: 1.5rem;
    }

    .word {
        margin-top: 5px;
        text-indent: 1rem;
        letter-spacing: 1rem;
    }

    button {
        color: whitesmoke;
        margin: 1rem;
        width: 25%;
        height: 10%;
        background-color: #1b1b1be3;
        cursor: pointer;
        border: none;
        border-radius: 1.5rem;
    }
`