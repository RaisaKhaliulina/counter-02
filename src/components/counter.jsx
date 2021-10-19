import React,{useState} from 'react';

const Counter = () => {

    const[count, setCount]=useState(0)
    const tags = ["tag1","tag2","tag3"]
    const[imajeUrl, setImajeurl] = useState("https://picsum.photos/200");

    const formCount = () => {
        return count ===0 ? "Ноль" : count
    }

    const getBageclasses = () => {
    let classes = "badge m-2 bg-"
    classes +=count === 0 ? "primary":"danger"
    return classes
    }
    const renderTags= ()=> {
        if(tags.length===0)return "Тегов не найдено"
        return tags.map((tag) =>
        <li key={tag} >{tag}</li>)
        }
    const handleIncrement = () => {
        setCount(count+1)
    }
    return ( 
      <>
        {tags.length ===0 && "Теги не найдены"}
        {renderTags()}
        <img src={imajeUrl} alt=""/>
        <span className={getBageclasses()}>{formCount()}</span> 
        <button 
          onClick={handleIncrement}
          className="btn btn-secondary btn-sm">
          Increment
        </button>
      </>
    );
};
 
export default Counter;