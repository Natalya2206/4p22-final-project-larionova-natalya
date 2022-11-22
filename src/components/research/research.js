import './research.css';

function Research () {
    return (
         <div className='Research'>
            <label className='Research-label' htmlFor='research'></label>
            <input className='Research-input' type='text' id='research' name='research' placeholder='Поиск'/>
         </div>
    )
}

export default Research;