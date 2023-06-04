import Header from '../components/Home/Header/Header';
import Footer from '../components/Home/Footer/Footer';

export default function HomeTemplate({ children }) {
  return (
    <div>
        <Header/>
        {children}
        <Footer/>
    </div>
  )
}
