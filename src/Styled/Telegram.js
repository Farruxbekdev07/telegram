import { styled } from "styled-components";
  
// Home
export const Home = styled.div`
    width: 100%;
`
export const Icons = styled.div`
    width: 30px;
    height: 25px;
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 16px;
    color: gray;
    &:hover {
        background: darkgray;
    }
    &:hover:last-child {
        background: red;
        color: white;
    }
`
// Wrapper
export const Wrapper = styled.div`
    display: flex;
`
// Sidebar
export const SideBar = styled.aside`
    width: 70px;
    height: calc(100vh);
    display: grid;
    justify-content: center;
    align-items: start;
    background: rgb(12,34,56);
    position: sticky;
`
// Sidebar => ToggleSideBar
export const ToggleSideBar = styled.div`
    width: 250px;
    position: absolute;
    height: 100vh;
    /* border: 1px solid transparent; */
    /* background: rgb(12,34,56); */
    background: white;
    border: 1px solid lightgray;
    z-index: 5;
    left: -250px;
    transition: 0.5s;

    &.show {
        left: 0;
    }
    &.hide {
        left: -250px;
    }
`
// Sidebar => ToggleSideBar => UserInfoSideBar
export const UserInfoSideBar = styled.div`
    width: 100%;
    height: 110px;
    border-bottom: 1px solid lightgray;
    padding: 10px 0;
    font-family: sans-serif;

    div:last-child {
        display: flex;
        justify-content: space-between;
        padding: 0 10px;
        margin-top: 20px;
        font-weight: 600;
        font-size: 15px;
        letter-spacing: 1px;

        i {
            cursor: pointer;
        }
    }
`
// Sidebar => ToggleSideBar => LinkWrapper
export const LinkWrapper = styled.div`
    width: 100%;
    height: fit-content;
    /* border: 1px solid gray; */
    padding: 5px 0;
    font-family: sans-serif;
`
// Sidebar => ToggleSideBar => Link
export const Link = styled.div`
    width: 100%;
    height: 40px;
    /* border: 1px solid lightgray; */
    font-size: 14px;
    font-weight: 600;
    display: grid;
    grid-template-columns: 20% 60% 20%;
    align-items: center;
    padding: 0 20px;
    
    &:hover {
        cursor: pointer;
        background: lightgray;
    }
    /* padding: 5px; */
`
// Sidebar => ToggleSideBar => CloseBar
export const CloseBar = styled.div`
    width: 100%;
    height: 350px;
    /* border: 1px solid red; */
    padding: 0 20px 20px 0;
    font-size: 20px;
    display: flex;
    justify-content: end;
    align-items: end;
    i {
        cursor: pointer;
    }
`
// Sidebar => Barwrapper
export const BarWrapper = styled.div`
    width: 70px;
    height: fit-content;
    cursor: pointer;
    display: grid;
    gap: 5px;
`
// Sidebar => Barwrapper => Bar
export const Bar = styled.div`
    width: 100%;
    height: 60px;
    display: grid;
    justify-content: center;
    align-items: center;
    font-size: 20px;
    color: gray;
    text-align: center;
`
// Sidebar => Barwrapper => Bar => Span
export const Span = styled.div`
    font-size: 12px;
    font-family: sans-serif;
    font-weight: 600;
`
// Main
export const Main = styled.main`
    width: calc(100% - 70px);
    border: 1px solid gray;
    display: flex;
`
// Main => Chat wrapper
export const ChatWrapper = styled.div`
    width: 25%;
    height: calc(100vh);
    border: 1px solid lightgray;
`
// Main => Chat wrapper => Search wrapper
export const SearchWrapper = styled.div`
    width: 100%;
    height: fit-content;
    padding: 10px;
`
// Main => Chat wrapper => Search wrapper => Search
export const Search = styled.input`
    width: calc(100%);
    height: 30px;
    background: lightgray;
    border-radius: 2px;
    border: 0;
    padding: 10px;
    &::placeholder {
        color: gray;
    }
`
// Main => Chat wrapper => Chat
export const Chat = styled.div`
    width: 100%;
    height: 60px;
    display: flex;
    align-items: center;
    padding: 5px;
    padding-right: 10px;
    transition: 0.2s;
    &:hover {
        background: lightgray;
        cursor: pointer;
    }
`
// Main => Chat wrapper => Chat => ImageWrapper
export const ImageWrapper = styled.div`
    width: 45px;
    height: 45px;
    /* border: 1px solid blue; */
    border-radius: 50%;
    overflow: hidden;
    margin: 0 5px;
`
// Main => Chat wrapper => Chat => ImageWrapper => Image
export const Image = styled.img`
    width: 100%;
    height: 100%;
    /* border: 1px solid blue; */
    border-radius: 50%;
    overflow: hidden;
    object-fit: cover;
`
// Main => Chat wrapper => Chat => ImageWrapper => Name
export const Name = styled.div`
    width: 100%;
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    background: blue;
    color: white;
    font-size: 24px;
    font-weight: 600;
    font-family: sans-serif;
    border-radius: 50%;
    overflow: hidden;
    object-fit: cover;
`
// Main => Chat wrapper => Chat => UserName
export const UserName = styled.div`
    width: 65%;
    height: 100%;
    display: grid;
    align-items: center;
`
// Main => Chat wrapper => Chat => UserName => Names
export const Names = styled.p`
    font-size: 14px;
    font-weight: 600;
    font-family: sans-serif;
`
// Main => Chat wrapper => Chat => UserName => Messege
export const Messege = styled.p`
    font-size: 14px;
    font-family: sans-serif;
`
// Main => Chat wrapper => Chat => UserName => Time
export const Time = styled.div`
    width: 20%;
    height: 100%;
    text-align: end;
    font-family: sans-serif;
    font-size: 14px;
    padding: 5px 0;
`
// Main => Message wrapper
export const MessageWrapper = styled.div`
    width: 50%;
    height: 100vh;
`
// Main => Message wrapper => UserDetail
export const UserDetail = styled.div`
    width: 100%;
    height: 7vh;
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 0 10px;
    font-family: sans-serif;
    color: gray;
    border-bottom: 1px solid lightgray;
    div:last-child {
        display: flex;
        gap: 20px;
        i {
            cursor: pointer;
        }
    }
    p {
        font-size: 14px;
        font-weight: 600;
        color: black;
    }
    p:last-child {
        font-size: 13px;
        font-weight: 500;
    }
`
// Main => Message wrapper => Messeges
export const Messeges = styled.div`
    width: 100%;
    height: 86vh;
    display: grid;
    align-items: end;
    justify-content: end;
    padding: 10px;
    overflow-y: scroll;
    overflow-x: hidden;
    background: url(https://i.pinimg.com/originals/3d/8c/2f/3d8c2f2c82c1c9ef1e27be645cd1aa17.jpg);
    .div {
        display: flex;
        flex-direction: column;
        justify-content: end;
        align-items: end;
        height: fit-content;
    }
`
// Main => Message wrapper => Text
export const Text = styled.div`
    width: fit-content;
    min-width: 70px;
    max-width: 400px;
    height: fit-content;
    border: 1px solid transparent;
    display: flex;
    align-items: center;
    gap: 15px;
    text-align: center;
    padding: 5px 10px;
    border-radius: 15px;
    border-bottom-right-radius: 0;
    margin-top: 5px;
    background: aliceblue;
    p {
        font-size: 14px;
        padding-top: 5px;
        color: gray;
    }
    big {
        font-size: 18px;
        /* overflow: visible; */
        width: 100%;
    }
`
// Main => Message wrapper => Typing Messege
export const TypingMessege = styled.div`
    width: 100%;
    height: 7vh;
    display: flex;
    border-top: 1px solid lightgray;
    i {
        width: 55px;
        display: flex;
        justify-content: center;
        align-items: center;
        font-size: 22px;
        color: gray;
        cursor: pointer;
    }
    input {
        width: calc(100% - (55px * 3));
        height: 100%;
        border: 0;
        font-size: 16px;
        outline: none;
    }
`
// Main => User wrapper
export const UserWrapper = styled.div`
    width: 25%;
    height: calc(100vh);
    background: lightgray;
    overflow-y: scroll;
    overflow-x: hidden;
`
// Main => User wrapper => User info
export const UserInfo = styled.div`
    width: 100%;
    height: 150px;
    border-left: 1px solid lightgray;
    background: white;
    padding: 5px 0;
    box-shadow: 1px 1px 3px gray;
    margin-bottom: 10px;
    display: grid;
    align-items: center;
    padding: 10px;
`
// Main => User wrapper => User info => Flex
export const Flex = styled.div`
    display: flex;
    padding: 10px 0;
    justify-content: ${props => props.justify == 'between' ? 'space-between' : 'start'};
    align-items: center;
    padding: 0 ${props => props.pad == '20px' ? '15px' : '0px'};
    font-family: sans-serif;
    h6 {
        font-weight: 600;
        font-size: 16px;
        font-family: sans-serif;
    }
    div:last-child {
        margin-left: 15px;
    }
    i {
        cursor: pointer;
    }
    p {
        cursor: default;
    }
    img {
        cursor: pointer;
    }
`
// Main => User wrapper => User bio
export const UserBio = styled.div`
    width: 100%;
    height: fit-content;
    min-height: 150px;
    max-height: 260px;
    border: 1px solid lightgray;
    background: white;
    padding: 5px 0;
    box-shadow: 1px 1px 3px gray;
    margin-bottom: 10px;
    font-family: sans-serif;
`
// Main => User wrapper => User bio => Div
export const Div = styled.div`
    width: 100%;
    height: 50px;
    display: grid;
    grid-template-columns: 20% 80%;
    align-items: center;
    padding-right: 20px;

    p {
        font-size: 14px;
    }
    
    div:first-child {
        width: 100%;
        height: 100%;
        display: flex;
        justify-content: center;
        align-items: center;
        font-size: 18px;
    }
    small {
        display: block;
        font-size: 14px;
        margin-top: 7px;
        color: gray;
    }
`
// Main => User wrapper => User bio => AddContact
export const AddContact = styled.div`
    border: 0;
    &:hover {
        background: lightgray;
        cursor: pointer;
    }
`
// Main => User wrapper => User bio => Notification
export const Notification = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    i {
        font-size: 24px;
    }
`
// Main => User wrapper => Messege Filter
export const MessegeFilter = styled.div`
    width: 100%;
    height: fit-content;
    border: 1px solid lightgray;
    background: white;
    padding: 5px 0;
    box-shadow: 1px 1px 3px gray;
    margin-bottom: 10px;
    font-family: sans-serif;
`
// Main => User wrapper => Messege Filter => Grid
export const Grid = styled.div`
    width: 100%;
    height: 40px;
    padding: 5px 0;
    display: grid;
    grid-template-columns: 20% 80%;
    align-items: center;
    cursor: pointer;
    i {
        text-align: center;
        font-size: 18px;
    }
    div {
        display: flex;
        gap: 5px;
        font-size: 14px;
    }
    &:hover {
        background: lightgray;
    }
`
// Main => User wrapper => User Remove Wrap
export const UserRemoveWrap = styled.div`
    width: 100%;
    height: fit-content;
    border: 1px solid lightgray;
    background: white;
    padding: 5px 0;
    margin-bottom: 10px;
    font-family: sans-serif;
    div {
        display: grid;
        grid-template-columns: 20% 80%;
        align-items: center;
        height: 40px;
        font-size: 14px;
        &:hover {
            cursor: pointer;
            background: lightgray;
        }
    }
    i {
        font-size: 16px;
        display: flex;
        justify-content: center;
        align-items: center;
    }
`
// Main => User wrapper => User Remove Wrap => BlockUser
export const BlockUser = styled.div`
    color: red;
`