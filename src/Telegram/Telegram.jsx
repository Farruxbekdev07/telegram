import React, { useRef, useState } from "react";
import { Home, Header, Wrapper, SideBar, Main, Grid, ToggleSideBar, CloseBar, LinkWrapper, Link, UserInfoSideBar, UserDetail, Messeges, TypingMessege, Text, BlockUser, ChatWrapper, AddContact, Notification, MessageWrapper, UserWrapper, Div, Icons, BarWrapper, Bar, Span, SearchWrapper, Search, Chat, ImageWrapper, Image, Name, UserName, Time, Names, Messege, UserInfo, UserBio, UserRemoveWrap, MessegeFilter, Flex } from '../Styled/Telegram';
import '../App.css'
function Telegram() {
    const [messegeChange, setMessegeChange] = useState('');
    const [messegeTodo, setMessegeTodo] = useState([]);
    const [toggle, setToggle] = useState(false);
    const messegeRef = useRef();
    const sidebar = document.getElementById('sidebar');
    const trigger = document.getElementById('trigger');
    function sidebarToggle() {
        if (toggle === true) {
            setToggle(false);
        } else {
            setToggle(true);
        }
    }

    function CreateMessege() {
        if (messegeChange !== '') {
            const text = messegeRef.current.value;
            const obj = {
                text: text,
            }
            setMessegeTodo([...messegeTodo, obj]);
            setMessegeChange('');
        }
    }
    
    return (
        <>
            <Home>
                <Wrapper>
                    <SideBar>
                        <ToggleSideBar className={toggle === true ? 'show' : 'hide'}>
                            <UserInfoSideBar>
                                <ImageWrapper>
                                    <Image src="https://dynamic-media-cdn.tripadvisor.com/media/photo-o/0f/ba/29/5c/img-worlds-of-adventure.jpg?w=1200&h=1200&s=1" alt="" />
                                </ImageWrapper>
                                <div>
                                    <p>Farrukhbek</p>
                                    <p><i class="fa-solid fa-chevron-down"></i></p>
                                </div>
                            </UserInfoSideBar>
                            <LinkWrapper>
                                <Link>
                                    <i class="fa-solid fa-user-group"></i>
                                    <p>New Group</p>
                                </Link>
                                <Link>
                                    <i class="fa-solid fa-desktop"></i>
                                    <p>New Channel</p>
                                </Link>
                                <Link>
                                    <i class="fa-solid fa-user"></i>
                                    <p>Contacts</p>
                                </Link>
                                <Link>
                                    <i class="fa-solid fa-phone"></i>
                                    <p>Calls</p>
                                </Link>
                                <Link>
                                    <i class="fa-solid fa-bookmark"></i>
                                    <p>Saved Messeges</p>
                                </Link>
                                <Link>
                                    <i class="fa-solid fa-gear"></i>
                                    <p>Settings</p>
                                </Link>
                                <Link>
                                    <i class="fa-solid fa-moon"></i>
                                    <p>Night Mode</p>
                                    <i class="fa-solid fa-toggle-on"></i>
                                    {/* <i class="fa-solid fa-toggle-off"></i> */}
                                </Link>
                            </LinkWrapper>
                            <CloseBar onClick={sidebarToggle}><i class="fa-solid fa-angles-left"></i></CloseBar>
                        </ToggleSideBar>
                        <BarWrapper>
                            <Bar>
                                <i class="fa-solid fa-bars" onClick={sidebarToggle}></i>
                            </Bar>
                            <Bar>
                                <i class="fa-solid fa-comments"></i>
                                <Span>All Chats</Span>
                            </Bar>
                            <Bar>
                                <i class="fa-solid fa-folder"></i>
                                <Span>AWS</Span>
                            </Bar>
                            <Bar>
                                <i class="fa-solid fa-folder"></i>
                                <Span>Personal</Span>
                            </Bar>
                            <Bar>
                                <i class="fa-solid fa-comment"></i>
                                <Span>Unread</Span>
                            </Bar>
                            <Bar>
                                <i class="fa-solid fa-folder"></i>
                                <Span>Bot</Span>
                            </Bar>
                            <Bar>
                                <i class="fa-solid fa-sliders"></i>
                                <Span>Edit</Span>
                            </Bar>
                        </BarWrapper>
                    </SideBar>
                    <Main>
                        <ChatWrapper>
                            <SearchWrapper>
                                <Search type="text" placeholder="Search" />
                            </SearchWrapper>
                            <Chat>
                                <ImageWrapper>
                                    <Image src="https://dynamic-media-cdn.tripadvisor.com/media/photo-o/0f/ba/29/5c/img-worlds-of-adventure.jpg?w=1200&h=1200&s=1" alt="user image" />
                                    {/* <Name>A</Name> */}
                                </ImageWrapper>
                                <UserName>
                                    <Names>Name</Names>
                                    <Messege>Messege</Messege>
                                </UserName>
                                <Time>2:21 PM</Time>
                            </Chat>
                            <Chat>
                                <ImageWrapper>
                                    {/* <Image src="https://dynamic-media-cdn.tripadvisor.com/media/photo-o/0f/ba/29/5c/img-worlds-of-adventure.jpg?w=1200&h=1200&s=1" alt="user image" /> */}
                                    <Name>A</Name>
                                </ImageWrapper>
                                <UserName>
                                    <Names>Name</Names>
                                    <Messege>Messege</Messege>
                                </UserName>
                                <Time>2:21 PM</Time>
                            </Chat>
                            <Chat>
                                <ImageWrapper>
                                    <Image src="https://dynamic-media-cdn.tripadvisor.com/media/photo-o/0f/ba/29/5c/img-worlds-of-adventure.jpg?w=1200&h=1200&s=1" alt="user image" />
                                    {/* <Name>A</Name> */}
                                </ImageWrapper>
                                <UserName>
                                    <Names>Name</Names>
                                    <Messege>Messege</Messege>
                                </UserName>
                                <Time>2:21 PM</Time>
                            </Chat>
                            <Chat>
                                <ImageWrapper>
                                    {/* <Image src="https://dynamic-media-cdn.tripadvisor.com/media/photo-o/0f/ba/29/5c/img-worlds-of-adventure.jpg?w=1200&h=1200&s=1" alt="user image" /> */}
                                    <Name>A</Name>
                                </ImageWrapper>
                                <UserName>
                                    <Names>Name</Names>
                                    <Messege>Messege</Messege>
                                </UserName>
                                <Time>2:21 PM</Time>
                            </Chat>
                            <Chat>
                                <ImageWrapper>
                                    <Image src="https://dynamic-media-cdn.tripadvisor.com/media/photo-o/0f/ba/29/5c/img-worlds-of-adventure.jpg?w=1200&h=1200&s=1" alt="user image" />
                                    {/* <Name>A</Name> */}
                                </ImageWrapper>
                                <UserName>
                                    <Names>Name</Names>
                                    <Messege>Messege</Messege>
                                </UserName>
                                <Time>2:21 PM</Time>
                            </Chat>
                            <Chat>
                                <ImageWrapper>
                                    {/* <Image src="https://dynamic-media-cdn.tripadvisor.com/media/photo-o/0f/ba/29/5c/img-worlds-of-adventure.jpg?w=1200&h=1200&s=1" alt="user image" /> */}
                                    <Name>A</Name>
                                </ImageWrapper>
                                <UserName>
                                    <Names>Name</Names>
                                    <Messege>Messege</Messege>
                                </UserName>
                                <Time>2:21 PM</Time>
                            </Chat>
                        </ChatWrapper>
                        <MessageWrapper>
                            <UserDetail>
                                <div>
                                    <p>Farrukhbek</p>
                                    <p>last seen recently</p>
                                </div>
                                <div>
                                    <i class="fa-solid fa-magnifying-glass"></i>
                                    <i class="fa-solid fa-phone"></i>
                                    <i class="fa-regular fa-square"></i>
                                    <i class="fa-solid fa-ellipsis-vertical"></i>
                                </div>
                            </UserDetail>
                            <Messeges>
                                <div className="div">
                                {
                                    messegeTodo.map((item, i) => {
                                        return (
                                            <>
                                                <Text key={i}>
                                                    <big>{item.text}</big>
                                                    <p>4:46 PM</p>
                                                </Text>
                                            </>
                                        )
                                    })
                                }
                                </div>
                            </Messeges>
                            <TypingMessege>
                                <i class="fa-solid fa-paperclip"></i>
                                <input type="text" placeholder="Write messege..." value={messegeChange} onChange={(e) => setMessegeChange(e.target.value)} ref={messegeRef} />
                                <i class="fa-regular fa-face-smile"></i>
                                {
                                    messegeChange === ''
                                    ? <i class="fa-solid fa-microphone"></i>
                                    : <i class="fa-solid fa-paper-plane" onClick={CreateMessege}></i>
                                }
                            </TypingMessege>
                        </MessageWrapper>
                        <UserWrapper>
                            <UserInfo>
                                <Flex justify='between' pad='20px'>
                                    <h6>User Info</h6>
                                    <i class="fa-solid fa-xmark"></i>
                                </Flex>
                                <Flex>
                                    <ImageWrapper style={{width: '70px', height: '70px'}}>
                                        <Image src="https://dynamic-media-cdn.tripadvisor.com/media/photo-o/0f/ba/29/5c/img-worlds-of-adventure.jpg?w=1200&h=1200&s=1" alt="user image" />
                                    </ImageWrapper>
                                    <div>
                                        <h6>Farrukhbek</h6>
                                        <p>last seen recently</p>
                                    </div>
                                </Flex>
                            </UserInfo>
                            <UserBio>
                                <Div>
                                    <div style={{border: '2px solid black', borderRadius: '50%', width: '25px', height: '25px', margin: 'auto'}}>
                                        <p>i</p>
                                    </div>
                                    <div>
                                        <p>+998 93 222 80 66</p>
                                        <small>Mobile</small>
                                    </div>
                                </Div>
                                <Div>
                                    <div></div>
                                    <div>
                                        <p>Lorem ipsum dolor sit amet, elit.</p>
                                        <small>Bio</small>
                                    </div>
                                </Div>
                                <Div>
                                    <div></div>
                                    <div>
                                        <p><a href="">@username</a></p>
                                        <small>Username</small>
                                    </div>
                                </Div>
                                <Div as={AddContact}>
                                    <div></div>
                                    <AddContact>Add To Contacts</AddContact>
                                </Div>
                                <Div as={AddContact}>
                                    <div>
                                        <i class="fa-regular fa-bell"></i>
                                    </div>
                                    <Notification>
                                        Notifications
                                        <i class="fa-solid fa-toggle-on"></i>
                                        {/* <i class="fa-solid fa-toggle-off"></i> */}
                                    </Notification>
                                </Div>
                            </UserBio>
                            <MessegeFilter>
                                <Grid>
                                    <i class="fa-regular fa-image"></i>
                                    <div>
                                        <p>1</p>
                                        <p>Photos</p>
                                    </div>
                                </Grid>
                                <Grid>
                                    <i class="fa-solid fa-video"></i>
                                    <div>
                                        <p>1</p>
                                        <p>Videos</p>
                                    </div>
                                </Grid>
                                <Grid>
                                    <i class="fa-regular fa-file"></i>
                                    <div>
                                        <p>1</p>
                                        <p>Files</p>
                                    </div>
                                </Grid>
                                <Grid>
                                    <i class="fa-solid fa-link"></i>
                                    <div>
                                        <p>1</p>
                                        <p>Shared Links</p>
                                    </div>
                                </Grid>
                                <Grid>
                                    <i class="fa-solid fa-user-group"></i>
                                    <div>
                                        <p>1</p>
                                        <p>Groups in common</p>
                                    </div>
                                </Grid>
                            </MessegeFilter>
                            <UserRemoveWrap>
                                <div>
                                    <i class="fa-solid fa-share"></i>
                                    <p>Share this contact</p>
                                </div>
                                <div>
                                    <i class="fa-solid fa-pen"></i>
                                    <p>Edit contact</p>
                                </div>
                                <div>
                                    <i class="fa-solid fa-trash"></i>
                                    <p>Delete contact</p>
                                </div>
                                <div style={{color: 'red'}}>
                                    <i class="fa-regular fa-hand"></i>
                                    <p>Block user</p>
                                </div>
                            </UserRemoveWrap>
                        </UserWrapper>
                    </Main>
                </Wrapper>
            </Home>
        </>
    )
}
export default Telegram;