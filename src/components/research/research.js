import './research.css';

const Research = ({searchField}) => {
    const handleSearchInput = (event) => {
        searchField(event.target.value)
    }
    return (
         <div className='Research'>
            <label className='Research-label' htmlFor='research'></label>
            <input className='Research-input' type='text' id='research' name='research'
            placeholder='Поиск' onChange={handleSearchInput}/>
         </div>
    )
}

export default Research;