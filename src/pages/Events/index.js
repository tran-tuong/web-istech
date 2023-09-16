import EventSlider from '../../components/Slider/Event/EventSlider';
import './Events.scss';

function Events() {
    return (  
        <main className='container event'>
            <div className='row'>
                <section className='col-12 text-center event-heading'>
                    <h1>All events</h1>
                </section>
                <div className='col-12 event-type'>
                    <h2>Webinars</h2>
                    <div className='row d-flex justify-content-center'>
                        <section className='col-12 event-list'>
                            <EventSlider />
                        </section>
                    </div>
                </div>
                <div className='col-12 event-type'>
                    <h2>Industry connection</h2>
                    <div className='row d-flex justify-content-center'>
                        <section className='col-12 event-list'>
                            <EventSlider />
                        </section>
                    </div>
                </div>
                <div className='col-12 event-type'>
                    <h2>Competitions</h2>
                    <div className='row d-flex justify-content-center'>
                        <section className='col-12 event-list'>
                            <EventSlider />
                        </section>
                    </div>
                </div>
                <div className='col-12 event-type'>
                    <h2>Others</h2>
                    <div className='row d-flex justify-content-center'>
                        <section className='col-12 event-list'>
                            <EventSlider />
                        </section>
                    </div>
                </div>
            </div>
        </main>
    );
}

export default Events;