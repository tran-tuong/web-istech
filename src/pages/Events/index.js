import EventSlider from '../../components/Slider/Event/EventSlider';
import './Events.scss';
import Data from '../../Data/Events.json';

function Events() {

    const event_type = (type) => {
        console.log(type);
        return Data.filter(item => item.type === type);
    }

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
                            <EventSlider data={event_type('webinar')} />
                        </section>
                    </div>
                </div>
                <div className='col-12 event-type'>
                    <h2>Industry connection</h2>
                    <div className='row d-flex justify-content-center'>
                        <section className='col-12 event-list'>
                            <EventSlider data={event_type('industry connection')} />
                        </section>
                    </div>
                </div>
                <div className='col-12 event-type'>
                    <h2>Competitions</h2>
                    <div className='row d-flex justify-content-center'>
                        <section className='col-12 event-list'>
                            <EventSlider data={event_type('competition')} />
                        </section>
                    </div>
                </div>
                <div className='col-12 event-type'>
                    <h2>Others</h2>
                    <div className='row d-flex justify-content-center'>
                        <section className='col-12 event-list'>
                            <EventSlider data={event_type('others')} />
                        </section>
                    </div>
                </div>
            </div>
        </main>
    );
}

export default Events;