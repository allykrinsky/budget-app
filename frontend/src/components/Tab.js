import { Tabs, TabList, TabPanels, Tab, TabPanel } from '@chakra-ui/react'

const TabGroup = ({info, isActive, onClick }) => {
  return (
    <Tabs>
      <TabList>
        {info.map((item) => (
          <Tab>{item.title}</Tab>
        ))}
      </TabList>
      <TabPanels>
      {info.map((item) => (
         <TabPanel>
         <p>{item.content}</p>
        </TabPanel>
        ))}
      </TabPanels>
    </Tabs>

  )
}

export default TabGroup;



