/* eslint-disable import/no-extraneous-dependencies */
import styled from 'styled-components';

const Image = styled.img`
  width: ${(props) => props.width};
  height: auto;
  border-radius: ${(props) => props.borderRadius};
`;

Image.defaultProps = {
  width: '100%',
  height: 'auto',
};

export default Image;
