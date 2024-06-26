"use client";

import styled from "styled-components";

interface Props {
  children: React.ReactNode;
}

const GlobalStyleProvider = ({ children }: Props) => {
  return (
    <>
      <GlobalStyles>{children}</GlobalStyles>
    </>
  );
};

const GlobalStyles = styled.div`
  padding: 2.5rem;
  display: flex;
  gap: 2.5rem;
  height: 100%;
  transition: all 0.3s ease-in-out;
  position: fixed;

  @media screen and (max-width: 768px) {
    padding: 1rem;
    gap: 1rem;
  }

  transform: scale(0.7);
  transform-origin: 0 0;
  width: 143%;
  height: 143%;

  .grid {
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
    gap: 1.5rem;
  }
`;

export default GlobalStyleProvider;
