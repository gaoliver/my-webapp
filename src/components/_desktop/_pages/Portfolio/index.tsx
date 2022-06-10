import React from 'react';
import styled from 'styled-components';
import { FolderIcon } from '../../_atoms';
import { useAppSelector } from 'src/redux';
import { ProjectContent } from './ProjectContent';

const PortfolioWrapper = styled.section`
  display: block;
  width: 100%;
  height: 100%;
`;

const FolderIconContainer = styled.div`
  display: inline-block;
`;

export const Portfolio = () => {
  const { PORTFOLIO } = useAppSelector((state) => state);

  return (
    <PortfolioWrapper>
      {PORTFOLIO?.map((project) => (
        <FolderIconContainer key={project.id}>
          <FolderIcon
            id={project.slug}
            label={project.name}
            imageSource={project.mainImage}
          >
            <ProjectContent project={project} />
          </FolderIcon>
        </FolderIconContainer>
      ))}
    </PortfolioWrapper>
  );
};
