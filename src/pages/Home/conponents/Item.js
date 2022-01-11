const Item = ({ id, note, date, time,deletDate }) => {

     function deletItem(){
          deletDate(function(prev){
               return prev.filter(item => item.id !== id);
          })
     }

  return (
    <div className="item">
      <div>
        <p>{note}</p>
        <p>
          {date} {time}
        </p>
      </div>
      <button onClick={deletItem} className="remove">削除</button>
    </div>
  );
};
export default Item;
