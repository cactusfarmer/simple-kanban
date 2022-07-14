import styled from "styled-components";

export const NavButton = styled.button.attrs((props: { selected: Boolean }) => props)`
cursor: pointer;
display:block;
padding:0.3em 1.2em;
margin:0 0.3em 0.3em 0;
border-radius:2em;
box-sizing: border-box;
text-decoration:none;
font-family:'Roboto',sans-serif;
font-weight:300;
color:#FFFFFF;
background-color:#4eb5f1;
border: ${(props) => props.selected ? "1px solid #3583b1" : "1px solid transparent"};
text-align:center;
transition: all 0.2s;

&:hover {
    background-color:#4095c6;
}`