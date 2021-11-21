import React from 'react';
import styled from 'styled-components';
import ScrollContainer from "react-indiana-drag-scroll";
//components
import Container from '../Styled/Container';
import TabHeader from './TabHeader';
import TabBody from './TabBody';
//styled
const TabContainer = styled(Container)`
    margin-top: 10px;
    filter: drop-shadow(0px 2px 8px black);
    background-color: lightgray;
`;
const Tab = styled.div`
    position: relative;
    display: inline-block;
    width: 100%;
`;
const Wrapper = styled.div`
    overflow-x: scroll;
    overflow-y: visible;
    width: calc(100% - 280px);
    margin-left: 200px;
    margin-right: 80px;
    /* scrollbar setting for use without drag-scroll*/
    ::-webkit-scrollbar {
        height: 5px;
    }
    ::-webkit-scrollbar-thumb {
        background-color: #2796FF;
        border-radius: 100px;
    }

    @media(max-width: 576px) {
        width: calc(100% - 220px);
        margin-left: 150px;
        margin-right: 70px;
    }
`;

const UsersTab = () => (
    <TabContainer>
        <Tab>
            <Wrapper>
                <ScrollContainer horizontal={true}
                    style={{ display: "flex" }}
                >
                    <div>
                        <TabHeader/>
                        <TabBody/>
                    </div>
                </ScrollContainer>
            </Wrapper>
        </Tab>
    </TabContainer>
)
export default UsersTab;