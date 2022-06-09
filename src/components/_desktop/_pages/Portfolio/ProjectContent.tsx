import React, { FC } from 'react';
import { PortfolioModel } from 'src/interfaces';
import styled from 'styled-components';

export type ProjectContentProps = {
  project: PortfolioModel;
};

const ProjectContentWrapper = styled.section`
  display: flex;
`;

export const ProjectContent: FC<ProjectContentProps> = ({ project }) => {
  return <ProjectContentWrapper>ProjectContent</ProjectContentWrapper>;
};
