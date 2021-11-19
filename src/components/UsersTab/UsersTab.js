import React from 'react';
import styled from 'styled-components';
import { useSelector } from 'react-redux';
import ScrollContainer from "react-indiana-drag-scroll";
//components
import Container from '../Styled/Container';
import TabHeader from './TabHeader';
import MainRow from './MainRow';
//store
import { selectDataOnPage } from '../../store/statisticOnPageSlice';
//styled
const Tab = styled(Container)`
    filter: drop-shadow(0px 2px 8px black);
    background-color: lightgray;
`;
const TabContainer = styled.div`
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

    ::-webkit-scrollbar {
        /* height: 5px; */
        display: none;
    }
    /* ::-webkit-scrollbar-thumb {
        background-color: gray;
        border-radius: 100px;
    } */

    @media(max-width: 576px) {
        width: calc(100% - 220px);
        margin-left: 150px;
        margin-right: 70px;
    }
`;

const UsersTab = () => {
    const dataOnPage = useSelector(selectDataOnPage);

    return (
        <Tab>
            <TabContainer>
                <Wrapper>
                    <ScrollContainer horizontal={true}
                        style={{ display: "flex" }}
                    >
                        <div>
                            <TabHeader/>
                            {dataOnPage && dataOnPage.map(({id, userName, total, days}) =>
                                <MainRow key={id}
                                    name={userName}
                                    total={total}
                                    items={days}
                                />
                            )}
                        </div>
                    </ScrollContainer>
                </Wrapper>
            </TabContainer>
        </Tab>
	);
}
export default UsersTab;