import styled from "styled-components";
import Bg  from "../../assets/Bg.png"

export const Container = styled.div`
    height: 100vh;

    display: flex;
    align-items: stretch;
`

export const Form = styled.form`
    width: 520px;
    padding: 0 80px;

    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    text-align: center;

    > h1 {
        font-size: 48px;
        color: ${({ theme }) => theme.COLORS.ORANGE}
    }

    > h2 {
        font-size: 24px;
        margin: 48px 0;
    }

    > p {
        font-size: 14px;
        color: ${({ theme }) => theme.COLORS.GRAY_100}
    }

    > a {
        margin-top: 124px;
        color: ${({ theme }) => theme.COLORS.ORANGE};
    }
`

export const Background = styled.div`
    flex: 1;

    background: url(${Bg}) no-repeat center center;
    background-size: cover;
`