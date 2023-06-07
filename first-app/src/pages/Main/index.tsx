import Counter from '../../componets/Counter';
import Footer from '../../componets/Footer/Footer';

import './style.css';

function Main() {
  return (
    <div className="container-main">
      <Counter title={'Contador I'}/>
      <Counter title={'Contador II'} initialValue={10}/>
      <Footer/>
    </div>
  );
}

export default Main;
