import styled from 'styled-components';

export const Content = styled.div`
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
               
               &:focus {
                   outline: none;                                       
                    -webkit-box-shadow: inset 0 1px 1px rgba(0,0,0,.075),0 0 8px #2B9FBB;
                    box-shadow: inset 0 1px 1px rgba(0,0,0,.075),0 0 8px #2B9FBB;
               }
           }

           .form-control {
               height: 52px;
               &:focus {
               -webkit-box-shadow: inset 0 1px 1px rgba(0,0,0,.075),0 0 8px #2B9FBB;
                    box-shadow: inset 0 1px 1px rgba(0,0,0,.075),0 0 8px #2B9FBB;
                }
           }
        }
 `