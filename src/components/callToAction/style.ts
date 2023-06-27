import styled from "styled-components"

export const CTASection = styled.section`
    align-items: center;
    background-color: var(--light-blue);
    color: var(--dark-blue);
    column-gap: 50px;
    display: flex;
    justify-content: space-between;
    padding: 25px 10%;
`

export const ImageWrapper = styled.div`
    box-sizing: border-box;
    position: relative;
    height: 600px;
    width: 80%;
`

export const Title = styled.h2`
    font-size: 2rem;
    font-weight: 500;
`

export const Paragraph = styled.p`
    border-bottom: 1px solid #c8d4dd;
    font-size: 1rem;
    font-weight: 600;
    padding: 10px 0;
`

export const Details = styled.div`
    align-items: center;
    display: grid;
    column-gap: 10px;
    grid-template-columns: 1fr 1fr;
    grid-template-rows: 1fr min-content;
`

export const CTAButton = styled.button`
    background-color: var(--blue);
    border: none;
    border-radius: 30px;
    color: #fff;
    cursor: pointer;
    font-family: inherit;
    font-weight: 600;
    height: 50px;
    margin: 20px 0;
    text-transform: uppercase;
`

export const CTADetails = styled.div`
    display: inline-block;
    white-space: nowrap;
`

export const Small = styled.small`
    font-size: 0.75rem;
    font-weight: 500;
    margin-left: 5px;
`
