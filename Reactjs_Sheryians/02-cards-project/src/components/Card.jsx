import { Bookmark } from 'lucide-react'

const Card = ({ data }) => {
    const { brandLogo, companyName, datePosted, location, pay, post, tag1, tag2 } = data;
    return (
        <>
            <div className="card">
                <div className="top">
                    <div>
                        <img src={brandLogo} alt="" />
                    </div>
                    <button>Save <Bookmark size={15} /></button>
                </div>
                <div className="center">
                    <div>
                        <h3>{companyName} <span>{datePosted}</span></h3>
                        <h3>{post}</h3>
                        <div className='tag'>
                            <h4>{tag1}</h4>
                            <h4>{tag2}</h4>
                        </div>
                    </div>
                </div>
                <div className="bottom">
                    <div>
                        <h3>{pay}</h3>
                        <p>{location}</p>
                    </div>
                    <button>Apply Now</button>
                </div>
            </div>
        </>
    )
}

export default Card;