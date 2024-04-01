import styled from "styled-components";
export const Button = styled.button`
    padding: 0 1rem;
    background-color: var(--colors-ui-base);
    box-shadow: var(--shadow);
    border-radius: var(--radius);
    line-height: 2.5;
    border: none;
    font-size: var(--fz-md);

    display: flex;
    align-items: center;
    gap: 0.75rem;

    color: var(--colors-text);
    cursor: pointer;
`;