import styled from 'styled-components';

const ModalBtnStyle = styled.button`
    width: ${props => props.width};
    height: ${props => props.theme.button.height};
    background-color: ${props => !!props.color ? props.color : props.theme.color.grayscale[900]};
    font-family: ${props => props.theme.font.serif};
    font-size: ${props => props.theme.font.size.default};
    color: ${props => props.theme.color.grayscale[0]};
    
    border: none;
    border-radius: 15px;
    cursor: pointer;

    display: flex;
    justify-content: center;
    align-items: center;
`

export default ModalBtnStyle