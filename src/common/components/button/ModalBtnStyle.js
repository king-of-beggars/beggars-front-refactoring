import styled from 'styled-components';

const ModalBtnStyle = styled.button`
    height: ${props => props.theme.button.height};
    background-color: ${props => !!props.color ? props.color : props.theme.color.grayscale[900]};
    font-family: ${props => props.theme.font.serif};
    font-size: ${props => props.theme.font.size.default};
    color: ${props => props.theme.color.grayscale[0]};
    width: ${props => props.width};
    border: none;
    border-radius: 15px;
    display: flex;
    justify-content: center;
    align-items: center;
    cursor: pointer;
`

export default ModalBtnStyle