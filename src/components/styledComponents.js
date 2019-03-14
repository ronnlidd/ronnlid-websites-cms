import styled from "styled-components"

export const BasicButton = styled.button`
  width: 100%;
  border: 2px ridge #fff;
  background: #5bc0be;
  box-shadow: 0 1px 1px rgb(0, 0, 0);
  font-family: sans-serif;
  padding: 5px;
  margin: 10px auto;
  border-radius: 1rem;
  text-decoration: none;
  color: #0b132b;

  & :hover {
    cursor: pointer;
    background: #0b132b;
    color: #ffc;
  }
`

export const NetlifyForm = styled.form`
  color: white;
  
  & input {
    font-weight: 300;
    background: #fff
  }

 
  & textarea {
    font-family: sans-serif;
    width: 80vw;
    padding: .5rem;
    height: 10rem;
    font-weight: 300;
    border: 1px solid #4285f4;
    border-radius: 6px;
    color: #0b132b;
    background: #fff;
    margin-left: 3px;
    margin-top: 6px;
  }

  @media screen and (min-width: 1000px) {
    textarea {
      width: 35vw;
      color: #0b132b;
    }
  }

  & p {
    & label {
      & input {
        color: #0b132b;
        border: 1px solid #fff;
        font-weight: 100;
        font-family: sans-serif;
        border-radius: 6px;
        padding: .5rem;
        background: #fff;
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
      border: 2px ridge #fff;
      background: #5bc0be;
      box-shadow: 0 1px 1px #0b132b;
      font-family: sans-serif;
      padding: 5px;
      margin: 10px auto;
      border-radius: 1rem;

  & :hover {
    background: #0b132b;
    color: #fff;
      & :hover {
        box-shadow: none;
      }
    }
  }
`

export const FlexRow = styled.div`
  display: -webkit-flex;
  display: ms-flex;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-evenly;
  margin: 0 auto;
  padding: 1rem;
  -ms-flex: 1;
  -webkit-flex: 1;
  flex: 1;

  @media screen and (max-width: 1000px) {
    & div {
      width: 85vw;
    }
  }
`
