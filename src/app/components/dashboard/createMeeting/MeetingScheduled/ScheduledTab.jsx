import React from 'react';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import ExpireTab from './ExpireTab';
import UpComingTab from './UpComingTab';

const CustomTabs = () => {
    return (
        <div className='container mx-auto  mr-4 p-6 text-slate-950 bg-blue-50 shadow-lg rounded-md'>
            <h1 className="text-2xl pb-3 font-semibold my-4 md:my-8 rounded-2xl  border-b-2 border-green-500 text-center mx-auto text-black lg:text-2xl lg:w-2/4 md:w-1/4 dark:text-white"> Scheduled & Concluded Meetings</h1>
              
            <Tabs>
            <TabList>
            <Tab>Upcoming</Tab>
                <Tab>Expired</Tab>
            
            </TabList>

            
            {/* upcoming tab here  */}
            <TabPanel>
                <UpComingTab />
            </TabPanel>
            {/* expire tab here  */}
            <TabPanel>
                <ExpireTab />
            </TabPanel>

        </Tabs> 
     </div>
       
    );
};

export default CustomTabs;
