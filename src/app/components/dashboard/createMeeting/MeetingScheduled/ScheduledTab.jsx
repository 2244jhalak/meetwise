import React from 'react';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import ExpireTab from './ExpireTab';
import UpComingTab from './UpComingTab';

const CustomTabs = () => {
    return (
        <div className='container mx-auto  p-6 text-white bg-slate-950 shadow-lg rounded-md'>
            <h1 className="text-2xl pb-3 font-bold  rounded-2xl  border-b-2 border-slate-200 text-center mx-auto text-slate-100 lg:text-3xl w-[500px] dark:text-white mb-6">
            Scheduled & Concluded Meetings
      </h1>
              
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
