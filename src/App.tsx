import type { FC } from 'react';


import ContentBox from './common/Components/ContentBox';

import style from './App.module.scss';

const App: FC = () => {
return(
  <div className={style.root}>
    <ContentBox/>
  </div>
  );
};

export default App


