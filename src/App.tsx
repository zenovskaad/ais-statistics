import './App.css'
import {StatisticsPage} from "./pages/Statistics/StatisticPage.tsx";
import {SideBar} from "./pages/Statistics/components/SideBar/SideBar.tsx";

function App() {

  return (
    <div className={'app'}>
        <SideBar/>
        <div className={'content'}>
            <StatisticsPage/>
        </div>
    </div>
  )
}

export default App
