import styled from "styled-components";

export const GroupSkillDiv = styled.div`
  display: grid;
  grid-template-columns: max-content 1fr;
  column-gap: 20px;
  align-items: center;

  svg {
    color: var(--textColor);
    font-size: 38px;
  }

  h3{
    color: var(--textColor);
    margin-bottom: 5px;
  }
`;