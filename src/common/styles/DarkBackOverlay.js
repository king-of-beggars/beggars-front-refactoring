import styled from 'styled-components';

const DarkBackOverlay = styled.div`
    position: fixed;
    top: 0;
    left: 0;
    width: 100vw;
    height: 100vh;
    background-color: ${props => props.theme.color.shadows[500]};

    display: flex;
    justify-content: center;
    align-items: center;
`

export default DarkBackOverlay