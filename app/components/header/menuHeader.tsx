import * as React from 'react';
import Box from '@mui/material/Box';
import SwipeableDrawer from '@mui/material/SwipeableDrawer';
import Button from '@mui/material/Button';
import List from '@mui/material/List';
import { Menu } from '@/app/assets/icon/menu';
import Link from 'next/link';
import {Cart} from "../../assets/icon/cart"
import "./main-header.css"
export const MenuHeader=()=> {
    const [state, setState] = React.useState({
        right: false,
      });
  const [isPath, setIsPath] = React.useState("/");
    
      const toggleDrawer = (anchor:any, open:any) => (event:any) => {
        if (
          event &&
          event.type === 'keydown' &&
          (event.key === 'Tab' || event.key === 'Shift')
        ) {
          return;
        }
    
        setState({ ...state, [anchor]: open });
      };
    
      const list = (anchor:any) => (
        <Box
          sx={{ width: anchor === 'top' || anchor === 'bottom' ? 'auto' : 250 }}
          role="presentation"
          onClick={toggleDrawer(anchor, false)}
          onKeyDown={toggleDrawer(anchor, false)}
        >
          <List>
            <Link className='pl-5 link-menu-res' href="/"   
            style={{
            color: `${isPath === "/" ? "#6C5FBC" : "#606060"}`,
          }}>Home</Link>
            <Link className='pl-5 link-menu-res' href="/page/datas"
              style={{
                color: `${isPath === "/page/datas" ? "#6C5FBC" : "#606060"}`,
              }}>Dishes</Link>
            <Link className='pl-5' href="/components/pageCart"
              style={{
                paddingLeft:"20px",
                color: `${isPath === "/components/pageCart" ? "#6C5FBC" : "#606060"}`,
              }}>
                <Cart color={isPath === "/components/pageCart" ? "#6C5FBC" : undefined} />
              </Link>
            <Link
             style={{backgroundColor:`${isPath === "/regisLog/login" ? "#6C5FBC": "#fff"}`}}
             className='pl-5 py-5 w-full flex max-w-max-menu0link  text-fifth text-lg font-semibold capitalize' href="/regisLog/login">Login</Link>
            <Link
             style={{backgroundColor:`${isPath === "/regisLog/login" ? "#6C5FBC": "#fff"}`}}
             className='pl-5 py-5 w-full flex max-w-max-menu0link capitalize font-bold text-lg w-30 bg-bg-button text-fifth' href="/regisLog/register">Sign Up</Link>
          </List>  
        </Box>
      );
    
      return (
        <>
          { ["right"].map((anchor) => (
            <React.Fragment key={anchor}>
              <Button onClick={toggleDrawer(anchor, true)}><Menu/></Button>
              <SwipeableDrawer
               anchor={anchor}
               open={state[anchor]}
                onClose={toggleDrawer(anchor, false)}
                onOpen={toggleDrawer(anchor, true)}
              >
                {list(anchor)}
              </SwipeableDrawer>
            </React.Fragment>
          ))}
        </>
  );
}