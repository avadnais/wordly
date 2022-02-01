import styled from "styled-components";

export const StyledModal =  styled.div`
    align-items: center;
    justify-content: center;
    position: absolute;
    min-width: min(90vw, 450px);
    height: 56vh;
    transform: translateY(-15%);
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
        margin: 5px 0;
        text-indent: 1rem;
        letter-spacing: 1rem;
    }

    button {
        font-size: calc(1rem + .2vw);
        color: whitesmoke;
        margin: .5rem 0;
        width: 50%;
        height: 10%;
        background-color: #1b1b1be3;
        cursor: pointer;
        border: none;
        border-radius: 1.5rem;
    }
`