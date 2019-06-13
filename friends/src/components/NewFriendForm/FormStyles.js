import styled from "styled-components";

export const BackgroundCover = styled.div`
    position:            relative;
    width:               100%;
    height:              100vh;
    filter:              blur(8px);
`;

export const NewFriendContainer = styled.div`
    position:            absolute;
    top:                 50%;
    left:                50%;
    transform:           translate(-50%, -50%);
    -ms-transform:       translate(-50%, -50%);
    background:          black;
    max-width:           600px;
    width:               100%;
    height:              450px;
`;

export const Form = styled.form`
    position:            absolute;
    top:                 50%;
    transform:           translateY(-50%);
    -ms-transform:       translateY(-50%);
    color:               #7bff00;
    max-width:           600px;
    width:               100%;
    box-sizing:          border-box;
    margin:              auto;
    padding:             0 40px;
    display:             flex;
    flex-wrap:           wrap;
    justify-content:     space-around;
`;

export const Input = styled.input`
    height:              2rem;
    width:               100%;
    margin:              10px 0;
    background:          transparent;
    color:               #7bff00;
    border:              1px solid #316600;
    box-shadow:          1px 1px 2px gray;
    font-family:         'Share Tech Mono', monospace;

    &:focus {
        border:          1px solid #7bff00;
        box-shadow:      1px 1px 2px white;
    }
`;

export const Button = styled.button`
    cursor:              pointer;
    box-sizing:          border-box;
    width:               40%;
    margin:              10px 0;
    background:          black;
    border:              1px solid #316600;
    box-shadow:          1px 1px 2px gray;
    color:               #7bff00;
    font-family:         'Share Tech Mono', monospace;
    text-decoration:     none;
    font-size:           1rem;
    padding:             8px;

    &:hover {
        border:          1px solid #7bff00;
        box-shadow:      1px 1px 2px white;
    }
`;