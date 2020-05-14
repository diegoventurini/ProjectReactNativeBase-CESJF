import styled from 'styled-components/native';

export const VieW = styled.View`
    background: #4473ba;
    margin-top: ${props => props.margintop || 25};
`;    

export const TexT = styled.Text`
    font-size: ${props => props.fontsize || 30};
    color: #ffffff;
`;    