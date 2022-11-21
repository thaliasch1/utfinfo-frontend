import styled from "styled-components";

type ModalProps = {
  active: boolean;
}

export const Container = styled.div`
  display: flex;
  padding: 0;
  margin: 0;
  flex-direction: column;
  height: 100vh;
  background-color: #edede9 !important;

  h2 {
    text-align: center;
    font-size: 30px;
  }
`;

export const Logo = styled.div `

  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 20px;
  margin: 10px 60px 0 60px;
  

`;



export const NewPublication = styled.button`


    border: none;
    color: #fff;
    height: 46px;
    width: 220px;
    font-size: 20px;
    border-radius: 8px;
    font-weight: bold;
    background-color: green;
    cursor: pointer;
    &:hover {
      filter: brightness(0.9);
    }
  
`
export const ModalContainer = styled.div`

        width: 500px;
        height: 450px;
        position: absolute;
        left: 50%;
        top: 50%; 
        margin-left: -250px;
        margin-top: -180px;
  
        border-radius: 10px;
        background-color: #fff;

        .close {
          cursor: pointer;
          background: none;
          color: inherit;
          border: none;
          padding: 0;
          font: inherit;
          cursor: pointer;
          outline: inherit;
          font-size: 20px;
          position: absolute;
          right: 0;
          top: 0;
          padding: 20px;
        }

`;


export const Modal = styled.div<ModalProps>`



    z-index: auto;
    display: ${({active}) => (active ? 'block' : 'none')};
    position: fixed;
    top: 0;
    left: 0;
    height: 100vh;
    width:100vw;
    background: rgba(0,0,0,0.5);
`

export const FileForm = styled.div`


  form {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    font-size: 16px;
  
  }

  h3 {
    font-size: 25px;
  }
  span {
    color: gray;
    font-size: 14px;
    margin-top: 10px;
  }
  input[type="file"] {
    font-size: 16px;
    font-size: 14px;
    width: 50%;
    margin: 10px;
    padding: 10px;
  }

  input[type="number"] {
    font-size: 14px;
    padding: 10px;
    width: 50%;

  }

  textarea {
    padding: 10px;
    margin: 10px;
    margin-top: 30px;
    padding: 10px;
    width: 90%;
    height: 130px;
    font-size: 16px;
  }



`;


export const Buttons = styled.div`



button {
  border: none;
    color: #fff;
    padding: 10px;
    font-size: 20px;
    border-radius: 8px;
    margin: 10px;
  
    cursor: pointer;
    &:hover {
      filter: brightness(0.9);
    }
  &:first-child{
    background-color: green;
  }

  &:last-child {
    background-color: red;
  }
}
`;

export const Images = styled.div`

display: flex;
justify-content: center;
padding: 30px;;
align-items: center;
margin-top: 20px;


table {
	width: 80%;
	border-collapse: collapse;
	box-shadow: 0 0 20px rgba(0,0,0,0.1);
  overflow: scroll;
  border-radius: 5px;
  background-color: rgba(255,255,255,0.2);
  
}

th,
td {
	padding: 15px;
	
	color: black;
  
}

th {
	text-align: left;
}

thead {
	th {
		background-color: #55608f;
	}
}

tbody {
	tr {
		&:hover {
			background-color: rgba(255,255,255,0.3);
		}
	}

}

  .icon {
    
    cursor: pointer;
    padding: 10px;
    height: 60px;
    width: 60px;
 

    &:hover {
      filter: brightness(0.9);
    }
  }

  .icon-td {
    width: 10px;
  }


.description {
    word-wrap: break-word;         /* All browsers since IE 5.5+ */
    overflow-wrap: break-word;     /* Renamed property in CSS3 draft spec */
    width: 70%;
    word-wrap: break-word;         /* All browsers since IE 5.5+ */
    overflow-wrap: break-word; 
}



  display: flex;
  flex-direction: column;

  div {

    display: flex;
    justify-content: center;
    align-items: center;
    margin: 10px;
    color: #fff;
    font-size: 13px; */
    

    p {
      /* padding: 10px;
      border-radius: 4px;
      background-color: rgba(100, 96, 96, 0.23);
      width: 180px;
      text-overflow: ellipsis;
      white-space: nowrap;
      overflow: hidden; */
    }

  }

  img {
    border-radius: 4px;
    width: 120px;
    height: 100px;
  }
`;

export const Icons = styled.div`

  display: flex;
  flex-direction: row !important;

`

export const OrderArrows = styled.div `

display: flex;
flex-direction: row-reverse;

button {
  background-color: aliceblue;
}

`