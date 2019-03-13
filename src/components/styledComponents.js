import styled from "styled-components"

export const BasicButton = styled.button`
  width: 100%;
  border: 2px ridge #4285f4;
  background: #bad3fb;
  box-shadow: 0 1px 1px rgb(0, 0, 0);
  font-family: sans-serif;
  padding: 5px;
  margin: 10px auto;
  border-radius: 1rem;

  & :hover {
    cursor: pointer;
    background: #4285f4;
    color: #ffc;
    & a {
      color: white;
    }
  }

  & a {
    text-decoration: none;
    color: black;
  }
`

export const BasicButtonBuy = styled.button`
  background: linear-gradient(to bottom right, #ed616d, #ff9900);
  width: 100%;
  box-shadow: 0 1px 1px black;
  font-family: sans-serif;
  padding: 0.15rem;
  margin: 10px auto;
  border-radius: 0.75rem;
  border: 2px groove #34a853;
  border-right-style: groove;
  border-left-style: ridge;
  border-top-style: ridge;
  font-weight: 700;
  font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica,
    Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol";

  & :hover {
    cursor: pointer;
    background: linear-gradient(to bottom right, green, #34a853);
    & a {
      color: darkblue;
    }
  }

  & a {
    text-decoration: none;
    color: black;
  }
`

export const NetlifyForm = styled.form`
  color: black;
  font-weight: 900;
  
  & input {
    font-weight: 300;
  }

 
  & textarea {
    width: 80vw;
    padding: .5rem;

    height: 10rem;
    font-weight: 300;
    border: 1px solid #4285f4;
    border-radius: 6px;
    color: white;
    background: darkblue;
    margin-left: 3px;
    margin-top: 6px;
  }

  @media screen and (min-width: 1000px) {
    textarea {
      width: 35vw;
    }
  }

  & p {
    & label {
      & input {
        color: black;
        border: 1px solid #4285f4;
        font-weight: 100;
        font-family: sans-serif;
        border-radius: 6px;
        padding: .5rem;
        color: white;
        background: darkblue;
        margin-left: 3px;
        margin-top: 6px;
      }
    }
  }

  .fileContainer {
    overflow: hidden;
    position: relative;

    & input {
      max-width: 100%;
      border: 2px ridge #4285f4;
      background: #bad3fb;
      box-shadow: 0 1px 1px rgb(0, 0, 0);
      font-family: sans-serif;
      padding: 5px;
      margin: 10px auto;
      border-radius: 1rem;

  & :hover {
    background: #4285f4;
    color: #ffc;
      & :hover {
        box-shadow: none;
      }
    }
  }
`

export const FlexRow = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-evenly;
  margin: 0 auto;
  padding: 1rem;

  @media screen and (max-width: 1000px) {
    & div {
      width: 85vw;
    }
  }
`
