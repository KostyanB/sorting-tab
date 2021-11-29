import React from 'react';
import styled from 'styled-components';
import env from '../../env.json';
//components
import ScrollContainer from "react-indiana-drag-scroll";
import Container from '../Styled/Container';
import TabHeader from './TabHeader';
import TabBody from './TabBody';
//style-var
const {
    scrollbar: {
        hideTabScrollbar,
        scrollbarColor,
    },
    tab: {
        tabBackground
    }
} = env.style;
//styled
const TabContainer = styled(Container)`
    margin-top: 10px;
    /* filter: drop-shadow(0px 2px 8px black); */
    background-color: ${tabBackground};
    border-radius: 2px;
    padding: 0px;
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
        background-color: ${scrollbarColor};
        border-radius: 100px;
    }

    @media(max-width: 576px) {
        width: calc(100% - 220px);
        margin-left: 150px;
        margin-right: 70px;
    }
    `;
const TabScrollContainer = styled(ScrollContainer)`
    display: flex;
    padding-top: 15px;
    padding-bottom: 10px;

    ::-webkit-scrollbar {
        height: 5px;
    }
    ::-webkit-scrollbar-thumb {
        background-color: ${scrollbarColor};
        border-radius: 100px;
    }
`;
const Table = styled.table`
    height: 100%;
    width:100%;
    text-align: center;
    vertical-align: middle;
    border-collapse: collapse;
`;
const UsersTab = () => (
    <TabContainer className="shadow">
        <Tab>
            <Wrapper>
                <TabScrollContainer horizontal={true}
                    hideScrollbars={hideTabScrollbar}
                >
                    <Table>
                        <TabHeader/>
                        <TabBody/>
                    </Table>
                </TabScrollContainer>
            </Wrapper>
        </Tab>
    </TabContainer>
)
export default UsersTab;