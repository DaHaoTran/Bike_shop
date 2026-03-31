"use client"
import React, { Suspense, useEffect, useState } from 'react';
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
import Swal from 'sweetalert2'
import { useRouter } from 'next/navigation';
import { addFirmS, setFirmId } from '../features/firm/firmSlice';
import { addBikeS } from '../features/bike/bike_slice';
import { addDetailS } from '../features/bike_details/details_slice';
import { useDispatch, useSelector } from 'react-redux';
import { getFirmList, getBikeList, getDetailList } from '../methods/list';
import ChatForm from '../components/chat_form';
import Loading from '../components/loading';
import nProgress from 'nprogress';
import Router from 'next/router';

export default function LayoutProvider({ children }) {
  const router = useRouter();
  const dispatch = useDispatch();
  const [isOpen, setIsOpen] = useState(false);
  const [isChatOpen, setIsChatOpen] = useState(false);
  const { firms } = useSelector(x => x.firm);
  const { details } = useSelector(x => x.details);
  const [names, setNames] = useState([]);
  const toggle = () => setIsOpen(!isOpen);
  const chatToggle = () => setIsChatOpen(!isChatOpen);
  const { data: bikeData, error: bikeError, isLoading: bikeLoading } = getBikeList();
  const { data: firmData, error: firmError, isLoading: firmLoading } = getFirmList();
  const { data: detailData, error: detailError, isLoading: detailLoading } = getDetailList();

  Router.events.on('routeChangeStart', () => NProgress.start());
  Router.events.on('routeChangeComplete', () => NProgress.done());
  Router.events.on('routeChangeError', () => NProgress.done());

  const onPriceSelectionClick = async () => {
    const { value: fruit } = await Swal.fire({
      title: "Lọc khoảng giá",
      input: "select",
      inputOptions: {
        from0to50: 'Từ 0 - 50 tr',
        from50to100: 'Từ 50 - 100 tr',
        from100to150: 'Từ 100 - 150 tr',
        from150to300: 'Từ 150 - 300 tr',
        from300to450: 'Từ 300 - 450 tr',
        from450to600: 'Từ 450 - 600 tr',
      },
      inputPlaceholder: "Chọn lọc giá",
      showCancelButton: true,
      inputValidator: (value) => {
        return new Promise((resolve) => {
          if (value === "from0to50" || value === "from50to100") {
            resolve();
            router.push(`/products?str=${value}`)
          } else {
            resolve("Sorry, not available now !");
          }
        });
      }
    });
  }
  const onFirmSelectionClick = async () => {
    const { value: fruit } = await Swal.fire({
      title: "Lọc thương hiệu",
      input: "select",
      inputOptions: names,
      inputPlaceholder: "Chọn thương hiệu xe",
      showCancelButton: true,
      inputValidator: (value) => {
        return new Promise((resolve) => {
          resolve()
          const firm = firms.find(x => x.name === value);
          router.push(`/products?id=${firm.id}&str=${value}`);
        });
      }
    });
  }
  const onCartClick = async () => {
    Swal.fire({
      title: "Giàu nhỉ ?",
      text: "Tớ nghĩ cậu không đủ tiền để mua nổi 1 lần 2 chiếc xe đâu !",
      icon: "question",
      showCancelButton: true,
      confirmButtonText: "Vâng, đúng vậy",
      cancelButtonText: "Không, tôi nghèo"
    });
  }

  const onReviewClick = () => {
    router.push('/pages/reviews')
  }

  const onHomeClick = () => {
    router.push('/')
  }

  useEffect(() => {
    if (!bikeData || !firmData || !detailData) return

    dispatch(addBikeS(bikeData));
    dispatch(addFirmS(firmData));
    dispatch(addDetailS(detailData));
  }, [bikeData, firmData, detailData])

  useEffect(() => {
    if (!firms) return;
    firms.forEach((x) => {
      const name = x.name;
      setNames({ [name]: name, ...names });
    })
  }, [firms])

  useEffect(() => {
    if (!bikeError || !firmError || !detailError) return

    router.push(`/pages/errors/${500}`)

  }, [bikeError, firmError, detailError])

  return (
    <Suspense fallback={<Loading />}>
      <div>
        <nav className={styles.nav}>
          <Navbar expand='md' fixed='top'>
            <NavbarBrand onClick={x => onHomeClick()}><h2><strong>Bike shop</strong></h2></NavbarBrand>
            <NavbarToggler onClick={toggle} />
            <Collapse isOpen={isOpen} navbar>
              <Nav className="me-auto w-100 d-flex justify-content-center" navbar>
                <NavItem>
                  <NavLink className={styles.nav_link} onClick={x => onReviewClick()}>Giới thiệu</NavLink>
                </NavItem>
                <NavItem>
                  <NavLink className={styles.nav_link} onClick={x => onPriceSelectionClick()}>Trong tầm giá</NavLink>
                </NavItem>
                <NavItem>
                  <NavLink className={styles.nav_link} onClick={x => onFirmSelectionClick()}>Tên sản phẩm</NavLink>
                </NavItem>
                <NavItem>
                  <NavLink className={styles.nav_link} href="#bike_types">Loại xe</NavLink>
                </NavItem>
                <NavItem>
                  <NavLink className={styles.nav_link} onClick={(x => onCartClick())}>Giỏ hàng</NavLink>
                </NavItem>
              </Nav>
              {/* <NavbarText>Simple Text</NavbarText> */}
            </Collapse>
          </Navbar>
        </nav>
        <article>{children}</article>
        {/* chat form button */}
        <div className={styles.show_widget} onClick={x => chatToggle()}><IoChatbubbleOutline size='40' /><div></div></div>
        {/* chat form */}
        <ChatForm isVisible={isChatOpen} />
        {/* footer */}
        <footer className={styles.footer}><h4>No coppyright</h4></footer>
      </div>
    </Suspense>
  )
}
