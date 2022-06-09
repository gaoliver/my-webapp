import React from 'react';
import styled from 'styled-components';
import { DesktopIcon } from '../../_atoms';

import SoubLogo from 'src/assets/images/optimized/portfolio/soub/soub-logo.webp';
import TennisProLogo from 'src/assets/images/optimized/portfolio/tennispro/tennispro-logo.webp';
import LOBImoveisLogo from 'src/assets/images/optimized/portfolio/lobimoveis/lobimoveis-logo.webp';
import FertiPeixeLogo from 'src/assets/images/optimized/portfolio/ferti/fertipeixe-logo.webp';
import GFLogo from 'src/assets/images/optimized/portfolio/gf/GF-logo.webp';
import AmperjLogo from 'src/assets/images/optimized/portfolio/amperj/amperj-logo.webp';
import FemperjLogo from 'src/assets/images/optimized/portfolio/femperj/femperj-logo.webp';
import NerdLineLogo from 'src/assets/images/optimized/portfolio/nerdline/nerdline-logo.webp';
import MilkLogo from 'src/assets/images/optimized/portfolio/milk/milkefruit-logo.webp';

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
  return (
    <PortfolioWrapper>
      <DesktopIconContainer>
        <DesktopIcon
          id="soub"
          label="Soub!"
          imageSource={SoubLogo}
        ></DesktopIcon>
      </DesktopIconContainer>
      <DesktopIconContainer>
        <DesktopIcon
          id="tennis_pro"
          label="Tennis Pro"
          imageSource={TennisProLogo}
        ></DesktopIcon>
      </DesktopIconContainer>
      <DesktopIconContainer>
        <DesktopIcon
          id="lob_imoveis"
          label="LOB Imóveis"
          imageSource={LOBImoveisLogo}
        ></DesktopIcon>
      </DesktopIconContainer>
      <DesktopIconContainer>
        <DesktopIcon
          id="ferti_peixe"
          label="Ferti Peixe"
          imageSource={FertiPeixeLogo}
        ></DesktopIcon>
      </DesktopIconContainer>
      <DesktopIconContainer>
        <DesktopIcon
          id="gf_importacoes"
          label="Gonçalves e Filhos Importações"
          imageSource={GFLogo}
        ></DesktopIcon>
      </DesktopIconContainer>
      <DesktopIconContainer>
        <DesktopIcon
          id="amperj"
          label="AMPERJ"
          imageSource={AmperjLogo}
        ></DesktopIcon>
      </DesktopIconContainer>
      <DesktopIconContainer>
        <DesktopIcon
          id="femperj"
          label="FEMPERJ APP"
          imageSource={FemperjLogo}
        ></DesktopIcon>
      </DesktopIconContainer>
      <DesktopIconContainer>
        <DesktopIcon
          id="nerdline"
          label="NerdLine Website"
          imageSource={NerdLineLogo}
        ></DesktopIcon>
      </DesktopIconContainer>
      <DesktopIconContainer>
        <DesktopIcon
          id="milkefruit"
          label="Milk & Fruit Website"
          imageSource={MilkLogo}
        ></DesktopIcon>
      </DesktopIconContainer>
    </PortfolioWrapper>
  );
};
