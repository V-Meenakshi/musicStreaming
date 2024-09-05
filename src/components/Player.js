import { assets } from "../assets/assets";

function Player() {
    return (
        <div className="bg-black bg-opacity-50 d-flex" style={{width:"100%",height:"10%"}}>
            <div className="m-2 d-flex">
                <img src={assets.shapeOfYou_icon} style={{width:'63px'}} alt ="shape of you icon"/>
                <div>
                    <p className="mx-2 my-auto lead">Shape of You</p>
                    <p className="mx-2 my-auto">Ed Sheeran</p>
                </div>
            </div>
            <div className="d-flex flex-column align-items-center gap-1 m-auto">
                <div className="d-flex gap-3">
                    <img src={assets.shuffle_icon} alt="shuffle" style={{width:'25px'}}/>
                    <img src={assets.previous_icon} alt="previous" style={{width:'25px'}}/>
                    <img src={assets.play_icon} alt="play" style={{width:'25px'}}/>
                    <img src={assets.next_icon} alt="next" style={{width:'25px'}}/>
                    <img src={assets.loop_icon} alt="loop" style={{width:'25px'}}/>
                </div>
                <div className="d-flex align-items-center gap-3">
                    <p className="mb-0">1:06</p>
                    <div className="bg-secondary rounded-pill cursor-pointer" style={{ width: '60vw', maxWidth: '500px' }}>
                        <hr className="border-0 bg-green rounded-pill m-0" style={{ height: '3px', width: '20vw' }} />
                    </div>
                    <p className="mb-0">3:28</p>
                </div>

            </div>
        </div>
    )
}
export default Player;