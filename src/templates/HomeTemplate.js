import Header from '../components/Home/Header/Header';
import Footer from '../components/Home/Footer/Footer';

export default function HomeTemplate({ children }) {
  const currentPath = window.location.pathname;
  
  return (
    <div className={currentPath === '/'? 'background-main' : ''}>
        <Header/>
        {children}
        <Footer/>
    </div>
  )
}
