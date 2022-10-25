import add_button from '../../public/images/add_task.png'

export default function Block({name,type}) {
  return (

    <div className="block">
        <div className="block_content">
          <ul className="app_text block_text">
            {name}
            <li className="block_task">sdgjg</li>
            <li className="block_task">sdgjg</li>
            <li className="block_task">sdgjg</li>
            <li className="block_task">sdgjg</li>
            <li className="block_task">sdgjg</li>
            <li className="block_task">sdgjg</li>
            <li className="block_task">sdgjg</li>
          </ul>
          {type==="WITH_ADD" &&
          <div className="app_text block_add_item">
           <button className='block_add_item_button'>Add card</button>
          </div>
          }
        </div>
        
    </div>
  )
}