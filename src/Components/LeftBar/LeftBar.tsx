import './leftBar.scss'
import {MdOutlineDynamicFeed} from 'react-icons/md'
import {BsFillEyeFill}from 'react-icons/bs'
import {MdForum} from 'react-icons/md'
import { useEffect, useState } from 'react'
import {AiOutlineUsergroupAdd} from 'react-icons/ai'
import {MdTimeline} from 'react-icons/md'
import {useDispatch, useSelector} from 'react-redux'
import { RootState, AppDispatch } from '../../Redux/store'
import { changeItem } from '../../Redux/Slices/itemActive'
const LeftBar = () => {
    
    const dispatch :AppDispatch = useDispatch ();

    const itemClicked = useSelector((state: RootState)=>state.itemActive);
    const [clicked, setClicked] = useState(itemClicked);
    
    useEffect(()=>{
        dispatch(changeItem(clicked));
    },[clicked, dispatch]);   
    return (
        <div className="left_bar">

           <div className="left_bar_top">
                <div onClick={()=>setClicked(1)} className= {`left_bar_item ${clicked ===1 && 'active'}`}>
                        <MdOutlineDynamicFeed className='icon'/>
                        <p>Feed</p>
                </div>
                <div onClick={()=>setClicked(2)} className={`left_bar_item ${clicked ===2 && 'active'}`}>
                    <BsFillEyeFill className='icon'/>
                    <p>Watchlist</p>
                </div>
                <div onClick={()=>setClicked(3)} className={`left_bar_item ${clicked ===3 && 'active'}`}>
                    <MdForum className='icon'/>
                    <p>Communities</p>
                </div>
                <div onClick={()=>setClicked(4)} className={`left_bar_item ${clicked ===4 && 'active'}`}>
                    <AiOutlineUsergroupAdd className='icon'/>
                    <p>Invite Traders</p>
                </div>
                <div onClick={()=>setClicked(5)} className={`left_bar_item ${clicked ===5 && 'active'}`}>
                    <MdTimeline className='icon'/>
                    <p>Trade</p>
                </div>
           </div>
           <div className="hr"></div>
           <div className="left_bar_bottom">
               <span>Close Traders</span>
               <div className="close_traders_container">
                   <div className='each_trader'>
                         <img src="http://kibet-brian.herokuapp.com/Assets/brianphoto.jpg" alt="Trader" />
                         <p>Brian Kibet</p>
                   </div>
                   <div className='each_trader'>
                         <img src="http://kibet-brian.herokuapp.com/Assets/brianphoto.jpg" alt="Trader" />
                         <p>Brian Kibet</p>
                   </div>
               </div>
           </div>
          

        </div>
    )
}

export default LeftBar
