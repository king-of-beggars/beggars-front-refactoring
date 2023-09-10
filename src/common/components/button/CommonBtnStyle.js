import styled from 'styled-components';

const CommonBtnStyle = styled.button`
    height: ${props => props.button.height};
    background-color: ${props => props.color.grayscale[900]};
    color: ${props => props.color.grayscale[0]};
    display: flex;
    justify-content: center;
    align-items: center;
    cursor: pointer;
`

export default CommonBtnStyle