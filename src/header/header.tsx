"use client"
import React, { useState, useEffect } from 'react'
import styles from "./header.module.scss"
import logo from "../../public/images/logo.jpeg"
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
    Dropdown
  } from 'reactstrap';
import MediaQuery from 'react-responsive';
import Image from 'next/image';

type Props = {}

const header = (props: Props) => {

    const [dropdownOpen, setDropdownOpen] = useState(false);
    const dropdownToggle = () => setDropdownOpen(!dropdownOpen);

    // const [nestedDropdownOpen, setNestedDropdownOpen] = useState(false);
    // const nestedDropdownToggle = () => setNestedDropdownOpen(!nestedDropdownOpen);
    
    const [isOpen, setIsOpen] = useState(false);
    const mblToggle = () => setIsOpen(!isOpen);

    const [isClient, setIsClient] = useState(false);
    useEffect(() => {
        setIsClient(true);
    }, []);

    if (!isClient) {
        return null;
    }

    return (
    <>
        <header>
        <MediaQuery minWidth={867}>
            <Navbar className={`${styles.navbar} me-auto`}> 
                <NavbarBrand href="/">
                    <Image
                    className={styles.logo}
                    alt="logo"
                    src={logo}
                    style={{
                    height: 60,
                    width: 60
                    }}
                    />
                </NavbarBrand>
                <Nav>
                    <NavItem><NavLink href="#">Home</NavLink></NavItem>
                    <NavItem><NavLink href="#">About Us</NavLink></NavItem>
                    <Dropdown nav isOpen={dropdownOpen} toggle={dropdownToggle}>
                        <DropdownToggle nav caret>Services</DropdownToggle>
                        <DropdownMenu>
                            <DropdownItem><NavLink href='#'>House Cleaning</NavLink></DropdownItem>
                            <DropdownItem><NavLink href='#'>Deep Cleaning</NavLink></DropdownItem>
                            <DropdownItem><NavLink href='#'>End Of Lease Cleaning</NavLink></DropdownItem>
                            <DropdownItem><NavLink href='#'>Regular Cleaning</NavLink></DropdownItem>
                            <DropdownItem><NavLink href='#'>Carpet Cleaning</NavLink></DropdownItem>
                            <DropdownItem><NavLink href='#'>Construction Cleaning</NavLink></DropdownItem>
                            <DropdownItem><NavLink href='#'>Other Cleaning</NavLink></DropdownItem>
                            {/* <Dropdown nav isOpen={nestedDropdownOpen} toggle={nestedDropdownToggle}>
                                    <DropdownToggle nav caret>
                                        Nested Dropdown
                                    </DropdownToggle>
                                    <DropdownMenu end>
                                        <DropdownItem><NavLink href='#'>Nested Item 1</NavLink></DropdownItem>
                                        <DropdownItem><NavLink href='#'>Nested Item 2</NavLink></DropdownItem>
                                    </DropdownMenu>
                            </Dropdown> */}
                        </DropdownMenu>
                    </Dropdown>
                    <NavItem><NavLink href="#">Prices</NavLink></NavItem>
                    <NavItem><NavLink href="#">Reviews</NavLink></NavItem>
                    <NavItem><NavLink href="#">Contact Us</NavLink></NavItem>
                </Nav>
                <div>
                    <button className={styles.btn}>Log In</button>
                    <button className={`${styles.btn} ms-2`}>Book Now</button>
                </div>
            </Navbar>
        </MediaQuery>

        <MediaQuery maxWidth={867}>
            <Navbar className={`${styles.navbar} me-auto`}>
                <NavbarBrand href="/">
                    <Image
                    className={styles.logo}
                    alt="logo"
                    src={logo}
                    style={{
                    height: 50,
                    width: 50
                    }}
                    />
                </NavbarBrand>
                <NavbarToggler onClick={mblToggle} />
                <Collapse className={`${styles.navbar_collapse}`} isOpen={isOpen} navbar>
                <Nav navbar>
                    <NavItem><NavLink href="#">Home</NavLink></NavItem>
                    <NavItem><NavLink href="#">About Us</NavLink></NavItem>
                    <Dropdown nav isOpen={dropdownOpen} toggle={dropdownToggle}>
                        <DropdownToggle nav caret>Services</DropdownToggle>
                        <DropdownMenu>
                            <DropdownItem><NavLink href='#'>House Cleaning</NavLink></DropdownItem>
                            <DropdownItem><NavLink href='#'>Deep Cleaning</NavLink></DropdownItem>
                            <DropdownItem><NavLink href='#'>End Of Lease Cleaning</NavLink></DropdownItem>
                            <DropdownItem><NavLink href='#'>Regular Cleaning</NavLink></DropdownItem>
                            <DropdownItem><NavLink href='#'>Carpet Cleaning</NavLink></DropdownItem>
                            <DropdownItem><NavLink href='#'>Construction Cleaning</NavLink></DropdownItem>
                            <DropdownItem><NavLink href='#'>Other Cleaning</NavLink></DropdownItem>
                            {/* <Dropdown nav isOpen={nestedDropdownOpen} toggle={nestedDropdownToggle}>
                                    <DropdownToggle nav caret>
                                        Nested Dropdown
                                    </DropdownToggle>
                                    <DropdownMenu end>
                                        <DropdownItem><NavLink href='#'>Nested Item 1</NavLink></DropdownItem>
                                        <DropdownItem><NavLink href='#'>Nested Item 2</NavLink></DropdownItem>
                                    </DropdownMenu>
                            </Dropdown> */}
                        </DropdownMenu>
                    </Dropdown>
                    <NavItem><NavLink href="#">Prices</NavLink></NavItem>
                    <NavItem><NavLink href="#">Reviews</NavLink></NavItem>
                    <NavItem><NavLink href="#">Contact Us</NavLink></NavItem>
                </Nav>
                </Collapse>
            </Navbar>
        </MediaQuery>
        </header>
    </> 
  )
}

export default header