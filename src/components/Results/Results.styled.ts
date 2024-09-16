import styled from "styled-components";
import SearchIcon from "../../assets/search.svg";

interface InputWrapperProps {
  $hasValue: boolean;
}

export const Container = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
`;

export const Table = styled.table`
  width: 100%;
  max-width: 1140px;
  font-size: 1rem;
  table-layout: fixed;
  border-spacing: 20px;
`;

export const Th = styled.th`
  display: table-cell;
  vertical-align: inherit;
  text-align: start;
`;

export const InputWrapper = styled.div<InputWrapperProps>`
  display: flex;
  border-bottom: 1px solid #3bbdf8;
  position: relative;

  input {
    width: 100%;
    border: none;
    padding: 4px 0;
    line-height: 0;
    outline: none;
    font-size: 1rem;
    color: #3bbdf8;
    background: transparent;

    &::placeholder {
      font-size: 1rem;
      color: #3bbdf8;
      transition: all 250ms ease;
      opacity: 1;
    }

    &:focus::placeholder {
      opacity: 0;
    }

    &:not(:focus):not(:placeholder-shown) ~ &::before {
      opacity: 1;
    }
  }

  &::before {
    content: attr(data-placeholder);
    font-size: 0.8rem;
    font-weight: 400;
    color: #3bbdf8;
    position: absolute;
    top: -20px;
    left: 0;
    pointer-events: none;
    transition: all 250ms ease;
    opacity: ${(props) => (props.$hasValue ? 1 : 0)};
  }

  &:focus-within::before {
    opacity: 1;
  }
`;

export const Icon = styled(SearchIcon)`
  width: 20px;
  fill: #3bbdf8;
`;
