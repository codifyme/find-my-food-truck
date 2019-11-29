import React, { Component } from 'react'
import DesktopNavbar from './DesktopNavbar'
/*import MobileNavbar from './MobileNavbar'*/
import styled from 'styled-components'


const MyNavbar=styled.div`
    display:flex;
    flex-flow:column nowrap;
    justify-content:flex-start;
    `

class Navbar extends Component{
    render(){
        return(
            <MyNavbar>
                <DesktopNavbar/>
                {/*<MobileNavbar/>*/}
            </MyNavbar>
        )
    }
}
//const Navbar = styled.nav
//`display:flex;`
//     flex-flow:column-nowrap;
//     justify-content:flex-start;
//`
// class Navbar extends Component{
//     render(){
//         return (
//             <MyNavbar>
//                 <DesktopNavbar/>
//                 {/*<MobileNavbar/>*/}
//             </MyNavbar>
//         );
//     }
// };
// const Navbar=()=>{
//     return (
//             <Navbar>
//                 <DesktopNavbar/>
//                  {/*<MobileNavbar/>*/}
//             </Navbar>
//     );
// };
export default Navbar;
