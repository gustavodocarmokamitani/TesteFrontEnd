import styled from 'styled-components';

export const Content = styled.div`
display: inline;
float: right;
    button:hover {
        transition: all .2s ease;
        transform: scale(1.05);
        filter: contrast(120%);
    }
    .btn {
        width: 157px;
        height: 52px;
        border: none;
        margin: 35px 16px 13px 0;

        &:focus {            
            box-shadow: none;            
        
        }
    }
`