// CurrentLocation.styles.ts

import styled from 'styled-components';

export const StyledBtn = styled.button`
  // Remove position: absolute;
  position: relative; // Add relative positioning to position child elements
  z-index: 2;
  top: 20px;
  right: 20px;
  padding: 10px 15px; // Add padding as needed
  background-color: #ffffff; // Add a background color
  border: 1px solid #cccccc; // Add a border
  border-radius: 5px; // Add border-radius for rounded corners
  cursor: pointer; // Add cursor style for better user experience
  color: #333333; // Add a text color

  &:hover {
    background-color: #f0f0f0; // Add a different background color on hover
  }

  p {
    margin: 0; // Remove default margin from the paragraph
  }
`;
