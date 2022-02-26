/* eslint-disable @typescript-eslint/explicit-module-boundary-types */
import React, { ReactNode } from 'react';
import { IoChevronBackSharp } from 'react-icons/all';
import { Link } from 'react-router-dom';
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
    <Link to={link} onClick={() => link !== "/#" ? history.back() : {}}>
      <BackButtonComponent>
        <IoChevronBackSharp color="#FFF" size={30} />
      </BackButtonComponent>
    </Link>
  );
};

export default BackButton;
