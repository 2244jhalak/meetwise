"use client"
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css'; // Import default styling or create your own
import Meet_Info from './Meet_Info';

export default function Meeting_Tab() {
    return (
        <Tabs>
            <TabList>
                <Tab>Upcomming</Tab>
                <Tab>Expired</Tab>
            </TabList>

            <TabPanel>
                <h2>Content for Tab 1</h2>
                <Meet_Info></Meet_Info>
                {/* <p>This is the first tab content.</p> */}
            </TabPanel>
            <TabPanel>
                <h2>Content for Tab 2</h2>
                <p>This is the second tab content.</p>
            </TabPanel>
            <TabPanel>
                <h2>Content for Tab 3</h2>
                <p>This is the third tab content.</p>
            </TabPanel>
        </Tabs>
    );
}