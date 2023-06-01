import './NotFound.scss';
import Button from '../../components/Button';

function NotFound() {
    return (  
        <div className='notfound-wrapper'>
            <div className='notfound-bg'>
                <section className='notfound-content'>
                    <div className='notfound-404'>
                        <h1>404</h1>
                    </div>
                    <h2>OOPS! PAGE NOT FOUND</h2>
                    <Button className='btn-back' href='/'>BACK TO HOMEPAGE</Button>
                </section>
            </div>
        </div>
    );
}

export default NotFound;