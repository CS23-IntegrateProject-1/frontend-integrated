// CurrentLocation.styles.ts
import styled from 'styled-components';

export const StyledBtn = styled.button`
  position: relative;
  z-index: 2;
  top: 20px;
  right: 20px;
  padding: 15px 20px;  // Increased padding for a larger size
  background-color: #202020;  // Darker black background
  border: 1px solid #ffffff; // White border for contrast
  border-radius: 8px;  // Increased border-radius for a rounder shape
  cursor: pointer;
  color: #ffffff; // White text color

  &:hover {
    background-color: #333333; // Darker background on hover
  }

  p {
    margin: 0;
  }

  /* Additional Styles */
  display: inline-block;
  font-size: 18px;  // Increased font size
  text-align: center;
  text-decoration: none;
  user-select: none;
  white-space: nowrap;
  outline: none;
  transition: box-shadow 0.3s ease;  // Added a smooth transition for the box-shadow

  /* Additional styles to make it more accessible */
  &:focus {
    box-shadow: 0 0 0 5px rgba(255, 255, 255, 0.7); // Lighter shadow on focus
  }

  &:active {
    background-color: #444444; // Darker background when the button is pressed
  }
`;
