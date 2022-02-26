/* eslint-disable @typescript-eslint/explicit-module-boundary-types */
import React from 'react';
import { IoChevronBackSharp } from 'react-icons/all';
import { HashLink as Link } from 'react-router-hash-link';
import { BackButtonComponent } from './style';

interface BackButtomProps {
  link?: string,
}

const translate = (props: BackButtomProps) => ({
  link: props.link ? props.link : "/#"
})

const BackButton = (props: BackButtomProps) => {
  const { link } = translate(props)

  return (
    <Link to={link}>
      <BackButtonComponent>
        <IoChevronBackSharp color="#FFF" size={30} />
      </BackButtonComponent>
    </Link>
  );
};

export default BackButton;
