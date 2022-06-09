import React, { FC } from 'react';
import { Icon } from 'src/components/Icon';
import { colors } from 'src/constants/colors';
import { IconOption } from 'src/constants/icons';
import styled from 'styled-components';

export type EmbedModelProps = {
  url: string;
  notWorking?: boolean;
  icon?: string;
};

const EmbedWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  height: 100%;
  gap: 30px
`;

const TextStyled = styled.span`
  width: 70%;
  font-size: 1.3rem;
  text-align: center;
`;

const ButtonStyled = styled.button`
  padding: 15px 30px;
  background-color: ${(props) => props.theme.primary};
  color: ${colors.white};
  font-size: 1.5rem;
  border-radius: 5px;
  border: none;
  transition: ease-in-out 0.1s;
  box-shadow: 0px 0px 2px 1px ${colors.black};
  :active {
    filter: brightness(0.7);
    box-shadow: none;
  }
  :hover {
    cursor: pointer;
  }
`;

export const EmbedModel: FC<EmbedModelProps> = ({ url, notWorking, icon }) => {
  if (notWorking) {
    return (
      <EmbedWrapper>
        {icon && (
          <Icon
            icon={icon as IconOption}
            style={{ marginTop: '90px' }}
            height="100px"
          />
        )}
        <TextStyled>
          {`Unfortunately, the target website doesn't allow itself to be embedded to my page. So, please, click the button bellow to open it in a blank page.`}
        </TextStyled>
        <a href={url} target="_blank" rel="noreferrer">
          <ButtonStyled>Open in blank page</ButtonStyled>
        </a>
      </EmbedWrapper>
    );
  }

  return <embed src={url} width="100%" height="100%" />;
};
