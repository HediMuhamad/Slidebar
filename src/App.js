import React from "react";
import ImageContainer from "./components/image-container/image-container.component";
import Layout from "./components/layout/layout.component";
import SlidebarContainer from "./components/slidebar-container/slidebar-container.component";

import Icon from "./components/icon/icon.component";
import { BsFillArrowUpCircleFill, BsFillBookmarkStarFill, BsChatLeftTextFill, BsCreditCard2FrontFill, BsArrowLeftSquareFill } from "react-icons/bs";
import { MdSettingsApplications } from "react-icons/md"

function App() {
  return (
    <div className="h-full w-100 , flex items-center , bg-white">
      <Layout className="flex-row justify-start p-0 aspect-[14/9] bg-amber-300 overflow-clip">
        <SlidebarContainer>
          <ImageContainer src="assets/image/user.avif"/>
          <Icon icon={BsFillArrowUpCircleFill}/>
          <Icon icon={BsFillBookmarkStarFill}/>
          <Icon icon={BsChatLeftTextFill}/>
          <Icon icon={BsCreditCard2FrontFill}/>
          <Icon icon={MdSettingsApplications} firstBottom className={'text-[1.75rem]'}/>
          <Icon icon={BsArrowLeftSquareFill} lastBottom/>
        </SlidebarContainer>
      </Layout>
    </div>
  );
}

export default App;
