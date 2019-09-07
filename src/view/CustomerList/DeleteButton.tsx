import styled from 'styled-components';

const DeleteButton = styled.button`
  cursor: pointer;
  background-image: url('data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAAYCAQAAABKfvVzAAAAAmJLR0QA/4ePzL8AAAB7SURBVDjLY2AYCNDA8B8KO/ApOwpXhg0extRwGK+GQwPiV7xOGlANNxkqGF6BWa8YyhluEdZQAWTpABW/ApIMDFWENUAU6kDJV8T44RWDLpivwfCcOE+TqIFkJ5Hs6VsMlfBgrSQmWGkZ049xKn+EXYMnUAK7cg96ZhoAVo/T/O1d6FoAAAAASUVORK5CYII=');
  background-position: center center;
  background-repeat: no-repeat;
  width: 100%;
  height: 100%;

  &:focus {
    outline: none;
  }
`;

export default DeleteButton;
