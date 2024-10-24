import React from 'react';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import ExpireTab from './ExpireTab';
import UpComingTab from './UpComingTab';

const CustomTabs = () => {
    return (
        <Tabs>
            <TabList>
                <Tab>Expired</Tab>
                <Tab>Upcoming</Tab>
            </TabList>

            {/* expire tab here  */}
            <TabPanel>
                <ExpireTab />
            </TabPanel>

            {/* upcoming tab here  */}
            <TabPanel>
                <UpComingTab />
            </TabPanel>
        </Tabs>
    );
};

export default CustomTabs;
