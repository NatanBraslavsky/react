import "../style/index.css";
import "../style/showTask.css";
import { IoIosCheckmark } from "react-icons/io";

const ShowTask = () => {
  return (
    <div>
        <ul>
            <li className='listContainerTask'>
                <div className="checkContainer">
                  <IoIosCheckmark className="faCheck"/>
                </div>
                <div className="containerShowTitleDescription">
                  <p className="titleShowText">asdd</p>
                  <p className="descriptionShowText">fsad</p>
                </div>
            </li>
            <li className='listContainerTask'>
                <div className="checkContainer">
                  <IoIosCheckmark className="faCheck"/>
                </div>
                <div className="containerShowTitleDescription">
                  <p className="titleShowText">fads</p>
                  <p className="descriptionShowText">fsad</p>
                </div>
            </li>
        </ul>
    </div>
  )
}

export default ShowTask