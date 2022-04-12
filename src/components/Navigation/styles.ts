import styled from 'styled-components';

export const Content = styled.div`
    display: flex;
    justify-content: center;

    nav {
        width: 1296px;
        background: var(--dark-blue);    
        border-radius: 5px;
        margin-top: 5px;
        .container {            
            .navbar-nav {           
                &{
                    a:first-child {
                       padding-left: 0;
                    }
                    
                }     
                .nav-link {                    
                    border-right: 1px solid white;
                    padding-right: 25px;
                    display: flex;
                    font-size: 15px;
                    
                    &:nth-last-child(1) {
                        border: none;
                    }
                    &:hover  svg  path {
                        transition: all .2s ease;
                        stroke: #2B9FBB;        
                    }

                    div svg {                                                
                        margin-bottom: 5px;
                        margin-left: 20px;
                        margin-right: 14px;                      
                    }
                }               
                a {
                    color: var(--white);                    

                    &:hover {
                        color: var(--light-blue);
                        transition: all .2s ease;
                    }

                    &:focus {
                        color: var(--light-blue);
                    }

                   
                }
            }
        }
    }

`