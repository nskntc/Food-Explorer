import styled from "styled-components"

export const Container = styled.div`
        display: grid;
        grid-template-rows: 114px 1fr 77px;
        grid-template-areas: 
        "header"
        "main"
        "footer";

        min-height: 100vh;
        width: 100%;

    > main{
        grid-area: main;

        display: grid;
        place-items: center;

        padding: 44px 24px 24px 24px;

        .decoration{
            position: relative;

            /* margin: 30px 16px 62px 30px; */

            margin-top: 30px;
            margin-bottom: 62px;

            padding: 36px 20px 20px 153px;

            background: ${({theme}) => theme.COLORS.GRADIENTS_200};

            width: 100%;

            h1{
                font-family: "Poppins", sans-serif;
                font-size: 18px;
                font-style: normal;
                font-weight: 600;
                line-height: 140%;

                display: inline;
                white-space: nowrap;
            }

            p{
                font-family: "Poppins", sans-serif;
                font-size: 12px;
                font-style: normal;
                font-weight: 400;
                line-height: 140%;
            }

            img{
                position: absolute;
                bottom: 0;
                left: -24px;

                width: 191px;
                height: 149px;
            }
        }

        .section{
            padding: 0 24px;

            h1{
                font-family: "Poppins", sans-serif;
                font-size: 18px;
                font-style: normal;
                font-weight: 500;
                line-height: 140%;

                margin-bottom: 23px;
            }

            .mySwiper{
                position: relative;

                .swiper-button-prev, .swiper-button-next{
                    color: transparent;
                }

                .shadow-1, .shadow-2{
                    display: none;
                }
            }

            .swiper {
                width: calc(100vw - 48px);
                height: 292px;
            }

            .swiper-slide {
                background: transparent;

                /* Center slide text vertically */
                display: flex;
                justify-content: center;
                align-items: center;

                width: 210px;
            }
        }
    }

    @media (min-width: 1200px){
        > main{
            display: grid;
            place-items: center;

            padding: 164px 124px 47px 124px;

            .decoration{
                /* margin: 164px 123px 63px 123px; */
                margin-top: 32px;
                margin-bottom: 63px;
                padding: 88px 100px 88px 593px;

                height: 260px;

                h1{
                    font-size: 40px;
                }

                p{
                    font-size: 16px;
                }

                img{
                    width: 632px;
                    height: 406px;

                    left: -54px;
                }
            }

            .section{
                /* margin-left: 121px; */

                h1{
                    font-size: 32px;
                }

                .mySwiper{
                    .swiper-button-prev, .swiper-button-next{
                        color: white;
                    }
                }

                .swiper {
                    width: calc(100vw - 333px);
                    height: 448px;

                    .shadow-1{
                        display: block;

                        position: absolute;
                        left: -10px;
                        top: 0;
                        
                        width: 278px;
                        height: 448px;

                        z-index: 2;

                        background: linear-gradient(90deg, #000A0F 0%, rgba(0, 10, 15, 0.27) 100%);
                    }

                    .shadow-2{
                        display: block;

                        position: absolute;
                        right: -10px;
                        top: 0;

                        width: 278px;
                        height: 448px;

                        z-index: 2;

                        background: ${({theme}) => theme.COLORS.GRADIENTS_100};
                    }
                }

                .swiper-slide{
                    width: 278px;
                    height: 100%;

                    .card{
                        height: 100%;
                        width: 100%;

                        gap: 24px;

                        .top-button{
                            svg{
                                width: 32px;
                                height: 32px;
                            }
                        }

                        img{
                            width: 176px;
                            height: 176px;
                        }

                        .title{
                            font-size: 24px;
                        }

                        .price{
                            font-size: 32px;
                        }

                        .buttons{
                            flex-direction: row;
                        }
                    }
                }
            }
        }
    }
`