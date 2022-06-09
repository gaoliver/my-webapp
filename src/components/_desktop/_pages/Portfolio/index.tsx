import React from 'react';
import styled from 'styled-components';
import { DesktopIcon } from '../../_atoms';
import { useAppSelector } from 'src/redux';
import { ProjectContent } from './ProjectContent';

const PortfolioWrapper = styled.section`
  display: block;
  justify-content: flex-start;
  width: 100%;
  height: 100%;
`;

const DesktopIconContainer = styled.div`
  display: inline-block;
`;

export const Portfolio = () => {
  const { PORTFOLIO } = useAppSelector((state) => state);

  return (
    <PortfolioWrapper>
      {PORTFOLIO?.map((project) => (
        <DesktopIconContainer key={project.id}>
          <DesktopIcon
            id={project.slug}
            label={project.name}
            imageSource={project.mainImage}
          >
            <ProjectContent project={project} />
          </DesktopIcon>
        </DesktopIconContainer>
      ))}
    </PortfolioWrapper>
  );
};
