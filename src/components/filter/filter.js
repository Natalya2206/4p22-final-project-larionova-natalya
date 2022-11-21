import './filter.css';

function Filter () {
    return (
         <div className='Filter'>
            <div className='Filter-research'>
            <label class='Filter-label' for='research'></label>
            <input className='Filter-input' type='text' id='research' name='research' placeholder='Поиск'/>
            </div>
         </div>
    )
}

export default Filter;