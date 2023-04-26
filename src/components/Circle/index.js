import './Circle.scss';

function Circle({ border, data }) {

    return border ? 
        (
            <>
                <div className='rectangle'>
                    <div className='circle-content'>
                        <div className='circle-content-image'>
                            <img src={data.image} alt='Image' />
                        </div>
                        <h3 className='circle-content-title'>
                            {data.name}
                        </h3>
                        {data.class_id && <p className='circle-content-desc'>ICE2021A</p>}
                    </div>
                </div>
            </>
        ) :
        (
            <>
                    <div className='circle-content'>
                        <div className='circle-content-image'>
                            <img src={data.img} alt='Image' />
                        </div>
                        <h3 className='circle-content-title'>
                            {data.name}
                        </h3>
                        <p className='circle-content-desc'>{data.class}</p>
                    </div>
            </>
        )
}

export default Circle;