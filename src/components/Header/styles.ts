import styled from 'styled-components';

export const Content = styled.header`
    height: 100px;
    background: var(--background);
    p {
        font-size: 24px;
        font-weight: 400;
        color: var(--dark-blue);
        line-height: 25px;
        margin-right: 0px;
    }

    .container {
      
        .navbar-nav {
            margin-top: 15px;

            .nav-link:nth-child(2){
                margin: 0 39px 0 24px;                
            }           
            .nav-link strong {
                font-weight: 600;
            }
        }
    }
`