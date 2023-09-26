import styled from "styled-components"

export const Container = styled.div`
    height: 100vh;

    display: grid;
    grid-template-rows: 114px 1fr 77px;
    grid-template-areas: 
    "header"
    "main"
    "footer";
    
    > main{
        grid-area: main;

        margin: 16px 56px 33px;

        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: flex-start;
        text-align: center;
        gap: 16px;

        .back-button{
            width: 100%;

            text-align: left;
        }

        .dishe{
            img{
                width: 250px;
                height: 250px;
            }

            .dishe-informations{
                h1{
                    font-family: "Poppins", sans-serif;
                    font-size: 27px;
                    font-weight: 500;
                    line-height: 140%;

                    margin-bottom: 8px;
                }

                p{
                    font-family: "Poppins", sans-serif;
                    font-size: 16px;
                    font-weight: 400;
                    line-height: 140%;

                    margin-bottom: 8px;
                }

                ul{
                    list-style: none;
                    padding: 0;

                    display: grid;
                    grid-template-columns: repeat(3, 1fr);
                    gap: 24px;

                    margin-top: 16px;
                }

                li{
                    padding: 4px 8px;

                    /* margin-right: 32px;
                    margin-bottom: 24px; */

                    display: inline-block;
                    white-space: nowrap;

                    font-family: "Poppins", sans-serif;
                    font-size: 14px;
                    font-weight: 500;
                    line-height: 24px;

                    color: ${({theme}) => theme.COLORS.LIGHT_100};

                    border-radius: 5px;

                    background-color: ${({theme}) => theme.COLORS.DARK_1000};
                }

                button{
                    margin-top: 24px;
                }

                .request-wrapper{
                    display: flex;
                    align-items: center;
                    justify-content: center;
                    text-align: center;
                    gap: 16px;

                    margin-top: 32px;

                    span{
                        font-size: 22.626px;
                        font-weight: 700;
                        line-height: 160%;

                        white-space: nowrap;
                    }

                    .plus-minus{
                        border: none;
                        background: transparent;
                    }

                    button{
                        margin: 0;
                    }
                }

                #request-button{
                    text-align: center;
                    font-family: "Poppins", sans-serif;
                    font-size: 9.5px;
                    font-weight: 500;
                    line-height: 16px;

                    color: ${({theme}) => theme.COLORS.LIGHT_100};
                }
            }
        }

        .hidden{
            display: none;
        }
    }

    @media (min-width: 1200px){
        > main{
            .dishe{
                display: flex;
                align-items: center;
                justify-content: flex-start;

                gap: 50px;

                margin-top: 42px;

                img{
                    width: 400px;
                    height: 400px;
                }

                .dishe-informations{
                    text-align: left;

                    li{
                        text-align: center;
                    }

                    button{
                        display: inline;
                        white-space: nowrap;

                        padding: 12px 24px;

                        width: 131px;
                    }

                    .request-wrapper{
                        justify-content: flex-start;

                        .plus-minus{
                            width: 24px;

                            display: flex;
                            align-items: center;
                            justify-content: center;
                            padding: 0;
                        }

                        #request-button{
                            width: 162px;

                            display: flex;
                            align-items: center;
                            justify-content: center;

                            padding: 12px 24px;

                            font-size: 14px;
                        }
                    }
                }
            }
        }

        .hidden{
            display: none !important;
        }
    }
`