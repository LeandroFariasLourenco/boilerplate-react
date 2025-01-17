import styled, { css } from 'styled-components';
import { rem } from 'polished';

const btnReset = css`
  overflow: visible;
  margin: 0;
  padding: 0;
  border: 0;
  border-radius: 0;
  background: transparent;
  line-height: normal;
  appearance: none;
  -moz-appearance: none;
  -webkit-appearance: none;
`;

const btnStyle = css`
  ${btnReset}
  padding: ${rem(8)} ${rem(20)};
  color: white;
  text-transform: uppercase;
  font-weight: bold;
  transition: background-color 200ms ease-in-out;

  &[disabled] {
    background-color: grey;
  }
`;

export const Wrapper = styled.button`
  ${(props: any) => (props.reset ? btnReset : btnStyle)}
`;
