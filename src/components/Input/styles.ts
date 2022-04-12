import styled from 'styled-components';

export const Content = styled.div`
 .form-label {
               margin-top: 30px;
}          
 .form-control {
    height: 52px;
    
    &:focus {
        -webkit-box-shadow: inset 0 1px 1px rgba(0,0,0,.075),0 0 8px #2B9FBB;
        box-shadow: inset 0 1px 1px rgba(0,0,0,.075),0 0 8px #2B9FBB;
    }
}
`