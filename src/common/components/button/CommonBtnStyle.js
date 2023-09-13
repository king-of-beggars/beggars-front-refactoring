import styled from 'styled-components';

const CommonBtnStyle = styled.button`
    height: ${props => props.theme.button.height};
    background-color: ${props => !!props.color ? props.color : props.theme.color.grayscale[900]};
    color: ${props => props.theme.color.grayscale[0]};
    display: flex;
    justify-content: center;
    align-items: center;
    cursor: pointer;
`

export default CommonBtnStyle