import styled from 'styled-components';

export const Content = styled.div`
    .container {        
        font-size: 18px;
        p {
                font-size: 24px;
                color: var(--text);
                margin: 25px 0 3px 3px;
        }

        form {
            background: var(--white);
            margin-top: 20px;
            padding: 0px 25px 20px;
            border-radius: 5px;
            display: inline-block;
            width: 100%;

           .form-label {
               margin-top: 30px;
           }

           .form-select {
               height: 52px;
           }

           .form-control {
               height: 52px;
           }
        }
    }
`