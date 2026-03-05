"use client"
import React, { useState } from 'react';
import styles from './layout_provider.module.css';
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,
  UncontrolledDropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem,
  NavbarText,
} from 'reactstrap';
import { IoChatbubbleOutline } from "react-icons/io5";

export default function LayoutProvider({ children }) {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => setIsOpen(!isOpen);

  return (
    <div>
      <nav className={styles.nav}>
        <Navbar expand='md' fixed='top'>
          <NavbarBrand href="/"><h2><strong>Bike shop</strong></h2></NavbarBrand>
          <NavbarToggler onClick={toggle} />
          <Collapse isOpen={isOpen} navbar>
            <Nav className="me-auto w-100 d-flex justify-content-center" navbar>
              <NavItem>
                <NavLink className={styles.nav_link} href="/">Giới thiệu</NavLink>
              </NavItem>
               <NavItem>
                <NavLink className={styles.nav_link} href="/">Trong tầm giá</NavLink>
              </NavItem>
               <NavItem>
                <NavLink className={styles.nav_link} href="/">Tên sản phẩm</NavLink>
              </NavItem>
               <NavItem>
                <NavLink className={styles.nav_link} href="/">Giỏ hàng</NavLink>
              </NavItem>
            </Nav>
            {/* <NavbarText>Simple Text</NavbarText> */}
          </Collapse>
        </Navbar>
      </nav>
      <article>{children}</article>
      <div className={styles.show_widget}><IoChatbubbleOutline size='40' /><div></div></div>
      <footer className={styles.footer}><h4>No coppyright</h4></footer>
    </div>
  )
}
