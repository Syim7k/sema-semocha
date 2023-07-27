import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Layout from './components/layout/Layout';
import Home from './pages/home/Home';
////Pages
import IntroductionTwo from "./pages/IntroductionPage/IntroductionTwo/IntroductionTwo";
import IntroductionThree from "./pages/IntroductionPage/IntroductionThree/IntroductionThree";
import IntroductionFour from "./pages/IntroductionPage/IntroductionFour/IntroductionFour";
import IntroductionFifht from "./pages/IntroductionPage/IntroductionFifht/IntroductionFifht";
import IntroductionSix from "./pages/IntroductionPage/IntroductionSix/IntroductionSix";
import IntroductionSeven from "./pages/IntroductionPage/IntroductionSeven/IntroductionSeven";
import IntroductionEight from "./pages/IntroductionPage/IntroductionEight/IntroductionEight"
import IntroductionNine from './pages/IntroductionPage/IntroductionNine/IntroductionNine';
import IntroductionTen from './pages/IntroductionPage/IntroductionTen/IntroductionTen';
import IntroductionEleven from "./pages/IntroductionPage/IntroductionEleven/IntroductionEleven";
import IntroductionTwelve from "./pages/IntroductionPage/IntroductionTwelve/IntroductionTwelve";
import IntroductionThirteen from "./pages/IntroductionPage/IntroductionThirteen/IntroductionThirteen";
import IntroductionFourteen from "./pages/IntroductionPage/IntroductionFourteen/IntroductionFourteen";
import IntroductionFifteen from "./pages/IntroductionPage/IntroductionFifteen/IntroductionFifteen";
import IntroductionSixteen from "./pages/IntroductionPage/IntroductionSixteen/IntroductionSixteen";
import IntroductionSeventeen from "./pages/IntroductionPage/IntroductionSeventeen/IntroductionSeventeen";
import IntroductionEighteen from "./pages/IntroductionPage/IntroductionEighteen/IntroductionEighteen";
import IntroductionNineteen from "./pages/IntroductionPage/IntroductionNineteen/IntroductionNineTeen";
import IntroductionTwenty from "./pages/IntroductionPage/IntroductionTwenty/IntroductionTwenty";
import IntroductionTwentyOne from "./pages/IntroductionPage/IntroductionTwentyOne/IntroductionTwentyOne";
import IntroductionTwentyTwo from "./pages/IntroductionPage/IntroductionTwentyTwo/IntroductionTwentyTwo";
import IntroductionTwentyThree from "./pages/IntroductionPage/IntroductionTwentyThree/IntrouductionTwentyThree";
import IntroductionTwentyFour from "./pages/IntroductionPage/IntroductionTwentyFour/IntroductionTwentyFour";
import IntroductionTwentyFift from './pages/IntroductionPage/IntroductionTwentyFift/IntroductionTwentyFift';
import IntroductionTwentySix from './pages/IntroductionPage/IntroductionTwentySix/IntroductionTwentySix';
import IntroductionTwentySeven from './pages/IntroductionPage/IntroductionTwentySeven/IntroductionTwentySeven';
import IntroductionTwentyEight from './pages/IntroductionPage/IntroductionTwentyEight/IntroductionTwentyEight';
import IntroductionTwentyNine from './pages/IntroductionPage/IntroductionTwentyNine/IntroductionTwentyNine';
import IntroductionThirty from './pages/IntroductionPage/IntroductionThirty/IntroductionThirty';
import IntroductionThirtyOne from './pages/IntroductionPage/IntroductionThirtyOne/IntroductionThirtyOne';
import IntroductionThirtyTwo from './pages/IntroductionPage/IntroductionThirtyTwo/IntroductionThirtyTwo';
import IntroductionThirtyThree from './pages/IntroductionPage/IntroductionThirtyThree/IntroductionThirtyThree'
import IntroductionThirtyFour from './pages/IntroductionPage/IntroductionThirtyFour/IntroductionThirtyFour'
import IntroductionThirtyFift from './pages/IntroductionPage/IntroductionThirtyFift/IntroductionThirtyFift';
import IntroductionThirtySix from './pages/IntroductionPage/IntroductionThirtySix/IntroductionThirtySix';
import IntroductionThirtySeven from './pages/IntroductionPage/IntroductionThirtySeven/IntroductionThirtySeven';
import IntroductionThirtyEight from './pages/IntroductionPage/IntroductionThirtyEight/IntroductionThirtyEight';
import IntroductionThirtyNine from './pages/IntroductionPage/IntroductionThirtyNine/IntroductionThirtyNine';
import IntroductionFifty from './pages/IntroductionPage/IntroductionFifty/IntroductionFifty'
import IntroductionFiftyOne from './pages/IntroductionPage/IntroductionFiftyOne/IntroductionFiftyOne'
import IntroductionFiftyTwo from './pages/IntroductionPage/IntroductionFiftyTwo/IntroductionFiftyTwo'
import IntroductionFiftyThree from './pages/IntroductionPage/IntroductionFiftyThree/IntroductionFiftyThree'
import IntroductionFiftyFour from './pages/IntroductionPage/IntroductionFiftyFour/IntroductionFiftyFour'
import IntroductionFiftyFift from './pages/IntroductionPage/IntroductionFiftyFift/IntroductionFiftyFift'
import IntroductionFiftySix from './pages/IntroductionPage/IntroductionFiftySix/IntroductionFiftySix'
import IntroductionFiftySeven from './pages/IntroductionPage/IntroductionFiftySeven/IntroductionFiftySeven'
import IntroductionFiftyEight from './pages/IntroductionPage/IntroductionFiftyEight/IntroductionFiftyEight';
import IntroductionFiftyNine from './pages/IntroductionPage/IntroductionFiftyNine/IntroductionFiftyNine'




const App = () => {
  return (
    <div>
      <Routes>
        <Route path='/' element= {<Layout />}>
        <Route index element={<Home />}/>
        <Route path='/introductionTwo' element={<IntroductionTwo />}/>
        <Route path='/introductionThree' element={<IntroductionThree />}/>
        <Route path='/introductionFour' element={<IntroductionFour />}/>
        <Route path='/introductionFifht' element={<IntroductionFifht />}/>
        <Route path='/introductionSix' element={<IntroductionSix />}/>
        <Route path='/introductionSeven' element={<IntroductionSeven />}/>
        <Route path='/introductionEight' element={<IntroductionEight />}/>
        <Route path='/introductionNine' element={<IntroductionNine />}/>
        <Route path='/introductionTen' element={<IntroductionTen />}/>
        <Route path='/introductionEleven' element={<IntroductionEleven />}/>
        <Route path='/introductionTwelve' element={<IntroductionTwelve />}/>
        <Route path='/introductionThirteen' element={<IntroductionThirteen />}/>
        <Route path='/introductionFourteen' element={<IntroductionFourteen />}/>
        <Route path='/introductionFifteen' element={<IntroductionFifteen />}/>
        <Route path='/introductionSixteen' element={<IntroductionSixteen />}/>
        <Route path='/introductionSeventeen' element={<IntroductionSeventeen />}/>
        <Route path='/introductionEighteen' element={<IntroductionEighteen />}/>
        <Route path='/introductionNineteen' element={<IntroductionNineteen />}/>
        <Route path='/introductionTwenty' element={<IntroductionTwenty />}/>
        <Route path='/introductionTwentyOne' element={<IntroductionTwentyOne />}/>
        <Route path='/introductionTwentyTwo' element={<IntroductionTwentyTwo />}/>
        <Route path='/introductionTwentyThree' element={<IntroductionTwentyThree />}/>
        <Route path='/introductionTwentyFour' element={<IntroductionTwentyFour />}/>
        <Route path='/introductionTwentyFift' element={<IntroductionTwentyFift />}/>
        <Route path='/introductionTwentySix' element={<IntroductionTwentySix />}/>
        <Route path='/introductionTwentySeven' element={<IntroductionTwentySeven />}/>
        <Route path='/introductionTwentyEight' element={<IntroductionTwentyEight />}/>
        <Route path='/introductionTwentyNine' element={<IntroductionTwentyNine />}/>
        <Route path='/introductionThirty' element={<IntroductionThirty/>}/>
        <Route path='/introductionThirtyOne' element={<IntroductionThirtyOne/>}/>
        <Route path='/introductionThirtyTwo' element={<IntroductionThirtyTwo/>}/>
        <Route path='/introductionThirtyThree' element={<IntroductionThirtyThree/>}/>
        <Route path='/introductionThirtyFour' element={<IntroductionThirtyFour/>}/>
        <Route path='/introductionThirtyFift' element={<IntroductionThirtyFift/>} />
        <Route path='/introductionThirtySix' element={<IntroductionThirtySix/>}/>
        <Route path='/introductionThirtySeven' element={<IntroductionThirtySeven/>} />
        <Route path='/introductionThirtyEight' element={< IntroductionThirtyEight/>} />
        <Route path='/introductionThirtyNine'  element={< IntroductionThirtyNine/>} />
        <Route path='/introductionFifty' element={<IntroductionFifty/>}/>
        <Route path='/introductionFiftyOne ' element={<IntroductionFiftyOne/>}/>
        <Route path='/introductionFiftyTwo ' element={<IntroductionFiftyTwo/>}/>
        <Route path='/introductionFiftyThree' element={<IntroductionFiftyThree/>}/>
        <Route path='/introductionFiftyFour' element={<IntroductionFiftyFour/>}/>
        <Route path='/introductionFiftyFift' element={<IntroductionFiftyFift/>}/>
        <Route path='/introductionFiftySix' element={<IntroductionFiftySix/>}/>
        <Route path='/introductionFiftySeven' element={<IntroductionFiftySeven/>}/>
        <Route path='/introductionFiftyEight' element={<IntroductionFiftyEight/>}/>
        <Route path='/introductionFiftyNine' element={<IntroductionFiftyNine/>}/>
        </Route>
      </Routes>
    </div>
  )
}

export default App