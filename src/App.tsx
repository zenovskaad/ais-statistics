import './App.css'
import {StatisticsPage} from "./pages/Statistics/StatisticPage.tsx";

function App() {

  return (
    <div className={'app'}>
        <div className={'sidebar'}></div>
        <div className={'content'}>
            <StatisticsPage/>
        </div>
    </div>
  )
}

export default App
