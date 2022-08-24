import styled from 'styled-components';

export const StyledButton = styled.div`
  display: flex;
  justify-content: center;

  button {
    padding: 8px 16px;
    margin-top: ${p => p.theme.space[4]}px;
    border-radius: ${p => p.theme.radii.sm};
    background-color: ${p => p.theme.colors.background};
    transition: all 250ms cubic-bezier(0.4, 0, 0.2, 1);
    text-align: center;
    display: inline-block;
    color: ${p => p.theme.colors.white};
    border: ${p => p.theme.borders.none};
    text-decoration: none;
    cursor: pointer;
    font-family: inherit;
    font-size: ${p => p.theme.fontSizes.m};
    line-height: 24px;
    font-style: normal;
    font-weight: 500;
    min-width: 180px;
    box-shadow: 0px 3px 1px -2px rgba(0, 0, 0, 0.2),
      0px 2px 2px 0px rgba(0, 0, 0, 0.14), 0px 1px 5px 0px rgba(0, 0, 0, 0.12);
  }

  button:hover,
  button:focus {
    background-color: ${p => p.theme.colors.accent};
  }
`;
