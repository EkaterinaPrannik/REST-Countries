import styled from "styled-components";
import Select from 'react-select';

export const CustomSelect = styled(Select).attrs({
    styles: {
        control: (provided) => ({
            ...provided,
            backgroundColor: 'var(--colors-ui-base)',
            color: 'var(--color-text)',
            borderRadius: 'var(--radius)',
            padding: '0.25rem',
            border: 'none',
            boxShadow: 'var(--shadow)',
            height: '50px',
        }),
        option: (provided,state) => ({
            ...provided,
            cursor: 'pointer',
            color: 'var(--colors-text)',
            backgroundColor: state.isSelected ? 'var(--colors-bg)' : 'var(--colors-ui-base)',
        }),
    },
})`
    width: 200px;
    border-radius: var(--radius);
    font-family: var(--family);
    border: none;

    & > * {
        box-shadow: var(--shadow);
    }
    & *{
        color: var(--colors-text) !important;
    }
    & > div[id] {
        background-color: var(--colors-ui-base) !important;
    }
`;